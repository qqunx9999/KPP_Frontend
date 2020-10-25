import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import Chatroom from 'src/entities/chatroom.entity';
import Notifications from 'src/entities/notification.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Chatroom, Notifications])],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
