import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Notification{
    @ObjectIdColumn()
    notificationID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    object_type: string;
    @Column()
    object_typeID: ObjectID;
    
    
}

export default Notification;