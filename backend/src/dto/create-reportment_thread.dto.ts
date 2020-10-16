import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';


export class CreateReportment_threadDto{
    
    userID:ObjectID;
    
    threadID:ObjectID;
    @IsString()
    description:string;
    @IsArray()
    image_arr: {URL: string, pos: number}[]; 
    @IsDate()
    date_create:Date;
    @IsDate()
    date_delete:Date;
}