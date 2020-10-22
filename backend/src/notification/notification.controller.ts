import { Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ObjectID } from 'mongodb'
import { ParseObjectIdPipe } from 'src/common/pipes';
import { NotificationService } from './notification.service';
import { Notifications } from 'src/entities/notification.entity';

@Controller('notifications')
export class NotificationController {

    constructor(private notificationService: NotificationService) {}

    @Get('/contacts/users/:userID')
    async allUnread(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <Notifications[]> {
        return this.notificationService.allUnread(userID);
    }

    @Get('/friend_request/users/:userID')
    async friendRequest(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <Notifications[]> {
        return this.notificationService.friendRequest(userID);
    }

    // @Post('/chatrooms/:chatroomID/:userID')
    // async newMessage(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise <Notification[]> {
    //     return this.NotificationService.allUnread(userID);
    // }
}

