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
    friend_arr: {user: ObjectID, sender: boolean, isaccepted: boolean, date_request_friend: Date, date_add_friend: Date, date_delete_friend: Date}[];
    @IsDate()
    numberfriends: number;
    @IsString()
    description: string;
    @IsArray()
    ischatmember_arr: {chatroomID: ObjectID}[]; 
    @IsDate()
    date_join: Date;
    @IsBoolean()
    isloggedin: boolean;
    
}