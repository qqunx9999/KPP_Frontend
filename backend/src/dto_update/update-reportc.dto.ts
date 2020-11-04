import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray, IsObject} from "class-validator";
import {ObjectID} from 'mongodb';

export class UpdateReportment_commentDto{
    
    userID:ObjectID;
    
    threadID:ObjectID;

    commentID:ObjectID;
    
    description:string;
    
    
    image_arr: {URL: string, pos: number}[]; 
    
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