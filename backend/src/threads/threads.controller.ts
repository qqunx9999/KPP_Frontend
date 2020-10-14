import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import { ObjectID } from 'mongodb'
import { ParseObjectIdPipe } from '../common/pipes';
import Thread from './thread.entity';
import Commentation from './comentation.entity';

import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { threadId } from 'worker_threads';
import { CreateCommentDto } from 'src/dto/create-comment.dto';


@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get()
  async findAll(): Promise<Thread[]> {
    return this.threadsService.findAll();
  }

  @Post()
  async createThread(@Body() createThreadDto: CreateThreadDto){
    return this.threadsService.createThread(createThreadDto);
  }


  @Get(':threadID/comments')
  async findAllCommentations(@Param('threadID') threadID: ObjectID): Promise<Commentation[]> {
    return this.threadsService.findAllCommentations(threadID);
  }

  

}
