import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Chat_read{
    @ObjectIdColumn()
    readID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    chatID:ObjectID;
    @Column()
    date_read:Date;
}
export default Chat_read;