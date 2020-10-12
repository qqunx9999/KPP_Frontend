import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import Thread from './entities/thread.entity';
import { ThreadsController } from './threads/threads.controller';
import { ThreadsService } from './threads/threads.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      database: 'test_kuPeople',
      entities: [Thread],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Thread]),
  ],

  controllers: [AppController, ThreadsController],
  providers: [AppService, ThreadsService],
})
export class AppModule {}
