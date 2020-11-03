import { forwardRef, Module } from '@nestjs/common';
import { NotificationsService } from './notification.service';
import { NotificationController } from './notification.controller';
import Notifications from 'src/entities/notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import Chatroom from 'src/entities/chatroom.entity';
import { ReportsModule } from 'src/reports/reports.module';
import { ThreadsModule } from 'src/threads/threads.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications, Chatroom]),
    forwardRef(() => ReportsModule),
    forwardRef(() => ThreadsModule)
  ],
  providers: [NotificationsService],
  exports: [NotificationsService],
  controllers: [NotificationController]
})
export class NotificationModule {}
