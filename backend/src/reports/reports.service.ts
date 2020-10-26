import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';

import { ThreadsService } from 'src/threads/threads.service';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    @InjectRepository(Commentation)
    private commentationsRepository: Repository<Commentation>,
    @InjectRepository(Reportment_thread)
    private reportment_threadsRepository: Repository<Reportment_thread>,
    @InjectRepository(Reportment_comment)
    private reportment_commentsRepository: Repository<Reportment_comment>,
    private threadsService: ThreadsService,
      
  ) {}
/*
  async findAllReportedTs(): Promise<Reportment_thread[]> {
    return this.reportment_threadsRepository.find();
  }

  async findAllReportedCs(): Promise<Reportment_comment[]> {
    return this.reportment_commentsRepository.find();
  }*/

  async findOneReportedThread(reportTID: ObjectID): Promise<Reportment_thread[]>{
    let rt: Reportment_thread;
    await this.reportment_threadsRepository.findOne({ where:{ _id: reportTID } })
      .then(setRT => {
        rt = setRT;
      });
    let rt_thread:ObjectID = rt.threadID
    const info_rt_thread = this.threadsService.findOneThreadWithOwn(rt_thread);
    return [rt, await(info_rt_thread)];
  }

/*
  async findOneReportedComment(reportCID: ObjectID): Promise<Reportment_comment[]>{
    let rc: Reportment_comment;
    await this.reportment_commentsRepository.findOne({ where:{ _id: reportCID } })
      .then(setRC => {
        rc = setRC;
      });
    let rc_thread: ObjectID = rc.threadID
    const info_rc_thread = this.threadsService.findOneThreadWithOwn(rc_thread);
    //wait for /threads/{threadID}/comments/{commentID}
    
    return [rc, await(info_rc_thread), await()];
  }*/
}
