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
    readnum:number;
    @Column()
    date_create:Date;
    @Column()
    date_delete:Date;
    //hello
}
export default Chat_message;