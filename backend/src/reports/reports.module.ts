import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';
import Admin from 'src/entities/admin.entity';

import { ThreadsModule } from 'src/threads/threads.module';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';
import User from 'src/entities/user.entity';
import { NotificationModule } from 'src/notification/notification.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Thread, Commentation, Reportment_thread,Reportment_comment, Admin, User]),
    forwardRef(() => ThreadsModule),
    forwardRef(() => NotificationModule),
    forwardRef(() => UsersModule)
  ],
  controllers: [ReportsController],
  providers: [ReportsService],
  exports: [ReportsService]
})

export class ReportsModule {}