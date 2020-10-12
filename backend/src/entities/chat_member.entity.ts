import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chat_member{
    @ObjectIdColumn()
    chat_memberID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    chatroomID:ObjectID;
    @Column()
    date_join_chat:Date;
    @Column()
    date_leave_chat?:Date;
}
export default Chat_member;