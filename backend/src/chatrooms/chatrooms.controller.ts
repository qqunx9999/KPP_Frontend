import { Body, Controller, Get, Param, Post, HttpException, HttpStatus, Patch, UseGuards } from '@nestjs/common';
import { ObjectID } from 'mongodb'
import { ParseObjectIdPipe } from '../common/pipes';
import { ChatroomsService } from './chatrooms.service'
import Chatroom from 'src/entities/chatroom.entity';
import Chat_message from 'src/entities/chat_message.entity';
import {CreateChatroomDto}  from 'src/dto/create-chatroom.dto';
import {CreateChat_messageDto}  from 'src/dto/create-chat_message.dto';
import User from 'src/entities/user.entity';
import { UpdateChatroomDto } from 'src/dto_update/update-chatroom.dto';
import { UpdateChat_messageDto} from 'src/dto_update/update-message.dto'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

    @UseGuards(JwtAuthGuard)
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
        async findAllMessages(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID): Promise<any> {
        return this.chatroomsService.findAllMessages(chatroomID);
    }

    @UseGuards(JwtAuthGuard)
    @Post(':chatroomID/messages')
        async createMessages(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID,
              @Body() createChat_messageDto:CreateChat_messageDto){
        createChat_messageDto.chatroomID = chatroomID;
        createChat_messageDto.userID = new ObjectID(createChat_messageDto.userID) ;
        return  this.chatroomsService.createMessages(createChat_messageDto);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':chatroomID')
        async updateChatroom(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID,
        @Body() updateChatroomDto:UpdateChatroomDto){
            return this.chatroomsService.updateChatroom(chatroomID ,updateChatroomDto);
        }

    @UseGuards(JwtAuthGuard)
    @Patch(':chatroomID/messages/:messageID')
        async updateMessage(@Param('messageID',ParseObjectIdPipe) messageID:ObjectID,
        @Body() updateChat_messageDto:UpdateChat_messageDto){
            return this.chatroomsService.updateChat_message(messageID,updateChat_messageDto);
        }


}