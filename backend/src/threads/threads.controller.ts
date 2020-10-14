import { Body, Controller, Get, Param, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ObjectID } from 'mongodb'

import Thread from './thread.entity';
import Commentation from './comentation.entity';

import { ThreadsService } from './threads.service';
import { ParseObjectIdPipe } from '../common/pipes';


import { CreateThreadDto } from 'src/dto/create-thread.dto';
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
  async findAllCommentations(@Param('threadID', ParseObjectIdPipe) threadID: ObjectID): Promise<Commentation[]>{
    return this.threadsService.findAllCommentations(threadID);
  }
  
  
  @Post(':threadID/comments')
  async createCommentation(@Param('threadID', ParseObjectIdPipe) threadID:ObjectID, 
                @Body() createCommentationDto: CreateCommentDto){
    createCommentationDto.threadID = threadID;
    return this.threadsService.createCommentation(createCommentationDto);
    }

  

}
