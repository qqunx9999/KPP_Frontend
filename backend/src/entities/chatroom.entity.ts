import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chatroom{
    @ObjectIdColumn()
    chatroomID?:ObjectID;
    @Column()
    room_name:string;
    @Column()
    member_arr: {userID:ObjectID,date_join: Date, date_leave: Date}[]; //userID, date_join, date_leave
    @Column()
    totalmember:number;
    @Column()
    date_create:Date;
    @Column()
    date_delete:Date;
    
    
}
export default Chatroom;