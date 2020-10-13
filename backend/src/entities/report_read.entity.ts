import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Report_read{
    @ObjectIdColumn()
    readID?:ObjectID;
    @Column()
    adminID:ObjectID;
    @Column()
    reportCID:ObjectID;
    @Column()
    reportTID:ObjectID;
    @Column()
    date_read:Date;
}
export default Report_read;