import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Reportment_thread{
    @ObjectIdColumn()
    reportTID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    threadID:ObjectID;
    @Column()
    description:string;
    @Column()
    text_type: {bold: boolean, italic: boolean, font:string, size:number};
    @Column()
    image_arr: {URL:string, pos:number}[]; 
    @Column()
    status:string;
    @Column()
    date_create:Date;
    @Column()
    date_considered: Date;
    @Column()
    date_delete:Date;
}
export default Reportment_thread;