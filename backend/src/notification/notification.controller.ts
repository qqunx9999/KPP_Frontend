import { Controller, Get, Post, Delete, Param, Body, Patch } from '@nestjs/common';
import { ObjectID } from 'mongodb'
import { ParseObjectIdPipe } from 'src/common/pipes';
import { NotificationsService } from './notification.service';
import { Notifications } from 'src/entities/notification.entity';
import { NotificationDto } from 'src/dto/create-notifiaction.dto';
import Chatroom from 'src/entities/chatroom.entity';

@Controller('notifications')
export class NotificationController {

    constructor(private notificationService: NotificationsService) {}

    @Get('/any/users/:userID')
    async allUnread(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <any> {
        return this.notificationService.allUnread(userID);
    }

    @Get('/contact/users/:userID')
    async noticontact(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <any>{
        return this.notificationService.noticontacts(userID);
    }

    // @Post('/friend_request')
    // async postFriendRequest(@Body() notificationDto: NotificationDto){
    //     notificationDto.userID = new ObjectID(notificationDto.userID);
    //     notificationDto.object_type = "friend_request";
    //     notificationDto.object_typeID = new ObjectID(notificationDto.object_typeID);
    //     return this.notificationService.postFriendRequest(notificationDto);
    // }

    // @Post('/friend_accepted/')
    // async postAcceptFriend(@Body() notificationDto: NotificationDto){
    //     notificationDto.userID = new ObjectID(notificationDto.userID);
    //     notificationDto.object_type = "friend_accepted";
    //     notificationDto.object_typeID = new ObjectID(notificationDto.object_typeID); 
    //     return this.notificationService.postAcceptFriend(notificationDto);
    // }

    // @Post('/chatrooms/:chatroomID/users/:userID')
    // async postChatrooms(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID,
    //     @Param('userID', ParseObjectIdPipe) userID: ObjectID,
    //     @Body() notificationDto: NotificationDto){
    //     return this.notificationService.postChatroom(chatroomID, userID);
    // }

    // @Post('/reports')
    // async postReport(@Body() notificationDto: NotificationDto){
    //     notificationDto.userID = new ObjectID(notificationDto.userID);
    //     notificationDto.object_type = "report";
    //     notificationDto.object_typeID = null;
    //     notificationDto.date_noti = new Date();
    //     notificationDto.date_read = null;
    //     return this.notificationService.findReport(notificationDto);
    // }

    // @Post('/report_considered')
    // async postReportCon(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID, 
    //     @Body() notificationDto: NotificationDto){
    //     notificationDto.userID = new ObjectID(notificationDto.userID);
    //     notificationDto.object_type = "report_considered";
    //     notificationDto.object_typeID = chatroomID;
    //     notificationDto.date_read = null;
    //     return this.notificationService.postReportCon(notificationDto);
    // }

    @Patch('/chatrooms/:chatroomID/users/:userID')
    async patchChatroom(@Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID,
    @Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <Notifications>{
        return this.notificationService.patchChatroom(userID, chatroomID);
    }

    @Patch('/users/:userID/')
    async patchAllNoti(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <any>{
        
        
        return this.notificationService.patchAllNoti(userID);
    }
}

