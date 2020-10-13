import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Admin{
    @ObjectIdColumn()
    adminID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    reportC_read_arr: [ObjectID, Date]; //reportCID, date read
    @Column()
    reportT_read_arr: [ObjectID, Date]; //reportTID, date read
}
export default Admin;