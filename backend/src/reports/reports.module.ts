import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';

import { ThreadsModule } from 'src/threads/threads.module';

import { ReportsController } from './reports.controller';
import { ReportsService } from './reports.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Thread, Commentation, Reportment_thread,Reportment_comment]),
    ThreadsModule
  ],
  controllers: [ReportsController],
  providers: [ReportsService]
})

export class ReportsModule {}