import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Unread{
    @ObjectIdColumn()
    unreadID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    object_unreadID:ObjectID;
    @Column()
    object_type:string;
}

export default Unread;