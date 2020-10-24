import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chatroom{
    @ObjectIdColumn()
    chatroomID?:ObjectID;
    @Column()
    room_name:string;
    @Column()
    member_arr: {userID:ObjectID,date_join_chat:Date, date_leave_chat:Date}[]; 
    @Column()
    totalmember:number;
    @Column()
    date_create:Date;
    @Column()
    date_lastactive:Date;
    @Column()
    date_delete:Date;
}
export default Chatroom;