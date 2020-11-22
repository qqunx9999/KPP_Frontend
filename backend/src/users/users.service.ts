import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'
import { ObjectID } from 'mongodb';
import { User_info } from 'src/common/user_info';
import { CreateUserDto } from 'src/dto/create-user.dto';
import Thread from 'src/threads/thread.entity';
import Chatroom from 'src/entities/chatroom.entity';
import Notifications from 'src/entities/notification.entity';
import { count } from 'console';
import { UpdateUserDto } from 'src/dto_update/update-user.dto';
import Commentation from 'src/threads/comentation.entity';
import Reportment_comment from 'src/entities/reportment_comment.entity';
import Reportment_thread from 'src/entities/reportment_thread.entity';
import objectnumber, { Objectnumber } from 'src/entities/objectnumber.entity';

import {map, catchError } from 'rxjs/operators';
import {from ,throwError} from 'rxjs';
import { NotificationsService } from 'src/notification/notification.service';
import Verifycode from 'src/entities/verifycode.entity';
import { changepassDto } from './changepass.dto';
import { emailsecret } from './emailsecret';






@Injectable()
export class UsersService {
    
    private user_info: User[] = [];
    private info: User_info={userID: null,name:null,avatar_URL:null, exp:null, rank:null, isAdmin:null,isLoggedIn:null };
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
        private notificationsRepository: Repository<Notifications>,
        @InjectRepository(Thread)
        private threadRepository: Repository<Thread>,
        @InjectRepository(Commentation)
        private commentRepository: Repository<Commentation>,
        @InjectRepository(Reportment_comment)
        private reportCRepository: Repository<Reportment_comment>,
        @InjectRepository(Reportment_thread)
        private reportTRepository: Repository<Reportment_thread>,
        @InjectRepository(Objectnumber)
        private objectNumberRopsitory: Repository<Objectnumber>,
        @InjectRepository(Verifycode)
        private verifyCodeRepository: Repository<Verifycode>,


        private notificationsService: NotificationsService

            
    ) {}

    async changepass(changepassdto: changepassDto, act: string): Promise<any> {
        
        let thisuser = null;
        await this.usersRepository.findOne({where:{email: changepassdto.email}})
            .then(oneuser => {
                thisuser = oneuser;
            });
        
        
        
        if(thisuser === undefined){
            throw new HttpException("this email hasn't used to sign up yet", HttpStatus.FORBIDDEN);
        }
        
        var bcrypt =  require('bcrypt');
        const saltRounds = 10;
        if(act === "changepass"){
            if(!bcrypt.compareSync(changepassdto.oldpass, thisuser.password)){
                throw new HttpException("wrong confirm password", HttpStatus.FORBIDDEN);
            }
        }
        else{
            let verifys: Verifycode[];
            await this.verifyCodeRepository.find({where:{email: changepassdto.email}, order:{date_expire: "DESC"}})
                .then(set => {verifys = set})
            let verify: Verifycode;
            if(verifys.length === 0){
                throw new HttpException("no verifycode", HttpStatus.FORBIDDEN);
            }
            else{
                verify = verifys[0];
            }
            let date = new Date()
            date.setMinutes(date.getMinutes()+7*60);
            if(date > verify.date_expire){
                throw new HttpException("expired", HttpStatus.FORBIDDEN);
            }
            if (changepassdto.verify !== verify.code){
                throw new HttpException("wrong verifycode", HttpStatus.FORBIDDEN);
            }
            await this.verifyCodeRepository.remove(verifys);

        }
    

    
        //console.log(thisuser.userID);
        //let newID: ObjectID = ObjectID.createFromHexString(thisuser.userID);
        //console.log(newID);
        let obj = { password: null };
        
        const hash = bcrypt.hashSync(changepassdto.newpass, saltRounds);
        obj.password = hash;
        return this.usersRepository.update({userID: thisuser.userID}, obj);
    }

    async verifymail(email: string) {
        let allUser:User[];
        await this.usersRepository.find()
            .then(setUsers=>{allUser = setUsers});

        let verifys: Verifycode[];
        await this.verifyCodeRepository.find({where:{email: email}, order:{date_expire: "DESC"}})
            .then(set => {verifys = set})
        let verify: Verifycode;
        if (verifys.length != 0) {
            verify = verifys[0];
            let date = new Date()
            date.setMinutes(date.getMinutes()+7*60);
            verify.date_expire.setMinutes(verify.date_expire.getMinutes()-9);
            console.log(date);
            console.log(verify.date_expire);
            if(date < verify.date_expire){
                throw new HttpException("please wait 1 minute before sending new verify code", HttpStatus.FORBIDDEN);
            }
        }
        
        if (allUser.some(eachuser => {return eachuser.email === email})) {
            throw new HttpException("this email has already used to sign up", HttpStatus.FORBIDDEN);
        }
        else {
            let obj = await this.genver(email);
            const nodemailer = require("nodemailer");
            const { google } = require("googleapis");
            const OAuth2 = google.auth.OAuth2;
            const oauth2Client = new OAuth2(
                emailsecret.ClientID, // ClientID
                emailsecret.Client_Secret, // Client Secret
                emailsecret.Redirect_URL // Redirect URL
            );
            oauth2Client.setCredentials({
                refresh_token: emailsecret.Refresh_Token
            });
            const accessToken = oauth2Client.getAccessToken()
            const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: emailsecret.SenderUser, 
                    clientId: emailsecret.ClientID,
                    clientSecret: emailsecret.Client_Secret,
                    refreshToken: emailsecret.Refresh_Token,
                    accessToken: accessToken
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            const mailOptions = {
                from: emailsecret.SenderUser,
                to: `${email}`,
                subject: "Verification code FROM KU-PEOPLE FOR Create User",
                generateTextFromHTML: true,
                text: `Your Verify code is ${obj.code}`
            };
            smtpTransport.sendMail(mailOptions, (error, response) => {
                error ? console.log(error) : console.log(response);
                smtpTransport.close();
            });
        }
        
    }

    async resetpass(email: string) {
        let allUser:User[];
        await this.usersRepository.find()
            .then(setUsers=>{allUser = setUsers});
    
        let verifys: Verifycode[];
        await this.verifyCodeRepository.find({where:{email: email}, order:{date_expire: "DESC"}})
            .then(set => {verifys = set})
        let verify: Verifycode;
        if (verifys.length != 0) {
            verify = verifys[0];
            let date = new Date()
            date.setMinutes(date.getMinutes()+7*60);
            verify.date_expire.setMinutes(verify.date_expire.getMinutes()-9);
            console.log(date);
            console.log(verify.date_expire);
            if(date < verify.date_expire){
                throw new HttpException("please wait 1 minute before sending new verify code", HttpStatus.FORBIDDEN);
            }
        }
        
        
        if (allUser.every(eachuser => {return eachuser.email !== email})) {
            throw new HttpException("this email hasn't used to sign up yet", HttpStatus.FORBIDDEN);
        }
        else {
            let obj = await this.genver(email);
            const nodemailer = require("nodemailer");
            const { google } = require("googleapis");
            const OAuth2 = google.auth.OAuth2;
            const oauth2Client = new OAuth2(
                emailsecret.ClientID, // ClientID
                emailsecret.Client_Secret, // Client Secret
                emailsecret.Redirect_URL // Redirect URL
            );
            oauth2Client.setCredentials({
                refresh_token: emailsecret.Refresh_Token
            });
            const accessToken = oauth2Client.getAccessToken()
            const smtpTransport = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: emailsecret.SenderUser, 
                    clientId: emailsecret.ClientID,
                    clientSecret: emailsecret.Client_Secret,
                    refreshToken: emailsecret.Refresh_Token,
                    accessToken: accessToken
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            const mailOptions = {
                from: emailsecret.SenderUser,
                to: `${email}`,
                subject: "Verification code FROM KU-PEOPLE FOR Reset Password",
                generateTextFromHTML: true,
                text: `Your Verify code is ${obj.code}`
            };
            smtpTransport.sendMail(mailOptions, (error, response) => {
                error ? console.log(error) : console.log(response);
                smtpTransport.close();
            });
        }
        
    }

    async chatroomaction(userID: ObjectID, chatroomID: ObjectID,act: string): Promise<any> {
        if (act === 'add') {
            let obj = { chatmember_arr: [] };
            let obj2 = { member_arr: [], totalmember: null};
            let newuser = null;
            await this.usersRepository.findOne({where:{ _id: userID}})
                .then(oneuser => {
                    newuser = oneuser;
                });
            let newchatroom = null;
            await this.chatroomRepository.findOne({where:{ _id: chatroomID}})
                .then(onechatroom => {
                    newchatroom = onechatroom;
                });
            let newroom = newuser.chatmember_arr;
            let newroom2 = newchatroom.member_arr;
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            let result = {
                chatroomID: chatroomID
            };
            let result2 = {
                userID: userID,
                date_join_chat: date,
                date_leave_chat: null
            };
            newroom.push(result);
            newroom2.push(result2);
            obj.chatmember_arr = newroom;
            obj2.member_arr = newroom2;
            obj2.totalmember = newchatroom.totalmember + 1;
            this.usersRepository.update({userID: userID}, obj);
            this.chatroomRepository.update({chatroomID: chatroomID}, obj2);
        }
        else if (act === 'delete') {
            let obj = { chatmember_arr: [] };
            let obj2 = { member_arr: [], totalmember: null };
            let newuser = null;
            await this.usersRepository.findOne({where:{ _id: userID}})
                .then(oneuser => {
                    newuser = oneuser;
                });
            let newchatroom = null;
            await this.chatroomRepository.findOne({where:{ _id: chatroomID}})
                .then(onechatroom => {
                    newchatroom = onechatroom;
                });
            let newroom = newuser.chatmember_arr;
            let newroom2 = newchatroom.member_arr;
            newroom = newroom.filter((obj3) => {if (obj3.chatroomID.toString() !== chatroomID.toString()) { return true; }});
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            for (let i = 0; i < newroom2.length; i++) {
                if (newroom2[i].userID.toString() === userID.toString()) {
                    newroom2[i].date_leave_chat = date;
                }
            }
            obj.chatmember_arr = newroom;
            obj2.member_arr = newroom2;
            obj2.totalmember = newchatroom.totalmember - 1;
            this.usersRepository.update({userID: userID}, obj);
            this.chatroomRepository.update({chatroomID: chatroomID}, obj2);
        }
    }

    async friendaction(userID: ObjectID, userID2: ObjectID,act: string): Promise<any> {
        if (act === "add") {
            let obj = { friend_arr: []};
            let obj2 = { friend_arr: []};
            let send = null;
            await this.usersRepository.findOne({where:{ _id: userID}})
                .then(senduser => {
                    send = senduser;
                });
            let recieve = null;
            await this.usersRepository.findOne({where:{ _id: userID2}})
                .then(recieveuser => {
                    recieve = recieveuser;
                });
            let Sendfriend = send.friend_arr;
            let Recievefriend = recieve.friend_arr;
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            let result = {
                userID: userID, 
                sender: true,
                isAccepted: false,
                date_add: date,
                date_accepted: null,
                date_delete: null
            };
            let result2 = {
                userID: userID2, 
                sender: false,
                isAccepted: false,
                date_add: date,
                date_accepted: null,
                date_delete: null
            };
            Sendfriend.push(result2);
            Recievefriend.push(result);
            obj.friend_arr = Sendfriend;
            obj2.friend_arr = Recievefriend;
            this.usersRepository.update({userID: userID}, obj);
            this.usersRepository.update({userID: userID2}, obj2);
            //noti
            await this.notificationsService.postFriendRequest(userID2,userID);
        }
        else if (act === "reject") {
            let obj = { friend_arr: []};
            let obj2 = { friend_arr: []};
            let send = null;
            await this.usersRepository.findOne({where:{ _id: userID}})
                .then(senduser => {
                    send = senduser;
                });
            let recieve = null;
            await this.usersRepository.findOne({where:{ _id: userID2}})
                .then(recieveuser => {
                    recieve = recieveuser;
                });
            let Sendfriend = send.friend_arr;
            let Recievefriend = recieve.friend_arr;
            Sendfriend = Sendfriend.filter((obj3) => {if (obj3.userID.toString() !== userID2.toString()) { return true; }});
            Recievefriend = Recievefriend.filter((obj4) => {if (obj4.userID.toString() !== userID.toString()) { return true; }});
            obj.friend_arr = Sendfriend;
            obj2.friend_arr = Recievefriend;
            this.usersRepository.update({userID: userID}, obj);
            this.usersRepository.update({userID: userID2}, obj2);
        }
        else if (act === "accept") {
            let obj = { friend_arr: [], numberfriends: null};
            let obj2 = { friend_arr: [], numberfriends: null};
            let send = null;
            await this.usersRepository.findOne({where:{ _id: userID}})
                .then(senduser => {
                    send = senduser;
                });
            let recieve = null;
            await this.usersRepository.findOne({where:{ _id: userID2}})
                .then(recieveuser => {
                    recieve = recieveuser;
                });
            let Sendfriend = send.friend_arr;
            let Recievefriend = recieve.friend_arr;
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            for (let i = 0; i < Sendfriend.length; i++) {
                if (Sendfriend[i].userID.toString() === userID2.toString()) {
                    Sendfriend[i].isAccepted = true;
                    Sendfriend[i].date_accepted = date;
                }
            }
            for (let j = 0; j < Recievefriend.length; j++) {
               if (Recievefriend[j].userID.toString() === userID.toString()) {
                    Recievefriend[j].isAccepted = true;
                    Recievefriend[j].date_accepted = date;
               }
            }
            send.numberfriends++;
            recieve.numberfriends++;
            obj.numberfriends = send.numberfriends;
            obj2.numberfriends = recieve.numberfriends;
            obj.friend_arr = Sendfriend;
            obj2.friend_arr = Recievefriend;
            this.usersRepository.update({userID: userID}, obj);
            this.usersRepository.update({userID: userID2}, obj2);
            //noti
            await this.notificationsService.postAcceptFriend(userID,userID2);
        }
        else if (act === "delete") {
            let obj = { friend_arr: [], numberfriends: null};
            let obj2 = { friend_arr: [], numberfriends: null};
            let send = null;
            await this.usersRepository.findOne({where:{ _id: userID}})
                .then(senduser => {
                    send = senduser;
                });
            let recieve = null;
            await this.usersRepository.findOne({where:{ _id: userID2}})
                .then(recieveuser => {
                    recieve = recieveuser;
                });
            let Sendfriend = send.friend_arr;
            let Recievefriend = recieve.friend_arr;
            let date = new Date();
            date.setMinutes(date.getMinutes()+7*60);
            for (let i = 0; i < Sendfriend.length; i++) {
                if (Sendfriend[i].userID.toString() === userID2.toString()) {
                    Sendfriend[i].date_delete = date;
                }
            }
            for (let j = 0; j < Recievefriend.length; j++) {
               if (Recievefriend[j].userID.toString() === userID.toString()) {
                    Recievefriend[j].date_delete = date;
               }
            }
            send.numberfriends--;
            recieve.numberfriends--;
            obj.numberfriends = send.numberfriends;
            obj2.numberfriends = recieve.numberfriends;
            obj.friend_arr = Sendfriend;
            obj2.friend_arr = Recievefriend;
            this.usersRepository.update({userID: userID}, obj);
            this.usersRepository.update({userID: userID2}, obj2);
        }
    }

    async updateUser(createUserDto: UpdateUserDto, userID: ObjectID) {
        return this.usersRepository.update({userID: userID }, createUserDto);
    }

    async findownthreads(userID: ObjectID): Promise<any> {
        return this.threadRepository.find({where:{ userID: userID}});
    }

    async findowncomments(userID: ObjectID): Promise<any> {
        return this.commentRepository.find({where:{ userID: userID}});
    }

    async findownReportC(userID: ObjectID): Promise<any> {
        return this.reportCRepository.find({where:{ userID: userID}});
    }

    async findownReportT(userID: ObjectID): Promise<any> {
        return this.reportTRepository.find({where:{ userID: userID}});
    }

    async findallchatroom(userID: ObjectID): Promise<any> {
        this.mychatroom = [];
        this.result = {chatroomInfo: null, membersinfo: [], numnotifiacation: null};
        this.iamuser = null;
        await this.usersRepository.findOne({where:{ _id: userID}})
            .then(oneuser => {
                this.iamuser = oneuser;
            });
        let numroom = this.iamuser.chatmember_arr.length;
        //console.log(numroom);
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
                //console.log(totalnotifi[k].object_type);
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
        this.info = {userID: null,name:null,avatar_URL:null, exp:null, rank:null, isAdmin:null ,isLoggedIn:null };
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
        this.info.isAdmin = this.user_info[0].isAdmin;
        this.info.isLoggedIn = this.user_info[0].isLoggedIn;
        return this.info;

    }

    async createUser(createUserDto: CreateUserDto) {
        createUserDto.email = createUserDto.email.toLowerCase();
        let allUser:User[];
        await this.usersRepository.find()
            .then(setUsers=>{allUser = setUsers});
        
        //console.log(allUser.some(eachuser => {console.log(eachuser.email,createUserDto.email, eachuser.email === createUserDto.email);return eachuser.email === createUserDto.email}));
        if(allUser.some(eachuser => {return eachuser.email === createUserDto.email})){
            //console.log("this email has already used to sign up");
            //return {"message": "this email has already used to sign up"};
            throw new HttpException("this email has already used to sign up", HttpStatus.FORBIDDEN);
        }
        


        if(allUser.some(eachuser => { return eachuser.username === createUserDto.username})){
            //console.log("this username has already used to sign up");
            throw new HttpException("this username has already used to sign up", HttpStatus.FORBIDDEN);
        }
        
        
        let verifys: Verifycode[];
        await this.verifyCodeRepository.find({where:{email: createUserDto.email}, order:{date_expire: "DESC"}})
            .then(set => {verifys = set})
        let verify: Verifycode;
        if(verifys.length === 0){
            throw new HttpException("no verifycode", HttpStatus.FORBIDDEN);
        }
        else{
            verify = verifys[0];
        }
        date = new Date()
        date.setMinutes(date.getMinutes()+7*60);
        if(date > verify.date_expire){
            throw new HttpException("expired", HttpStatus.FORBIDDEN);
        }

        if(createUserDto.verify !== verify.code){
            throw new HttpException("wrong verifycode", HttpStatus.FORBIDDEN);
        }
        
         
        await this.verifyCodeRepository.remove(verifys);
    
        delete createUserDto.verify;
       
        let NO: Objectnumber;
        // Generate GuestNO. but use number from threadnogen entity
        await this.objectNumberRopsitory.findOne({where:{object_type:"guest"}})
            .then(setNO=>{NO=setNO});
        let userNO = (NO.NO+1).toString();
        createUserDto.name = "Guest"+ userNO;
        await this.objectNumberRopsitory.update({id:NO.id}, {NO: NO.NO+1});
        
        createUserDto.avatar_URL = null;
        createUserDto.exp = 0;
        createUserDto.rank = "Beginner";
        createUserDto.friend_arr = [];
        createUserDto.numberfriends = 0;
        createUserDto.quote = "";
        createUserDto.description = "";
        createUserDto.chatmember_arr = [];
        var date = new Date();
        date.setMinutes(date.getMinutes()+7*60); //Thailand timezone offset
        createUserDto.date_join = date;
        createUserDto.isAdmin = false;
        createUserDto.isLoggedIn = false;
        
        
        var bcrypt =  require('bcrypt');
        const saltRounds = 10;
        const hash = bcrypt.hashSync(createUserDto.password, saltRounds);
        createUserDto.password = hash;
        
        //uncomment above to hashpassword
        
        // Store hash in your password DB.
        //console.log(createUserDto.password);
        return from(this.usersRepository.save(createUserDto)).pipe( // don't show password
            map((user: User)=>{
                const{password, ...result} = user;
                return result;
            }),
            catchError(err => throwError(err))
        );   
    }

    async genver(email: string): Promise<any> {
        var code:string ="";
        for(let i = 0; i<6; i++){
            let random = Math.floor(Math.random()*3);
            let randomDigit: number;
            let char: string;
            if(random ===0){
             randomDigit = Math.floor(Math.random()*(57-48+1)+48);
            }
            else if(random ===1){
                randomDigit = Math.floor(Math.random()*(90-65+1)+65);
            }
            else if(random ===2){
                randomDigit = Math.floor(Math.random()*(122-97+1)+97);
            }
            code += String.fromCharCode(randomDigit);
        }
        let dateExpire = new Date();
        dateExpire.setMinutes(dateExpire.getMinutes()+7*60+10);
        let verify: Verifycode = {
            code: code,
            email: email,
            date_expire: dateExpire
        }
        return this.verifyCodeRepository.save(verify);
        
    }
}
