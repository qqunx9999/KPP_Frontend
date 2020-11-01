import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import Chatroom from 'src/entities/chatroom.entity';
import Chat_message from 'src/entities/chat_message.entity';
import {CreateChatroomDto}  from 'src/dto/create-chatroom.dto';
import {CreateChat_messageDto}  from 'src/dto/create-chat_message.dto';
import { UpdateChatroomDto } from 'src/dto_update/update-chatroom.dto';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateChat_messageDto} from 'src/dto_update/update-message.dto'
import { User_info } from 'src/common/user_info';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class ChatroomsService {
    constructor(
        @InjectRepository(Chatroom)
        private chatroomsRepository: Repository<Chatroom>,
        @InjectRepository(Chat_message)
        private chat_messagesRepository: Repository<Chat_message>,

        private usersService: UsersService
      ) {}

    async findAll(): Promise<Chatroom[]> {
        return this.chatroomsRepository.find();
    }

    async findOne(chatroomID: ObjectID): Promise<any>{
        let chatroom: Chatroom;
        
        await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setchatroom=>{chatroom = setchatroom});
        //console.log(chatroom);
        let memberInfo: User_info[] = [];
        for(let i = 0; i<chatroom.member_arr.length; i++ ){
            let thismember = await this.usersService.findUserInfo(new ObjectID(chatroom.member_arr[i].userID));
            memberInfo.push(thismember);
        }
        let allMess: Chat_message[]; 
        await this.chat_messagesRepository.find({
            where:{chatroomID: chatroomID, date_delete:null},
            order:{date_create: "DESC"}
        }).then(setAllMess=>{allMess = setAllMess});
        let allMessWithOwn = []
        for(let i = 0; i<allMess.length; i++){
            let OwnMess;
            for(let j =0; j<memberInfo.length; j++){
                if(allMess[i].userID.toHexString() === memberInfo[j].userID.toString()){
                    OwnMess = memberInfo[j];
                }
            }
            
            var messageWithOwn = {
                "message": allMess[i],
                "userInfo": OwnMess
            }
            allMessWithOwn.push(messageWithOwn);
        }


        return {"chatroomInfo":chatroom, "membersInfo":memberInfo, messagesInfo: allMessWithOwn};
    }

    async createChatroom(createChatroomDto: CreateChatroomDto) {
        let date = new Date();
        date.setMinutes(date.getMinutes()+7*60);
        createChatroomDto.date_create = date ;
        createChatroomDto.date_delete = null ;
        createChatroomDto.date_lastactive = date;
        createChatroomDto.totalmember = createChatroomDto.member_arr.length;
        // let Arraymember = [];
        // for(let i = 0; i < createChatroomDto.member_arr.length;i++){
        //     let newmember = {userID:createChatroomDto.member_arr[i].userID,date_join_chat:date,date_leave_chat:null} ;
        //     Arraymember.push(newmember);
        // }
        // createChatroomDto.member_arr = Arraymember;
        const newMem = createChatroomDto.member_arr;
        createChatroomDto.member_arr = [];
        const newChatRoom = await this.chatroomsRepository.save(createChatroomDto);

        for(let i = 0; i<newMem.length; i++){
            await this.usersService.chatroomaction(new ObjectID(newMem[i].userID), newChatRoom.chatroomID, "add");
        }
        

        return newChatRoom;
    }
    
    /*
    async findAllChat_member(chatroomID: ObjectID){
        return this.chatroomsRepository.find({where:{ chatroomID: chatroomID }});
    }
    */
    async findAllMessages(chatroomID: ObjectID){
        return this.chat_messagesRepository.find({where:{ chatroomID: chatroomID , date_delete:null }});
    }

    async createMessages(createChat_messageDto: CreateChat_messageDto){
        const chatroomID : ObjectID = createChat_messageDto.chatroomID;
        let cr : Chatroom ;
            await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setChatroom => {
            cr = setChatroom;
        });
        let date = new Date() ;
        date.setMinutes(date.getMinutes()+7*60);
        cr.date_lastactive = date;
        await this.chatroomsRepository.update({chatroomID:cr.chatroomID}, {date_lastactive: cr.date_lastactive});
        createChat_messageDto.date_create = date;
        createChat_messageDto.date_delete = null ;
        return this.chat_messagesRepository.save(createChat_messageDto);
    }

    async updateChatroom(chatroomID:ObjectID, updateChatroomDto:UpdateChatroomDto){
        if(updateChatroomDto.room_name !== undefined){
            const newRoomname = updateChatroomDto.room_name ;
            let cr : Chatroom ;
            await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setChatroom => {
            cr = setChatroom;
            }); 
            cr.room_name = newRoomname ;
        }
        
        else if(updateChatroomDto.date_delete !== undefined){
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            updateChatroomDto.date_delete = date;
        }

        else if(updateChatroomDto.member_arr[0].date_leave_chat !== undefined){
            let userleave = updateChatroomDto.member_arr[0].userID ;
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            let cr : Chatroom ;
            await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setChatroom => {
            cr = setChatroom;
            });
            let memberArr = cr.member_arr;
            updateChatroomDto.totalmember=cr.totalmember;
            for(let i = 0;i<memberArr.length;i++){
                if(memberArr[i].userID == userleave){
                    memberArr[i].date_leave_chat = date;
                    updateChatroomDto.totalmember = updateChatroomDto.totalmember -1;
                } 
            }
            updateChatroomDto.member_arr = memberArr;
            
        }

        else if(updateChatroomDto.member_arr !== undefined){
            /*
            const newMemberID = updateChatroomDto.member_arr[0].userID;
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            const newMemberdate = date ;
            let cr : Chatroom ;
            await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setChatroom => {
            cr = setChatroom;
            });
            console.log(cr.member_arr);
            let memberArr = cr.member_arr;
            var newMem = {userID:newMemberID,date_join_chat:newMemberdate,date_leave_chat:null};
            memberArr.push(newMem) ;
            console.log(memberArr);
            updateChatroomDto.totalmember=cr.totalmember + 1;
            updateChatroomDto.member_arr=memberArr;
            */
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            let cr : Chatroom ;
            await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setChatroom => {
            cr = setChatroom;
            });
            let memberArr = cr.member_arr;
            updateChatroomDto.totalmember=cr.totalmember;
            for(let i = 0;i<updateChatroomDto.member_arr.length;i++){
                var newMem = {userID:updateChatroomDto.member_arr[i].userID,date_join_chat:date,date_leave_chat:null};
                memberArr.push(newMem) ;
                updateChatroomDto.totalmember=updateChatroomDto.totalmember + 1;
            }
            updateChatroomDto.member_arr=memberArr;
        }

        

        
        return this.chatroomsRepository.update({chatroomID: chatroomID} , updateChatroomDto);
    }

    async updateChat_message(messageID:ObjectID ,updateChat_messageDto:UpdateChat_messageDto){
        if(updateChat_messageDto.message !== undefined){
            return this.chat_messagesRepository.update({messageID:messageID},updateChat_messageDto);
        }
        if(updateChat_messageDto.date_delete !== undefined){
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            updateChat_messageDto.date_delete = date;
            return this.chat_messagesRepository.update({messageID:messageID},updateChat_messageDto);
        }
        return this.chat_messagesRepository.update({messageID: messageID}, updateChat_messageDto);
    }
}
