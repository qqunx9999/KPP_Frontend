import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Thread from './thread.entity';
import Commentation from './comentation.entity';

import { ObjectID } from 'mongodb';
import { CreateThreadDto } from 'src/dto/create-thread.dto';
import { CreateCommentDto } from 'src/dto/create-comment.dto';
import { CreateReportment_threadDto } from 'src/dto/create-reportment_thread.dto';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Reportment_comment from 'src/entities/reportment_comment.entity';
import { CreateReportment_commentDto } from 'src/dto/create-reportment_comment.dto';
import { UsersService } from 'src/users/users.service';
import { UpdateThreadDto } from 'src/dto_update/update-thread.dto';


@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    @InjectRepository(Commentation)
    private commentationsRepository: Repository<Commentation>,
    @InjectRepository(Reportment_thread)
    private reportment_threadsRepository: Repository<Reportment_thread>,
    @InjectRepository(Reportment_comment)
    private reportment_commentRepository: Repository<Reportment_thread>,
    private usersService: UsersService,
      
  ) {}

  
  async findAll(): Promise<Thread[]> {
    return this.threadsRepository.find();
  }

  async filterThread(tags: string[], sortby:string, pagesize: number, pageNo: number): Promise<Thread[]>{
    let threadArr: Thread[];
    var orderby: object;
    if(sortby === "Oldest"){  orderby = {date_create: "ASC"};}
    else if(sortby === "popular"){  orderby = {total_comment: "DESC"};}
    else if (sortby === "like"){orderby = {up_vote_count: "DESC"};}
    else if (sortby === "Hottest"){orderby = {total_comment: "DESC", up_vote_count:"DESC", down_vote_count: "DESC"};}
    else {orderby = {date_create: "DESC"};}
    //console.log(tags);
    //console.log(tags[0]);
    await this.threadsRepository.find({ where:{date_delete:null} ,order:orderby})
      .then(setThread => {
        threadArr = setThread;
      });  
    let threads: Thread[] 
    if(tags[0] !== ''){
      threads =  threadArr.filter(eachThread => {
        var countTag = 0;
        for(let i = 0; i<tags.length; i++){
          for(let j = 0; j<eachThread.tag_arr.length; j++){
            if (tags[i] === eachThread.tag_arr[j]){
              countTag++;
              break;
            }
          }
        }
        if(countTag === tags.length){return true;}
        else{return false;}
      });
    }
    else{ threads = threadArr;}
    // const totals = Math.ceil(threads.length/pagesize);
    // let begin = pagesize*(pageNo-1);
    // let last = pagesize*pageNo; if(last>threads.length){last = threads.length}
    // threads = threads.slice(begin, last);
    return  threads; //, pageInfo:{pagesize: threads.length, pageNo, total: totals}};
  }

  async searchThread(keyword: string, tags: string[], sortby:string, pagesize: number, pageNo: number):Promise<Thread[]>{
    let threadArr: Thread[];
    await this.filterThread(tags, sortby, pagesize, pageNo)
      .then(setThread => {
      threadArr = setThread;
      });
    let threads: Thread[];
    threads = threadArr.filter(eachThread => {
      let stri = 0;
      for(var i = 0; i<eachThread.topic.length; i++){
        if(eachThread.topic[i] === keyword[stri]){
          stri++;
          if (stri === keyword.length){ return true;}
        }
        else{
          stri = 0;
        }
      }
      return false;
    });
    return threads;
  }


  
  async findOneThread(threadID: ObjectID): Promise<any>{
    let th: Thread ;
    await this.threadsRepository.findOne({where:{ _id: threadID}})
      .then(setThread => {
        th = setThread;
      }); 
    //console.log(th);
    let own_thread:ObjectID = th.userID
    const info_own_thread = this.usersService.findUserInfo(own_thread);
    return [th, await(info_own_thread)];
  }
  

  async createThread(createThreadDto: CreateThreadDto) {
    createThreadDto.userID = new ObjectID(createThreadDto.userID); // userID: string to Object
    createThreadDto.up_vote_arr = [];
    createThreadDto.down_vote_arr = [];
    createThreadDto.up_vote_count = 0;
    createThreadDto.down_vote_count = 0;
    createThreadDto.total_comment = 0;
    createThreadDto.number_of_all_comment = 0;
    let date = new Date();
    date.setMinutes(date.getMinutes()+7*60);
    createThreadDto.date_create = date;
    createThreadDto.date_lastedit = null;
    createThreadDto.date_delete = null;
    return this.threadsRepository.save(createThreadDto);
  }

  async findAllCommentations(threadID: ObjectID): Promise<Commentation[]> {
    return this.commentationsRepository.find({where:{ threadID: threadID }});
  } 

  async findPageCommentations(threadID: ObjectID, pagesize: number, pageNo: number): Promise<any>{
    let commentArr: Commentation[];
    console.log(threadID);
    await this.commentationsRepository.find({where:{threadID: threadID}, order:{commentNO:"ASC"}})
      .then(setcomment =>{
        commentArr = setcomment;
      });
    console.log(commentArr);
    const totals = Math.ceil(commentArr.length/pagesize);
    let begin = pagesize*(pageNo-1);
    let last = pagesize*pageNo; if(last>commentArr.length){last = commentArr.length}
    //console.log(pagesize);
    commentArr = commentArr.slice(begin, last);
    var comments: Array<any> = [];
    //console.log(commentArr);
    //console.log(commentArr.length);
    for (let i = 0 ; i< commentArr.length; i++){
      let userInfo =  await this.usersService.findUserInfo(commentArr[i].userID);
      //console.log(userInfo);
      //console.log("He");
      comments.push({comment:commentArr[i], userInfo});
      
    }
    //console.log(comments);
    return {comments, pageInfo:{pagesize:comments.length, pageNo, total: totals}};
  }

  async createCommentation(createCommentationDto: CreateCommentDto) {
    const threadID: ObjectID = createCommentationDto.threadID;
    //console.log(threadID);
    //var updateThreadDto: UpdateThreadDto;
    let thread: Thread; 
    await this.threadsRepository.findOne({where:{ _id: threadID}})
      .then(setthread =>{
        thread = setthread;
      })
    thread.total_comment = thread.total_comment+1;
    thread.number_of_all_comment = thread.number_of_all_comment+1;
    
    this.threadsRepository.update({threadID: threadID}, thread);

    createCommentationDto.commentNO = thread.number_of_all_comment;
    let date = new Date();
    date.setMinutes(date.getMinutes()+7*60);
    createCommentationDto.date_create = date;
    createCommentationDto.date_lastedit = null;
    createCommentationDto.date_delete = null;
    return this.commentationsRepository.save(createCommentationDto);
  }

  async createReportment_thread(createReportment_threadDto: CreateReportment_threadDto) {
    createReportment_threadDto.status = "wait";
    let date = new Date();
    date.setMinutes(date.getMinutes()+7*60);
    createReportment_threadDto.date_create = date;
    createReportment_threadDto.date_considered = null;
    createReportment_threadDto.date_delete = null;
    return this.reportment_threadsRepository.save(createReportment_threadDto);
  }

  async createReportment_comment(createReportment_commentDto: CreateReportment_commentDto){
    createReportment_commentDto.status = "wait";
    let date = new Date()
    date.setMinutes(date.getMinutes()+7*60);
    createReportment_commentDto.date_create = date;
    createReportment_commentDto.date_considered = null;
    createReportment_commentDto.date_delete = null;
    return this.reportment_commentRepository.save(createReportment_commentDto);
  }

  async updateThread(threadID: ObjectID, updateThreadDto: UpdateThreadDto){
    //console.log(updateThread_dto);
    return this.threadsRepository.update({threadID: threadID} , updateThreadDto);
  }
}
