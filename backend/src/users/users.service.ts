import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'
import { ObjectID } from 'mongodb';
import { User_info } from 'src/common/user_info';
import { CreateUserDto } from 'src/dto/create-user.dto';
import Thread from 'src/threads/thread.entity';

@Injectable()
export class UsersService {
    
    private user_info: User[] = [];
    private info: User_info={userID: null,name:null,avatar_URL:null, exp:null, rank:null ,isLoggedIn:null };
    private newusers = [];
    private findoneuser = null;

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
       
    ) {}

    async findallchatroom(userID: ObjectID): Promise<any> {
        
    }

    async findallUser(): Promise<User[]> {
        return this.usersRepository.find();
    }


    async findOne(username: string): Promise<User | undefined> {
        await this.usersRepository.find()
            .then(setuser => {
                this.newusers = setuser;
            }); 
        return this.newusers.find(eachuser => eachuser.email === username);
    }
    // not Modify}

    async findOneUser(userID: ObjectID): Promise<User>{
        await this.usersRepository.findOne({where:{_id: userID }})
            .then(oneuser => {
                this.findoneuser = oneuser;
            });
        this.findoneuser.password = null;
        return this.findoneuser;
    }

    async findUserInfo(userID: ObjectID): Promise<User_info>{
        //console.log(userID);
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
