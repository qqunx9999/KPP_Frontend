import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class NotificationDto {

    userID:ObjectID;
    object_type: string;
    object_typeID:ObjectID;
    date_noti: Date;
    date_read: Date;
}
