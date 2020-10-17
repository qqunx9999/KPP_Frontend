import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateUnread_messageDto {

    userID: ObjectID; 
    chatroomID: ObjectID; 
    messageID: ObjectID;
}
