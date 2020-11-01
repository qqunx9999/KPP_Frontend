import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray, IsObject} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateReportment_commentDto{
    
    userID:ObjectID;
    
    threadID:ObjectID;

    commentID:ObjectID;
    @IsString()
    description:string;
    @IsObject()
    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    @IsArray()
    image_arr: {URL: string, pos: number}[]; 
    @IsInt()
    at_comment: number;
    //@IsString()
    reportCNO: number;
    status:string;
    considered_by: {userID: ObjectID};
    //@IsDate()
    date_create:Date;
    //@IsDate()
    date_considered: Date;
    //@IsDate()
    date_delete:Date;
}