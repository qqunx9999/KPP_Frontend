import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Thread from './thread.entity';
import Commentation from './comentation.entity';

import { ObjectID } from 'mongodb';
import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { CreateReportment_threadDto } from 'src/dto/create-reportment_thread.dto';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Reportment_comment from 'src/entities/reportment_comment.entity';
import { CreateReportment_commentDto } from 'src/dto/create-reportment_comment.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    @InjectRepository(Commentation)
    private commentationsRepository: Repository<Commentation>,
    @InjectRepository(Reportment_thread)
    private reportment_threadsRepository: Repository<Reportment_thread>,
    @InjectRepository(Reportment_comment)
    private reportment_commentRepository: Repository<Reportment_thread>,
    private usersService: UsersService,
      
  ) {}

  private th = [];
  async findAll(): Promise<Thread[]> {
    return this.threadsRepository.find();
  }
  
  async findOneThread(threadID: ObjectID): Promise<any>{
    await this.threadsRepository.find({where:{ _id: threadID}})
      .then(setthread => {
        this.th = setthread;
      }); 
    //console.log(this.th[0].userID);
    var own_thread:ObjectID = this.th[0].userID
    const info_own_thread = this.usersService.findUserInfo(own_thread);
    return [this.th, await(info_own_thread)];
  }
  

  async createThread(createThreadDto: CreateThreadDto) {
    createThreadDto.up_vote_arr = [];
    createThreadDto.down_vote_arr = [];
    createThreadDto.up_vote_count = 0;
    createThreadDto.down_vote_count = 0;
    createThreadDto.total_comment = 0;
    createThreadDto.number_of_all_comment = 0;
    createThreadDto.date_lastedit = null;
    createThreadDto.date_delete = null;
    return this.threadsRepository.save(createThreadDto);
  }

  async findAllCommentations(threadID: ObjectID): Promise<Commentation[]> {
    return this.commentationsRepository.find({where:{ threadID: threadID }});
  } 

  async createCommentation(createCommentationDto: CreateCommentDto) {
    return this.commentationsRepository.save(createCommentationDto);
  }

  async createReportment_thread(createReportment_threadDto: CreateReportment_threadDto) {
    return this.reportment_threadsRepository.save(createReportment_threadDto);
  }

  async createReportment_comment(createReportment_commentDto: CreateReportment_commentDto){
    return this.reportment_commentRepository.save(createReportment_commentDto);
  }
}
