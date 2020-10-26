import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { use } from 'passport';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto_update/update-user.dto';
import User from 'src/entities/user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    
    @Get()
    async findallUser(): Promise<User[]> {
      return this.usersService.findallUser();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
      return this.usersService.createUser(createUserDto);
    }
    
    @Patch(':userID')
    async updateUser(@Body() createUserDto: UpdateUserDto, @Param('userID', ParseObjectIdPipe) userID: ObjectID) {
      return this.usersService.updateUser(createUserDto, userID);
    }

    @Get(':userID') 
    async findOneUser(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<User>{
      return this.usersService.findOneUser(userID);
    }
    
    @Get(':userID/contacts')
    async findallchatroom(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any[]> {
      return this.usersService.findallchatroom(userID);
    }

}
