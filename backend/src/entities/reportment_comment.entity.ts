import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Reportment_comment{
    @ObjectIdColumn()
    reportCID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    commentID:ObjectID;
    @Column()
    description:string;
    @Column()
    image_arr: {URL:string, pos:number}[];  // URL, pos
    @Column()
    date_create:Date;
    @Column()
    date_delete:Date;
}
export default Reportment_comment;