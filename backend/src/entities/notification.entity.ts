import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Notifications{
    @ObjectIdColumn()
    notificationID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    object_type: string;
    @Column()
    object_typeID: ObjectID;
    
    
}

export default Notifications;