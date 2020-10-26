import { Controller, Get, Param } from '@nestjs/common';
import { ParseObjectIdPipe } from '../common/pipes';
import { ObjectID } from 'typeorm';

import Thread from 'src/threads/thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Reportment_comment from 'src/entities/reportment_comment.entity';

import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { CreateReportment_threadDto } from 'src/dto/create-reportment_thread.dto';
import { CreateReportment_commentDto } from 'src/dto/create-reportment_comment.dto';

import { ReportsService } from './reports.service';

@Controller('reports')
export class ReportsController {
    constructor(private reportsService: ReportsService) {}

/*
    @Get('reportTs')
    async findAllReportedTs(): Promise<Reportment_thread[]>{
        return this.reportsService.findAllReportedTs()
    ;}

    @Get('reportCs')
    async findAllReportedCs(): Promise<Reportment_comment[]>{
        return this.reportsService.findAllReportedCs()
    ;}*/

    @Get('/reportTs/:reportTID')
    async findOneReportedThread(@Param('reportTID', ParseObjectIdPipe) reportTID: ObjectID): Promise<Reportment_thread[]>{
        return this.reportsService.findOneReportedThread(reportTID);
    }
/*
    @Get('/reportCs/:reportCID')
    async findOneReportedComment(@Param('reportCID', ParseObjectIdPipe) reportCID: ObjectID): Promise<Reportment_comment[]>{
        return this.reportsService.findOneReportedComment(reportCID);
    }*/
}
