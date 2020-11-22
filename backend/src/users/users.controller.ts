import { Body, Controller, Get, Param, Patch, Post, UploadedFile, UseGuards, UseInterceptors, Request } from '@nestjs/common';
import { ObjectID } from 'mongodb';
import { use } from 'passport';
import { from, Observable, of } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ParseObjectIdPipe } from 'src/common/pipes';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UpdateUserDto } from 'src/dto_update/update-user.dto';
import User from 'src/entities/user.entity';
import { changepassDto } from './changepass.dto';
import { UsersService } from './users.service';
//import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { file } from 'googleapis/build/src/apis/file';
import path = require('path');
//import { join } from 'path';
import {FileInterceptor} from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService,
      ) {}

    @Patch('newpass')
    async changepass(@Body() changepassdto: changepassDto, 
    ): Promise<any> {
      return this.usersService.changepass(changepassdto);
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

    @Post('resetpass/:email')
    async resetpass(@Param('email') email: string){
      return this.usersService.resetpass(email);
    }

    @Post('verifymail/:email')
    async verifymail(@Param('email') email: string){
      return this.usersService.verifymail(email);
    }

    @UseGuards(JwtAuthGuard)
    @Post('avatar')
    @UseInterceptors(FileInterceptor('file',{
      storage: diskStorage({
        destination: './imageUpload/avatar',//'D:/Kupeople/Avatar',
        filename: (req, file, cb) =>{
          const filename: string = path.parse(file.originalname).name.replace(/\s/g, '')+ uuidv4();
          const extension:string = path.parse(file.originalname).ext;

          cb(null, `${filename}${extension}`)
        }
      })
    }))

    uploadAvatar(@UploadedFile() file, @Request() req): Observable<Object> {
        console.log(file);
        let updateUser: UpdateUserDto;
        const user: User = req.user.userID;
        console.log(user);
        //updateUser.avatar_URL = file.path;
        //this.usersService.updateUser({avatar_URL: file.path}, userID);
        return of({"avatar_URL": file.path});
    }
    
      
    
}

