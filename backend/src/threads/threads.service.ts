import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Thread from './thread.entity';
import Commentation from './comentation.entity';

import { ObjectID } from 'mongodb';
import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { CreateReportment_threadDto } from 'src/dto/create-reportment_thread';
import Reportment_thread from 'src/entities/reportment_thread.entity';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    @InjectRepository(Commentation)
    private commentationsRepository: Repository<Commentation>,
    @InjectRepository(Reportment_thread)
    private reportment_threadsRepository: Repository<Reportment_thread>
  ) {}

  async findAll(): Promise<Thread[]> {
    return this.threadsRepository.find();
  }

  async findOne(threadID: ObjectID): Promise<Thread[]>{
    return this.threadsRepository.find({where:{ _id: threadID}});
  }

  async createThread(createThreadDto: CreateThreadDto) {
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
}
