import { Body, Controller, Get, Param, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ObjectID } from 'mongodb'

import Thread from './thread.entity';
import Commentation from './comentation.entity';

import { ThreadsService } from './threads.service';
import { ParseObjectIdPipe } from '../common/pipes';


import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import { CreateReportment_threadDto } from 'src/dto/create-reportment_thread.dto';
import Reportment_comment from 'src/entities/reportment_comment.entity';
import { CreateReportment_commentDto } from 'src/dto/create-reportment_comment.dto';


@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get()
  async findAll(): Promise<Thread[]> {
    return this.threadsService.findAll();
  }

  @Get(':threadID')
  async findOneThread(@Param('threadID', ParseObjectIdPipe) threadID: ObjectID): Promise<any> {
    return this.threadsService.findOneThread(threadID);
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

  @Post(':threadID/reportTs')
  async createReportment_thread(@Param('threadID', ParseObjectIdPipe) threadID: ObjectID,
                @Body() createReportment_threadDto: CreateReportment_threadDto){
    createReportment_threadDto.threadID = threadID;
    return this.threadsService.createReportment_thread(createReportment_threadDto);
    }
  
  @Post(':threadID/comments/:commentID/reportCs')
  async createReportment_comment(@Param('threadID', ParseObjectIdPipe) threadID: ObjectID,@Param('commentID',ParseObjectIdPipe) commentID: ObjectID,
                @Body() createReportment_commentDto: CreateReportment_commentDto){
    createReportment_commentDto.commentID = commentID;
    return this.threadsService.createReportment_comment(createReportment_commentDto);
    }
  

}
