import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ObjectID } from 'mongodb';

import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';


@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(Thread)
    private threadsRepository: Repository<Thread>,
    @InjectRepository(Commentation)
    private commentationsRepository: Repository<Commentation>,
    @InjectRepository(Reportment_thread)
    private reportment_threadsRepository: Repository<Reportment_thread>,
    @InjectRepository(Reportment_comment)
    private reportment_commentsRepository: Repository<Reportment_comment>
      
  ) {}

  async findAllReportedTs(): Promise<Reportment_thread[]> {
    return this.reportment_threadsRepository.find();
  }

  async findAllReporteds(): Promise<Reportment_comment[]> {
    return this.reportment_commentsRepository.find();
  }
}
