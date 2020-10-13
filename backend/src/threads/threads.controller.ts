import { Controller, Get } from '@nestjs/common';
import { ThreadsService } from './threads.service';
import Thread from 'src/entities/thread.entity';

@Controller('threads')
export class ThreadsController {
  constructor(private threadsService: ThreadsService) {}

  @Get()
  async findAll(): Promise<Thread[]> {
    return this.threadsService.findAll();
  }
}
