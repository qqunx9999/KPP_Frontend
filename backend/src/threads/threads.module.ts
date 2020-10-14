import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import Thread from 'src/threads/thread.entity';
import { ThreadsService } from './threads.service';
import { ThreadsController } from './threads.controller';
import Commentation from 'src/threads/comentation.entity';




@Module({
    imports: [TypeOrmModule.forFeature([Thread, Commentation])],
    controllers: [ThreadsController],
    providers: [ThreadsService],
})
export class ThreadsModule {}