import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Thread from './thread.entity';
import Commentation from './comentation.entity';
import { ObjectID } from 'mongodb';
import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    @InjectRepository(Commentation)
    private commentationsRepository: Repository<Commentation>
  ) {}

  async findAll(): Promise<Thread[]> {
    return this.threadsRepository.find();
  }

  async createThread(createThreadDto: CreateThreadDto) {
    return this.threadsRepository.save(createThreadDto);
  }

  async findAllCommentations(threadID: ObjectID): Promise<Commentation[]> {
    return this.commentationsRepository.find({where:{ threadID:threadID }});
  } 

  
}
