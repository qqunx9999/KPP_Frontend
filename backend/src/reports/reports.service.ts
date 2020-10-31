import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';

import { ThreadsService } from 'src/threads/threads.service';
import Admin from 'src/entities/admin.entity';

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
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,

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

  async findOneReportedComment(reportCID: ObjectID): Promise<Reportment_comment[]>{
    let rc: Reportment_comment;
    await this.reportment_commentsRepository.findOne({ where:{ _id: reportCID } })
      .then(setRC => {
        rc = setRC;
      });
    //let rc_thread:ObjectID = rc.threadID
    let rc_comment:ObjectID = rc.commentID
    //const info_rc_thread = this.threadsService.findOneThreadWithOwn(rc_thread);
    const info_rc_comment = this.threadsService.findOneComment(rc_comment);
    return [rc,  await(info_rc_comment)];
  }

  async RTlisting(adminID: ObjectID): Promise<Reportment_thread[]>{
    let RTs: Reportment_thread[];
    await this.reportment_threadsRepository.find({ where:{date_delete:null, status: "wait"}, order:{date_create: "DESC"}})
      .then(setRT => {
        RTs = setRT;
      });
    let admin: Admin
    await this.adminRepository.findOne({ where:{ _id: adminID } })
      .then(setAdmin => {
        admin = setAdmin;
      });

    let eiei: any[][];
/*
    for(let i = 0; i<tags.length; i++){
      for(let j = 0; j<eachThread.tag_arr.length; j++){
        if (tags[i] === eachThread.tag_arr[j]){
          countTag++;
          break;
        }
      }
    }*/

    for(let i = 0; i < RTs.length; i++){
      let kuy: any[];
      kuy.push(RTs[i]);
        for(let j = 0; j < admin.reportT_read_arr.length; j++){
          if(admin.reportT_read_arr[j].reportTID === RTs[i].threadID){
            kuy.push(true);
            break;
          }
          kuy.push(false);
        }
      eiei.push(kuy);
    }

    return [];
  }






  
}
