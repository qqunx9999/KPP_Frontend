import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreateUserDto } from 'src/dto/create-user.dto';
import User from 'src/entities/user.entity';
import Thread from 'src/threads/thread.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
    return this.usersService.createUser(createUserDto);
  }
    
}
