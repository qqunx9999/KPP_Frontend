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
    friend_arr: [ ObjectID, boolean, boolean, Date, Date][];// userID,sender, isaccepted date_add, date_delete
    @IsDate()
    numberfriends: number;
    @IsString()
    description: string;
    @IsArray()
    ischatmember_arr: ObjectID[]; //chatroomID
    @IsDate()
    date_join: Date;
    @IsBoolean()
    isloggedin: boolean;
    
}