import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Admin{
    @ObjectIdColumn()
    adminID?:ObjectID;
    @Column()
    userID:ObjectID;
}
export default Admin;