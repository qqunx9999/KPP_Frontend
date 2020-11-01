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

  async RTlisting(adminID: ObjectID): Promise<any[][]>{
    let RTs: Reportment_thread[];
    await this.reportment_threadsRepository.find({ where:{date_delete:null, status: "wait"}, order:{date_create: "DESC"}})
      .then(setRT => {
        RTs = setRT;
      });
    let admin: Admin;
    await this.adminRepository.findOne({ where:{ userID: adminID } })
      .then(setAdmin => {
        admin = setAdmin;
      });
    let RTs_page: any[][];
    RTs_page = [];
    for(let i = 0; i < RTs.length; i++){
      let RT_and_readcheck: any[];
      RT_and_readcheck = [];
      RT_and_readcheck.push(RTs[i]);
      RT_and_readcheck.push(false);
        for(let j = 0; j < admin.reportT_read_arr.length; j++){
          let a = admin.reportT_read_arr[j].reportTID.toHexString();
          let b = RTs[i].reportTID.toHexString();
          if(a ===b){
            RT_and_readcheck[1] = true;
            break;
          }
          //RT_and_readcheck.push(false);
        }
      RTs_page.push(RT_and_readcheck);
    }
    return RTs_page;
  }

  async RClisting(adminID: ObjectID): Promise<any[][]>{
    let RCs: Reportment_comment[];
    await this.reportment_commentsRepository.find({ where:{date_delete:null, status: "wait"}, order:{date_create: "DESC"}})
      .then(setRC => {
        RCs = setRC;
      });
    let admin: Admin;
    await this.adminRepository.findOne({ where:{ userID: adminID } })
      .then(setAdmin => {
        admin = setAdmin;
      });
    let RCs_page: any[][];
    RCs_page = [];
    for(let i = 0; i < RCs.length; i++){
      let RC_and_readcheck: any[];
      RC_and_readcheck = [];
      RC_and_readcheck.push(RCs[i]);
      RC_and_readcheck.push(false);
        for(let j = 0; j < admin.reportC_read_arr.length; j++){
          let a = admin.reportC_read_arr[j].reportCID.toHexString();
          let b = RCs[i].reportCID.toHexString();
          if(a === b){
            RC_and_readcheck.push(true);
            break;
          }
          //RC_and_readcheck.push(false);
        }
      RCs_page.push(RC_and_readcheck);
    }
    return RCs_page;
  }




  
}
