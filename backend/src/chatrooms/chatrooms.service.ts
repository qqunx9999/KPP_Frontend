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



@Injectable()
export class ChatroomsService {
    constructor(
        @InjectRepository(Chatroom)
        private chatroomsRepository: Repository<Chatroom>,
        @InjectRepository(Chat_message)
        private chat_messagesRepository: Repository<Chat_message>,
      ) {}

    async findAll(): Promise<Chatroom[]> {
        return this.chatroomsRepository.find();
    }

    async findOne(chatroomID: ObjectID): Promise<Chatroom[]>{
        return this.chatroomsRepository.find({where:{ _id: chatroomID}});
    }

    async createChatroom(createChatroomDto: CreateChatroomDto) {
        let date = new Date();
        date.setMinutes(date.getMinutes()+7*60);
        createChatroomDto.date_create = date ;
        createChatroomDto.date_delete = null ;
        createChatroomDto.date_lastactive = date;
        createChatroomDto.totalmember = 0;
        let Arraymember = [];
        for(let i = 0; i < createChatroomDto.member_arr.length;i++){
            let newmember = {userID:createChatroomDto.member_arr[i].userID,date_join_chat:date,date_leave_chat:null} ;
            Arraymember.push(newmember);
        }
        createChatroomDto.member_arr = Arraymember;
        return this.chatroomsRepository.save(createChatroomDto);
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
        createChat_messageDto.date_create = date;
        createChat_messageDto.date_delete = null ;
        return this.chat_messagesRepository.save(createChat_messageDto)
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
        else if(updateChatroomDto.member_arr !== undefined){
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
        }
        else if(updateChatroomDto.date_delete !== undefined){
            let cr : Chatroom ;
            await this.chatroomsRepository.findOne({where:{ _id: chatroomID}})
            .then(setChatroom => {
            cr = setChatroom;
            });
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            cr.date_delete = date ;
        }
        return this.chatroomsRepository.update({chatroomID: chatroomID} , updateChatroomDto);
    }
}
