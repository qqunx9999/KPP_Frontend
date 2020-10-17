import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateUserDto {
    @IsString()
    username: string;
    @IsString()
    email: string;
    @IsString()
    password: string;
    @IsString()
    avatar_URL: string;
    @IsInt()
    exp: number;
    @IsString()
    rank: string;
    @IsArray()
    friend_arr: {userID: ObjectID, sender: boolean, isAccepted: boolean, date_add: Date, date_accepted: Date, date_delete: Date}[];
    @IsDate()
    numberfriends: number;
    @IsString()
    description: string;
    @IsArray()
    isChatMember_arr: {chatroomID: ObjectID}[]; 
    @IsDate()
    date_join: Date;
    @IsBoolean()
    isAdmin: boolean;
    @IsBoolean()
    isLoggedin: boolean;
    
}
