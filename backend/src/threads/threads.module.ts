import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import Thread from 'src/threads/thread.entity';
import { ThreadsService } from './threads.service';
import { ThreadsController } from './threads.controller';
import Commentation from 'src/threads/comentation.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Reportment_comment from 'src/entities/reportment_comment.entity';
import { UsersModule } from 'src/users/users.module';




@Module({
    imports: [
        TypeOrmModule.forFeature([Thread, Commentation, Reportment_thread,Reportment_comment]),
        UsersModule
    ],
    exports: [ThreadsService],
    controllers: [ThreadsController],
    providers: [ThreadsService],

})
export class ThreadsModule {}