import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chatroom{
    @ObjectIdColumn()
    chatroomID?:ObjectID;
    @Column()
    room_name:string;
    @Column()
    totalmember:number;
    @Column()
    date_create:Date;
    @Column()
    date_delete?:Date;
}
export default Chatroom;