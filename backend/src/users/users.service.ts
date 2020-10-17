import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'
import { ObjectID } from 'mongodb';
import { User_info } from 'src/common/user_info';

@Injectable()
export class UsersService {
    private user_info: User[] = [];
    private info: User_info={userID: null,username:null,avatar_URL:null, exp:null, rank:null ,isLoggedIn:null };
    
    // {not Modify
    private newusers = [];
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
       
    ) { }

    async findOne(username: string): Promise<User | undefined> {
        await this.userRepository.find()
            .then(setuser => {
                this.newusers = setuser;
            }); 
        return this.newusers.find(eachuser => eachuser.email === username);
    }
    // not Modify}

    async findUserInfo(userID: ObjectID): Promise<User_info>{
        console.log(userID);
        await this.userRepository.find({where:{_id: userID}})
            .then(setuser_info => {
            this.user_info = setuser_info;
        }); 
        //var info: User_info;
        console.log(this.user_info[0].userID);
        this.info.userID = this.user_info[0].userID;
        this.info.username = this.user_info[0].username;
        this.info.avatar_URL = this.user_info[0].avatar_URL;
        this.info.exp = this.user_info[0].exp;
        this.info.rank = this.user_info[0].rank;
        this.info.isLoggedIn = this.user_info[0].isloggedin;
        return this.info;

    }
}
