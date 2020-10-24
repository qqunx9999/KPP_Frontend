import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Admin{
    @ObjectIdColumn()
    adminID?:ObjectID;
    @Column()
    userID:ObjectID;
    @Column()
    reportC_read_arr :{reportCID:ObjectID}[];
    @Column()
    reportT_read_arr: {reportTID:ObjectID}[];
}

export default Admin;