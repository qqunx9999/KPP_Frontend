import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Unread_message{
    @ObjectIdColumn()
    unreadID_msgID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    chatroomID:ObjectID;
    @Column()
    messageID:ObjectID;
}

export default Unread_message;