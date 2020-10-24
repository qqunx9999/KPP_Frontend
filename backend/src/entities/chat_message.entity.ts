import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chat_message{
    @ObjectIdColumn()
    messageID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    chatroomID:ObjectID;
    @Column()
    message:string;
    @Column()
    date_create:Date;
    @Column()
    date_delete:Date;
}
export default Chat_message;