import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateUnreadDto {

    userID: ObjectID; 
    object_unreadID: ObjectID; 
    object_type: string;
}
