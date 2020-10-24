import { Body, Controller, Get, Param, Post, HttpException, HttpStatus } from '@nestjs/common';
import { ObjectID } from 'mongodb'
import { ParseObjectIdPipe } from '../common/pipes';
import { ChatroomsService } from './chatrooms.service'
import Chatroom from 'src/entities/chatroom.entity';
import Chat_message from 'src/entities/chat_message.entity';
import {CreateChatroomDto}  from 'src/dto/create-chatroom.dto';
import {CreateChat_messageDto}  from 'src/dto/create-chat_message.dto';
import User from 'src/entities/user.entity';


@Controller('chatrooms')
export class ChatroomsController {
    constructor(private chatroomsService: ChatroomsService) {}
    @Get()
        async findAll(): Promise<Chatroom[]> {
        return this.chatroomsService.findAll();
    }

    @Get(':chatroomID')
        async findOne(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID): Promise<Chatroom[]> {
        return this.chatroomsService.findOne(chatroomID);
    }

    @Post()
        async createChatroom(@Body() createChatroomDto: CreateChatroomDto){
        return this.chatroomsService.createChatroom(createChatroomDto);
    }

    /*
    @Get(':chatroomID/chat_members')
        async findAllChat_member(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID) {
        return this.chatroomsService.findAllChat_member(chatroomID);
    }
    */

    @Get(':chatroomID/messages')
        async findAllMessages(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID): Promise<Chat_message[]> {
        return this.chatroomsService.findAllMessages(chatroomID);
    }

    @Post(':chatroomID/user/:userID/messages')
        async createMessages(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID ,@Param('userID', ParseObjectIdPipe) userID: ObjectID,
              @Body() CreateChat_messageDto:CreateChat_messageDto){
        CreateChat_messageDto.chatroomID = chatroomID;
        CreateChat_messageDto.userID = userID ;
        return  this.chatroomsService.createMessages(CreateChat_messageDto)
    }

}
