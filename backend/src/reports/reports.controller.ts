import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
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
import { of } from 'rxjs';
import { ThreadsController } from 'src/threads/threads.controller';
import { UpdateReportment_commentDto } from 'src/dto_update/update-reportc.dto';
import { UpdateReportment_threadDto } from 'src/dto_update/update-reportT.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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
    async findOneReportedThread(@Param('reportTID', ParseObjectIdPipe) reportTID: ObjectID): Promise<any>{
        return this.reportsService.findOneReportedThread(reportTID);
    }

    @Get('/reportCs/:reportCID')
    async findOneReportedComment(@Param('reportCID', ParseObjectIdPipe) reportCID: ObjectID): Promise<any>{
        return this.reportsService.findOneReportedComment(reportCID);
    }

    @Get('/reportTs/list/:adminID/:pagesize/:pageNO')
    async RTlisting(
        @Param('adminID', ParseObjectIdPipe) adminID: ObjectID,
        @Param('pagesize', ParseIntPipe) pagesize: number,
        @Param('pageNO', ParseIntPipe) pageNO: number
    ): Promise<any>{
        let RTs_page = await this.reportsService.RTlisting(adminID);
        const total = Math.ceil(RTs_page.length / pagesize);
        let begin = pagesize * (pageNO-1);
        let last = pagesize * pageNO; if(last > RTs_page.length){last = RTs_page.length}
        RTs_page = RTs_page.slice(begin, last);
        return {RTs_page, pageInfo:{pagesize: RTs_page.length, pageNO, total: total}};
    }

    @Get('/reportCs/list/:adminID/:pagesize/:pageNO')
    async RClisting(
        @Param('adminID', ParseObjectIdPipe) adminID: ObjectID,
        @Param('pagesize', ParseIntPipe) pagesize: number,
        @Param('pageNO', ParseIntPipe) pageNO: number
    ): Promise<any>{
        let RCs_page = await this.reportsService.RClisting(adminID);
        const total = Math.ceil(RCs_page.length / pagesize);
        let begin = pagesize * (pageNO-1);
        let last = pagesize * pageNO; if(last > RCs_page.length){last = RCs_page.length}
        RCs_page = RCs_page.slice(begin, last);
        return {RCs_page, pageInfo:{pagesize: RCs_page.length, pageNO, total: total}};
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/reportCs/:reportCID/actby/:userID')
    async actReportC(
        @Body() updateReportCDto: UpdateReportment_commentDto,
        @Param('reportCID', ParseObjectIdPipe) reportCID: ObjectID,
        @Param('userID', ParseObjectIdPipe) userID: ObjectID
    ): Promise<any>{
        return this.reportsService.consideredReportC(reportCID, userID, updateReportCDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/reportTs/:reportTID/actby/:userID')
    async actReportT(
        @Body() updateReportTDto: UpdateReportment_threadDto,
        @Param('reportTID', ParseObjectIdPipe) reportTID: ObjectID,
        @Param('userID', ParseObjectIdPipe) userID: ObjectID
    ): Promise<any>{
        return this.reportsService.consideredReportT(reportTID, userID, updateReportTDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/reportCs/:reportCID/reader/:userID')
    async addReadRC(
        @Param('reportCID', ParseObjectIdPipe) reportCID: ObjectID,
        @Param('userID', ParseObjectIdPipe) userID: ObjectID
    ):Promise<any>{
        return this.reportsService.addReadRC(reportCID, userID);
    }

    @UseGuards(JwtAuthGuard)
    @Patch('/reportTs/:reportTID/reader/:userID')
    async addReadRT(
        @Param('reportTID', ParseObjectIdPipe) reportTID: ObjectID,
        @Param('userID', ParseObjectIdPipe) userID: ObjectID
    ):Promise<any>{
        return this.reportsService.addReadRT(reportTID, userID);
    }



    
    @UseGuards(JwtAuthGuard)
    @Post('createadmin/:email') // No need to do sequen diagram
    async createAdmin(@Param('email') email:string){
        return this.reportsService.createAdmin(email);
    }
    
}
