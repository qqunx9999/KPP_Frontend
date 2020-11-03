import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Objectnumber{
    @ObjectIdColumn()
    id?: ObjectID;
    @Column()
    object_type: string;
    @Column()
    NO: number;
}

export default Objectnumber;