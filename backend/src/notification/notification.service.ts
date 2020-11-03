import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import Notifications from 'src/entities/notification.entity';
import { NotificationDto } from 'src/dto/create-notifiaction.dto';
import Chatroom from 'src/entities/chatroom.entity';
import { ReportsService } from 'src/reports/reports.service';
import { ThreadsService } from 'src/threads/threads.service';

@Injectable()
export class NotificationsService {
    
    constructor(
        @InjectRepository(Notifications)
        private notificationsRepository: Repository<Notifications>,
        @InjectRepository(Chatroom)
        private chatroomsRepository: Repository<Chatroom>,

        @Inject(forwardRef(() => ReportsService))
        private reportsService: ReportsService,

        @Inject(forwardRef(() => ThreadsService))
        private threadService: ThreadsService
    ){}

    // async find_id_chat(userID: ObjectID,chatroomID: ObjectID): Promise <Notifications> {
    //     return this.notificationsRepository.findOne({where:{userID: userID, object_type: 'chat',chatroomID: chatroomID}})
    // } // get one id
    
    // async find_id_friend(userID: ObjectID): Promise <Notifications> {
    //     return this.notificationsRepository.findOne({where:{userID: userID, object_type: 'friend_request'}})
    // } // get one id

    // async find_id_report(userID: ObjectID): Promise <Notifications> {
    //     return this.notificationsRepository.findOne({where:{userID: userID, object_type: 'report'}})
    // } // get one id
    
    async allUnread(userID: ObjectID): Promise <any> {
        let allnoti: Notifications[]
        await this.notificationsRepository.find({where:{userID: userID, date_read:null}})
            .then(set => {allnoti = set});
        allnoti = allnoti.filter(each =>{if(each.object_type !== "chat"){return true;}})
        let allnotiwithInfo = [];
        for(let i = 0; i<allnoti.length; i++){
            if(allnoti[i].object_type == "friend_request" || allnoti[i].object_type == "friend_accept"){
                var notiwithinfo = {
                    notificationInfo: allnoti[i],
                    
                }
            }
            else if(allnoti[i].object_type == "reportT_considered"){
                var notiRPTwithinfo = {
                    notificationInfo: allnoti[i],
                    reportTInfo: await this.reportsService.findOneReportedThread(allnoti[i].object_typeID),
                }
                allnotiwithInfo.push(notiRPTwithinfo)
            }
            else if(allnoti[i].object_type == "reportT_considered"){
                var notiRPCwithinfo = {
                    notificationInfo: allnoti[i],
                    reportTInfo: await this.reportsService.findOneReportedComment(allnoti[i].object_typeID),
                }
                allnotiwithInfo.push(notiRPCwithinfo)
            }
            else if(allnoti[i].object_type == "comment"){
                var notiCwithinfo = {
                    notificationInfo: allnoti[i],
                    commentInfo: await this.threadService.findOneComment(allnoti[i].object_typeID),
                }
                allnotiwithInfo.push(notiCwithinfo)
            }

        }
            
        return allnotiwithInfo;
    }

    async noticontacts(userID: ObjectID): Promise <Notifications[]> {
        return this.notificationsRepository.find({userID: userID, object_type: 'chat', date_read:null})
    }

    // async report(userID: ObjectID): Promise <Notifications[]> {
    //     return this.notificationsRepository.find({userID: userID, object_type: 'report'})
    // }

    // async findReport(notificationDto: NotificationDto){
    //     const admin = this.notificationsRepository.find({object_type: 'report'})
    //     return admin;
    // }

    async postFriendRequest(userID1: ObjectID, userID2: ObjectID){
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        var notificationDto:NotificationDto = {
            userID: userID1,
            object_type: 'friend_request',
            object_typeID:userID2,
            date_noti: date_noti,
            date_read:null

        };
        
        return this.notificationsRepository.save(notificationDto)
    }

    async postAcceptFriend(userID1: ObjectID, userID2: ObjectID){
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        var notificationDto:NotificationDto = {
            userID: userID1,
            object_type: "friend_accepted",
            object_typeID:userID2,
            date_noti: date_noti,
            date_read:null

        };
        return this.notificationsRepository.save(notificationDto)
    }
    
    async postChatroom(userID: ObjectID, chatroomID: ObjectID){
        /*let chatroom: Chatroom;
        //console.log(chatroomID);
        await this.chatroomsRepository.findOne({where:{_id: chatroomID}})
            .then (setchatroom =>{
                chatroom = setchatroom
            });
            console.log(chatroom);
        let member = chatroom.member_arr;
        let mem: []; 
        member = member.filter(each =>{if(each.userID.toString() !== userID.toString()){console.log(each.userID, userID, each.userID!==userID);return true;}})*/
            //         mem.push(ele.userID);
            //         //console.log('kuy PP')
            //         return true;
            //     })
        // member.forEach(ele =>{
        //     if(ele.userID.toString() !== userID.toString()){
        //         mem.push(ele.userID);
        //         //console.log('kuy PP')
        //         return true;
        //     }
            //console.log(ele.userID.toString() !== userID.toString());
        //})


        //console.log(member);


        // for (let j =0 ; j< member.length; j++){
        //     const a = member[j].userID;
        //     if(member[j].userID !== userID){
        //         mem.push(a);
        //     }
        // }
        /*let dateNoti = new Date();
        dateNoti.setMinutes(dateNoti.getMinutes()+7*60)
        for(let i =0 ; i<member.length; i++){
            let noti:Notifications = {
                userID: member[i].userID,
                object_type: "chat",
                object_typeID: chatroomID,
                date_noti: dateNoti,
                date_read: null
            }
            this.notificationsRepository.save(noti);
        }*/
        
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        var notificationDto:NotificationDto = {
            userID: userID,
            object_type: "chat",
            object_typeID:chatroomID,
            date_noti: date_noti,
            date_read:null

        };
        
        return this.notificationsRepository.save(notificationDto);
    }
    
    

    async postReportTCon(userID: ObjectID, reportTID: ObjectID){
        
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        var notificationDto:NotificationDto = {
            userID: userID,
            object_type: "reportT_considered",
            object_typeID:reportTID,
            date_noti: date_noti,
            date_read:null

        };

        return this.notificationsRepository.save(notificationDto);
    }

    async postReportCCon(userID: ObjectID, reportTID: ObjectID){
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        var notificationDto:NotificationDto = {
            userID: userID,
            object_type: "reportC_considered",
            object_typeID:reportTID,
            date_noti: date_noti,
            date_read:null

        };
        return this.notificationsRepository.save(notificationDto);
    }

    async postComment(userID: ObjectID, commentID: ObjectID){
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        var notificationDto:NotificationDto = {
            userID: userID,
            object_type: "comment",
            object_typeID:commentID,
            date_noti: date_noti,
            date_read:null

        };
        
        return this.notificationsRepository.save(notificationDto);
    }




    async patchChatroom(userID: ObjectID ,chatroomID: ObjectID): Promise <Notifications> {
        let allnotichat: Notifications[];
        await this.notificationsRepository.find({where:{userID:userID, object_type:"chat", object_typeID: chatroomID, date_read:null}})
            .then(setallnoti => {allnotichat = setallnoti});
        let dateRead = new Date();
        dateRead.setMinutes(dateRead.getMinutes()+7*60);
        var newdateRead = {date_read: dateRead}
        for(let i =0; i<allnotichat.length; i++){
            await this.notificationsRepository.update({userID:userID, object_type:"chat", object_typeID: chatroomID}, newdateRead);
        }
        return ;
    }

    async patchAllNoti(userID: ObjectID): Promise <Notifications> {
        console.log("test");
        let allnoti: Notifications[];
        await this.notificationsRepository.find({where:{userID:userID,  date_read:null}})
            .then(setallnoti => {allnoti = setallnoti});
        
        allnoti = allnoti.filter(each =>{if(each.object_type !== "chat"){return true;}})
        //console.log(allnoti);

        let dateRead = new Date();
        dateRead.setMinutes(dateRead.getMinutes()+7*60);
        var newdateRead = {date_read: dateRead}
        for(let i =0; i<allnoti.length; i++){
            await this.notificationsRepository.update({userID:userID, object_type:allnoti[i].object_type, object_typeID:allnoti[i].object_typeID}, newdateRead);
        }
        
        return ;
    }

    
}



