import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { use } from 'passport';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto_update/update-user.dto';
import User from 'src/entities/user.entity';
import { changepassDto } from './changepass.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get(':userID/forgetpass')
    async getoldpass(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any> {
      return this.usersService.getoldpass(userID);
    }

    @Patch(':userID/newpass')
    async changepass(@Body() changepassdto: changepassDto, 
     @Param('userID', ParseObjectIdPipe) userID: ObjectID,
    ): Promise<any> {
      return this.usersService.changepass(userID,changepassdto);
    }

    @Patch(':userID/chatrooms/:chatroomID/:act')
    async chatroomaction(@Param('userID', ParseObjectIdPipe) userID: ObjectID,
      @Param('chatroomID', ParseObjectIdPipe) chatroomID: ObjectID,
      @Param('act') act: string
    ): Promise<any> {
      return this.usersService.chatroomaction(userID,chatroomID,act);
    }

    @Patch(':userID/:userID2/friend_act/:act')
    async friendaction(@Param('userID', ParseObjectIdPipe) userID: ObjectID,
      @Param('userID2', ParseObjectIdPipe) userID2: ObjectID,
      @Param('act') act: string
    ): Promise<any> {
      return this.usersService.friendaction(userID,userID2,act);
    }

    @Get(':userID/contacts')
    async findallchatroom(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any[]> {
      return this.usersService.findallchatroom(userID);
    }

    @Get(':userID/threads')
    async findownthreads(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any[]> {
      return this.usersService.findownthreads(userID);
    }
    
    @Get(':userID/comments')
    async findowncomments(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any[]> {
      return this.usersService.findowncomments(userID);
    }

    @Get(':userID/ReportC')
    async findownReportC(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any[]> {
      return this.usersService.findownReportC(userID);
    }
    
    @Get(':userID/ReportT')
    async findownReportT(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<any[]> {
      return this.usersService.findownReportT(userID);
    }

    @Patch(':userID')
    async updateUser(@Body() createUserDto: UpdateUserDto, @Param('userID', ParseObjectIdPipe) userID: ObjectID) {
      return this.usersService.updateUser(createUserDto, userID);
    }

    @Get(':userID') 
    async findOneUser(@Param('userID', ParseObjectIdPipe) userID: ObjectID): Promise<User>{
      return this.usersService.findOneUser(userID);
    }

    
    @Get()
    async findallUser(): Promise<User[]> {
      return this.usersService.findallUser();
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto){
      return this.usersService.createUser(createUserDto);
    }
    
    
}
