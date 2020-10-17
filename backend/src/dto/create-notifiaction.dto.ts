import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class NotificationDto {

    userID:ObjectID;
    type: string;
    chatroomID:ObjectID;
}
