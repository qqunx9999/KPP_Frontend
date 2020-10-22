import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import Notifications from 'src/entities/notification.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Notifications])],
  providers: [NotificationService],
  controllers: [NotificationController]
})
export class NotificationModule {}
