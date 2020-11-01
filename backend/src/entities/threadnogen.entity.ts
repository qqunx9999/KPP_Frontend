import {Entity , Column , ObjectIdColumn } from 'typeorm';
import {ObjectID} from 'mongodb';

@Entity()
export class Threadnogen{
    @ObjectIdColumn()
    id?: ObjectID;
    @Column()
    threadNO: number;
}

export default Threadnogen;