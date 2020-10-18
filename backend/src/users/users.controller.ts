import { Controller, Get, Param } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import User from 'src/entities/user.entity';
import Thread from 'src/threads/thread.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    
}
