import { Module } from '@nestjs/common';
import { NotificationsService } from './notification.service';
import { NotificationController } from './notification.controller';
import Notifications from 'src/entities/notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Chatroom from 'src/entities/chatroom.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications, Chatroom])],
  providers: [NotificationsService],
  exports: [NotificationsService],
  controllers: [NotificationController]
})
export class NotificationModule {}
