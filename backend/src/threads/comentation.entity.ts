import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Commentation {
    @ObjectIdColumn()
    commentID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    threadID:ObjectID;
    @Column()
    content:string;
    @Column()
    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    @Column()
    image_arr:{URL:string, pos:number}[];//URL ,pos
    @Column()
    reply_to:number;
    @Column()
    commentNO:number;
    @Column()
    date_create:Date;
    @Column()
    date_lastedit:Date;
    @Column()
    date_delete:Date;
    
}
export default Commentation;