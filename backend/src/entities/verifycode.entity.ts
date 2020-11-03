import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb'
@Entity()
export class Verifycode{
    @ObjectIdColumn()
    verifyID?: ObjectID;
    @Column()
    code: string;
    @Column()
    email: string;
    @Column()
    date_expire: Date;
}
export default Verifycode;
