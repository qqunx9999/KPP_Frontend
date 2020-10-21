import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString , IsArray} from "class-validator";
import {ObjectID} from 'mongodb';



export class CreateCommentDto {
    
    userID:ObjectID;
    
    threadID:ObjectID;
    @IsString()
    content:string;

    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    @IsArray()
    image_arr:{URL: string, pos: number}[];
    @IsInt()
    reply_to:number;
    @IsInt()
    commentNO:number;
    @IsDate()
    date_create:Date;
    @IsDate()
    date_lastedit:Date;
    @IsDate()
    date_delete:Date;
    
}