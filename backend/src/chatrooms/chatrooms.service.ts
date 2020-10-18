import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import Chatroom from 'src/entities/chatroom.entity';
import Chat_message from 'src/entities/chat_message.entity';
import {CreateChatroomDto}  from 'src/dto/create-chatroom.dto';
import {CreateChat_messageDto}  from 'src/dto/create-chat_message.dto';


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
        return this.chatroomsRepository.save(createChatroomDto);
    }
    
    /*
    async findAllChat_member(chatroomID: ObjectID){
        return this.chatroomsRepository.find({where:{ chatroomID: chatroomID }});
    }
    */
    async findAllMessages(chatroomID: ObjectID){
        return this.chat_messagesRepository.find({where:{ chatroomID: chatroomID }});
    }

    async createMessages(createChat_messageDto: CreateChat_messageDto){
        return this.chat_messagesRepository.save(createChat_messageDto)
    }
}
