import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chat_message{
    @ObjectIdColumn()
    chatID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    chatroomID:ObjectID;
    @Column()
    message:string;
    @Column()
    chat_read_arr: [ObjectID, Date][] //userID, date_read 
    @Column()
    readnum:number;
    @Column()
    date_create:Date;
    @Column()
    date_delete:Date;
}
export default Chat_message;