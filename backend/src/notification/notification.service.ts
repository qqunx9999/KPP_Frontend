import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import Notifications from 'src/entities/notification.entity';
import { NotificationDto } from 'src/dto/create-notifiaction.dto';
import Chatroom from 'src/entities/chatroom.entity';

@Injectable()
export class NotificationsService {
    constructor(
        @InjectRepository(Notifications)
        private notificationsRepository: Repository<Notifications>,
        @InjectRepository(Chatroom)
        private chatroomsRepository: Repository<Chatroom>,
    ){}

    async find_id_chat(userID: ObjectID,chatroomID: ObjectID): Promise <Notifications> {
        return this.notificationsRepository.findOne({where:{userID: userID, object_type: 'chat',chatroomID: chatroomID}})
    } // get one id
    
    async find_id_friend(userID: ObjectID): Promise <Notifications> {
        return this.notificationsRepository.findOne({where:{userID: userID, object_type: 'friend_request'}})
    } // get one id

    async find_id_report(userID: ObjectID): Promise <Notifications> {
        return this.notificationsRepository.findOne({where:{userID: userID, object_type: 'report'}})
    } // get one id
    
    async allUnread(userID: ObjectID): Promise <Notifications[]> {
        return this.notificationsRepository.find({where:{userID: userID, object_type: 'chat'}})
    }

    async friendRequest(userID: ObjectID): Promise <Notifications[]> {
        return this.notificationsRepository.find({userID: userID, object_type: 'friend_request'})
    }

    async report(userID: ObjectID): Promise <Notifications[]> {
        return this.notificationsRepository.find({userID: userID, object_type: 'report'})
    }

    async findReport(notificationDto: NotificationDto){
        const admin = this.notificationsRepository.find({object_type: 'report'})
        return admin;
    }

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
        let notificationDto:NotificationDto;
        notificationDto.userID = userID;
        notificationDto.object_type = "reportT_considered";
        notificationDto.object_typeID = reportTID;
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        notificationDto.date_noti = date_noti;
        notificationDto.date_read = null;
        return this.notificationsRepository.save(notificationDto);
    }

    async postReportCCon(userID: ObjectID, reportTID: ObjectID){
        let notificationDto:NotificationDto;
        notificationDto.userID = userID;
        notificationDto.object_type = "reportC_considered";
        notificationDto.object_typeID = reportTID;
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        notificationDto.date_noti = date_noti;
        notificationDto.date_read = null;
        return this.notificationsRepository.save(notificationDto);
    }

    async postComment(userID: ObjectID, commentID: ObjectID){
        let notificationDto:NotificationDto;
        notificationDto.userID = userID;
        notificationDto.object_type = "comment";
        notificationDto.object_typeID = commentID;
        let date_noti = new Date();
        date_noti.setMinutes(date_noti.getMinutes()+7*60);
        notificationDto.date_noti = date_noti;
        notificationDto.date_read = null;
        return this.notificationsRepository.save(notificationDto);
    }




    async patchChatroom(userID: ObjectID ,chatroomID: ObjectID): Promise <Notifications> {
        const unread_noti = await this.find_id_chat(userID,chatroomID);
        unread_noti.date_read = new Date();
        return unread_noti;
    }

    async patchFriendNoti(userID: ObjectID): Promise <Notifications> {
        const friend_noti = await this.find_id_friend(userID);
        friend_noti.date_read = new Date();
        return friend_noti;
    }

    async patchReportNoti(userID: ObjectID): Promise <Notifications> {
        const report_noti = await this.find_id_report(userID);
        report_noti.date_read = new Date();
        return report_noti;
    }
}



