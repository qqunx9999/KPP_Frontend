import {ObjectID} from 'mongodb';
import { User_info } from 'src/common/user_info';
import Notifications from 'src/entities/notification.entity';
import Reportment_comment from 'src/entities/reportment_comment.entity';
import Commentation from 'src/threads/comentation.entity';
import Thread from 'src/threads/thread.entity';



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

// var test:any[] = [
//     {
//             Noti: Notifications,
//             thread: Thread        

//     },
//     {
//         Noti: Notifications,
//         report: Reportment_comment,
//         comment: Commentation
//     }
// ]