import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Admin from './entities/admin.entity';
import Chat_message from './entities/chat_message.entity';
import Chatroom from './entities/chatroom.entity';
import Commentation from './threads/comentation.entity';
import Reportment_comment from './entities/reportment_comment.entity';
import Reportment_thread from './entities/reportment_thread.entity';
import Thread from './threads/thread.entity';
import User from './entities/user.entity';

import { ThreadsModule } from './threads/threads.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';
import { ChatroomsModule } from './chatrooms/chatrooms.module';
import { NotificationModule } from './notification/notification.module';
import Notifications from './entities/notification.entity';
import { Threadnogen } from './entities/threadnogen.entity';
import Verifygen from './entities/verifygen.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test_kuPeople',
      entities: [Admin, Chat_message, Chatroom, Commentation,
          Reportment_comment, Reportment_thread, Thread, User, Notifications, Threadnogen, Verifygen],
      synchronize: true,
    }),
    ThreadsModule,
    AuthModule,
    UsersModule,
    ReportsModule,
    ChatroomsModule,
    NotificationModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
