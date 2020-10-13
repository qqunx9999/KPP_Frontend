import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Admin from './entities/admin.entity';
import Chat_message from './entities/chat_message.entity';
import Chatroom from './entities/chatroom.entity';
import Commentation from './entities/comentation.entity';
import Reportment_comment from './entities/reportment_comment.entity';
import Reportment_thread from './entities/reportment_thread.entity';
import Thread from './entities/thread.entity';
import User from './entities/user.entity';

import { ThreadsService } from './threads/threads.service';
import { ThreadsController } from './threads/threads.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test_kuPeople',
      entities: [Admin, Chat_message, Chatroom, Commentation,
          Reportment_comment, Reportment_thread, Thread, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Thread]),
  ],

  controllers: [AppController, ThreadsController],
  providers: [AppService, ThreadsService],
})
export class AppModule {}
