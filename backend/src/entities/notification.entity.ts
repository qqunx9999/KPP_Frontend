import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Notifications{
    @ObjectIdColumn()
    notificationID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    object_type: string; //chat, friend_request, report 
    @Column()
    object_typeID: ObjectID;
    
    
}

export default Notifications;