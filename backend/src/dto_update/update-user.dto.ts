import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class UpdateUserDto {
    //@IsString()
    username: string;
    //@IsString()
    email: string;
    //@IsString()
    password: string;
    //@IsString()
    name: string ;//= "Guest";
    //@IsString()
    avatar_URL: string;
    //@IsInt()
    exp: number //= 0;
    //@IsString()
    rank: string ;//= "Beginner";
    //@IsArray()
    friend_arr: {userID: ObjectID, sender: boolean, isAccepted: boolean, date_add: Date, date_accepted: Date, date_delete: Date}[];// = [];
    //@IsInt()
    numberfriends: number ;//= 0;
    //@IsString()
    description: string ;//= '';
    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    //@IsArray()
    chatmember_arr: {chatroomID: ObjectID}[];// =[]; 
    //@IsDate()
    date_join: Date ;//= new Date();
    //@IsBoolean()
    isAdmin: boolean ;//= false;
    //@IsBoolean()
    isLoggedIn: boolean ;//= false;
    
}
