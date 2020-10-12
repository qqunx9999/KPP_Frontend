import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import Thread from 'src/entities/thread.entity';

@Injectable()
export class ThreadsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>
  ) {}

  async findAll(): Promise<Thread[]> {
    return this.threadsRepository.find();
  }
}
