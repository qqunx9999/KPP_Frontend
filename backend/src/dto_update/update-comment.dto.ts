import {ObjectID} from 'mongodb';



export class UpdateCommentDto {
    
    content:string;

    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    image_arr:{URL: string, pos: number}[];
    reply_to:number;
    //@IsInt()
    //@IsDate()
    //@IsDate()
    date_lastedit:Date;
    //@IsDate()
    date_delete:Date;
    
}