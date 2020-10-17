import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Notification{
    @ObjectIdColumn()
    notificationID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    type: string;
    @Column()
    chatroomID:ObjectID;
    
    
}

export default Notification;