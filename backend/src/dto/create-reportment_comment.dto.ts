import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray, IsObject} from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateReportment_commentDto{
    
    userID:ObjectID;
    
    threadID:ObjectID;

    commentID:ObjectID;
    @IsInt()
    commentNO: number;
    @IsString()
    description:string;
    @IsObject()
    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    @IsArray()
    image_arr: {URL: string, pos: number}[]; 
    @IsString()
    status: string;
    @IsDate()
    date_create:Date;
    @IsDate()
    date_concidered: Date;
    @IsDate()
    date_delete:Date;
}