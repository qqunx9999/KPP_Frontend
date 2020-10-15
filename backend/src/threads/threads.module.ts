import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import Thread from 'src/threads/thread.entity';
import { ThreadsService } from './threads.service';
import { ThreadsController } from './threads.controller';
import Commentation from 'src/threads/comentation.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';




@Module({
    imports: [TypeOrmModule.forFeature([Thread, Commentation, Reportment_thread])],
    controllers: [ThreadsController],
    providers: [ThreadsService],
})
export class ThreadsModule {}