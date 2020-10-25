import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'
import { ObjectID } from 'mongodb';
import { User_info } from 'src/common/user_info';
import { CreateUserDto } from 'src/dto/create-user.dto';
import Thread from 'src/threads/thread.entity';
import Chatroom from 'src/entities/chatroom.entity';
import Notifications from 'src/entities/notification.entity';
import { count } from 'console';



@Injectable()
export class UsersService {
    
    private user_info: User[] = [];
    private info: User_info={userID: null,name:null,avatar_URL:null, exp:null, rank:null ,isLoggedIn:null };
    private newusers = [];
    private findoneuser = null;
    private iamuser = null;
    private mychatroom = [];
    private result = {chatroomInfo: null, membersinfo: [], numnotifiacation: null};

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Chatroom)
        private chatroomRepository: Repository<Chatroom>,
        @InjectRepository(Notifications)
        private notificationsRepository: Repository<Notifications>   
    ) {}

    async findallchatroom(userID: ObjectID): Promise<any> {
        this.mychatroom = [];
        this.result = {chatroomInfo: null, membersinfo: [], numnotifiacation: null};
        this.iamuser = null;
        await this.usersRepository.findOne({where:{ _id: userID}})
            .then(oneuser => {
                this.iamuser = oneuser;
            });
        let numroom = this.iamuser.chatmember_arr.length;
        console.log(numroom);
        for (let i = 0; i < numroom; i++) {
            let thisroom = null;
            await this.chatroomRepository.findOne({where:{ _id: this.iamuser.chatmember_arr[i].chatroomID}})
                .then(oneroom => {
                    thisroom = oneroom;
                });
            this.result.chatroomInfo = thisroom;
            let nummember = thisroom.totalmember;
            for (let j = 0; j < nummember; j++) {
                let thismember = await this.findUserInfo(thisroom.member_arr[j].userID)
                //console.log(thismember);
                this.result.membersinfo.push(thismember);
            }
            let totalnotifi = null;
            await this.notificationsRepository.find({where: { userID: userID}})
                .then(totalnoti => {
                    totalnotifi = totalnoti;
                });
            let counter = 0;
            //console.log(totalnotifi)
            for (let k = 0; k < totalnotifi.length; k++) {
                console.log(totalnotifi[k].object_type);
                if (totalnotifi[k].object_type === "chat") {
                    counter++;
                }
            }
            this.result.numnotifiacation = counter;
            this.mychatroom.push(this.result);
            this.result = {chatroomInfo: null, membersinfo: [], numnotifiacation: null};
        }
        this.mychatroom = this.mychatroom.sort((a: any, b: any) => {
            return a.chatroomInfo.date_lastactive.valueOf() - b.chatroomInfo.date_lastactive.valueOf();
        });
        this.mychatroom = this.mychatroom.reverse();
        return this.mychatroom;
    }

    async findallUser(): Promise<User[]> {
        return this.usersRepository.find();
    }


    async findOne(username: string): Promise<User | undefined> {
        this.newusers = [];
        await this.usersRepository.find()
            .then(setuser => {
                this.newusers = setuser;
            }); 
        return this.newusers.find(eachuser => eachuser.email === username);
    }
    // not Modify}

    async findOneUser(userID: ObjectID): Promise<User>{
        this.findoneuser = null;
        await this.usersRepository.findOne({where:{_id: userID }})
            .then(oneuser => {
                this.findoneuser = oneuser;
            });
        this.findoneuser.password = null;
        return this.findoneuser;
    }

    async findUserInfo(userID: ObjectID): Promise<User_info>{
        //console.log(userID);
        this.info = {userID: null,name:null,avatar_URL:null, exp:null, rank:null ,isLoggedIn:null };
        this.user_info = [];
        await this.usersRepository.find({where:{_id: userID}})
            .then(setuser_info => {
                this.user_info = setuser_info;
        }); 
        //var info: User_info;
        //console.log(this.user_info[0].userID);
        this.info.userID = this.user_info[0].userID;
        this.info.name = this.user_info[0].name;
        this.info.avatar_URL = this.user_info[0].avatar_URL;
        this.info.exp = this.user_info[0].exp;
        this.info.rank = this.user_info[0].rank;
        this.info.isLoggedIn = this.user_info[0].isLoggedIn;
        return this.info;

    }

    async createUser(createUserDto: CreateUserDto) {
        createUserDto.name = "Guest"
        createUserDto.avatar_URL = null;
        createUserDto.exp = 0;
        createUserDto.rank = "Beginner";
        createUserDto.friend_arr = [];
        createUserDto.numberfriends = 0;
        createUserDto.description = "";
        createUserDto.text_type = {bold:false, italic: false, font:"Arial", size:10};
        createUserDto.chatmember_arr = [];
        var date = new Date();
        date.setMinutes(date.getMinutes()+7*60); //Thailand timezone offset
        createUserDto.date_join = date;
        createUserDto.isAdmin = false;
        createUserDto.isLoggedIn = false;
        return this.usersRepository.save(createUserDto);
    }
}
