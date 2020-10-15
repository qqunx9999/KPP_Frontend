import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateReportment_commentDto{
    
    userID:ObjectID;
    
    commentID:ObjectID;
    @IsString()
    description:string;
    @IsArray()
    image_arr: [string, number][]; 
    @IsDate()
    date_create:Date;
    @IsDate()
    date_delete:Date;
}