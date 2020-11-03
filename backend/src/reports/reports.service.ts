import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';

import { ThreadsService } from 'src/threads/threads.service';
import Admin from 'src/entities/admin.entity';
import { UpdateReportment_commentDto } from 'src/dto_update/update-reportc.dto';
import { UpdateReportment_threadDto } from 'src/dto_update/update-reportT.dto';
import User from 'src/entities/user.entity';
import { NotificationsService } from 'src/notification/notification.service';
import { UsersService } from 'src/users/users.service';

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
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @Inject(forwardRef(() => NotificationsService))
    private notificationsService: NotificationsService,
    @Inject(forwardRef(() => ThreadsService))
    private threadsService: ThreadsService,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService
      
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
    const own = this.usersService.findUserInfo(new ObjectID(rt.userID));
    return [rt, await(info_rt_thread), await(own)];
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
    const own = this.usersService.findUserInfo(new ObjectID(rc.userID));
    return [rc,  await(info_rc_comment), await(own)];
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

  async actReportC(reportCID: ObjectID, userID:ObjectID, updateReportCDto: UpdateReportment_commentDto):Promise<any>{
    if(updateReportCDto.date_delete !== undefined){
      let dateDel = new Date();
      dateDel.setMinutes(dateDel.getMinutes()+7*60);
    }
    else{
      updateReportCDto.considered_by = {"userID":userID};
      let dateConsidered = new Date();
      dateConsidered.setMinutes(dateConsidered.getMinutes()+7*60);
      updateReportCDto.date_considered = dateConsidered;
      //noti
      let thisRPC: Reportment_comment;
      await this.reportment_commentsRepository.findOne({where:{_id: reportCID}})
        .then(setrpc => {thisRPC = setrpc});
      console.log(thisRPC);

      await this.notificationsService.postReportCCon(new ObjectID(thisRPC.userID),reportCID);
    }
    return this.reportment_commentsRepository.update({reportCID:reportCID}, updateReportCDto);
  }

  async actReportT(reportTID: ObjectID, userID:ObjectID, updateReportTDto: UpdateReportment_threadDto):Promise<any>{
    if(updateReportTDto.date_delete !== undefined){
      let dateDel = new Date();
      dateDel.setMinutes(dateDel.getMinutes()+7*60);
    }
    else{
      updateReportTDto.considered_by = {"userID":userID};
      let dateConsidered = new Date();
      dateConsidered.setMinutes(dateConsidered.getMinutes()+7*60);
      updateReportTDto.date_considered = dateConsidered;
      //noti
      let thisRPT: Reportment_thread;
      await this.reportment_threadsRepository.findOne({where:{_id: reportTID}})
        .then(setrpt => {thisRPT = setrpt});
      

      await this.notificationsService.postReportTCon(new ObjectID(thisRPT.userID),reportTID);
    }
    return this.reportment_threadsRepository.update({reportTID:reportTID}, updateReportTDto);
  }

  async addReadRC(reportCID:ObjectID, userID:ObjectID){
    let admin: Admin;
    await this.adminRepository.findOne({where:{userID:userID}})
      .then(setAdmin => {admin = setAdmin});
    if(!admin.reportC_read_arr.some(eachr =>{if(eachr.reportCID.toHexString === reportCID.toHexString){return true;}})){
      admin.reportC_read_arr.push({reportCID: reportCID});
    }

    return this.adminRepository.update({userID:userID}, admin);
  }

  async addReadRT(reportTID:ObjectID, userID:ObjectID){
    let admin: Admin;
    await this.adminRepository.findOne({where:{userID:userID}})
      .then(setAdmin => {admin = setAdmin});
    if(!admin.reportT_read_arr.some(eachr =>{if(eachr.reportTID.toHexString === reportTID.toHexString){return true;}})){
      admin.reportT_read_arr.push({reportTID: reportTID});
    }

    return this.adminRepository.update({userID:userID}, admin);
  }



  async createAdmin(email: string){
    let user: User;
    await this.usersRepository.findOne({where:{email: email}})
      .then(setUser => {user = setUser});
    var isadmin = {isAdmin: true}
    this.usersRepository.update({userID: user.userID},isadmin)
    var createAdminDto = {
      userID: new ObjectID(user.userID),
      reportC_read_arr: [],
      reportT_read_arr: []
    }
    return this.adminRepository.save(createAdminDto);

  }
}
