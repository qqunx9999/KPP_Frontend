import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb'
@Entity()
export class User{
    @ObjectIdColumn()
    userID?: ObjectID;
    @Column()
    username: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    exp: number;
    @Column()
    rank: string;
    @Column()
    friend_arr: [ ObjectID, Date, Date?][];// userID, date_add, date_remove
    @Column()
    numberfriends: number;
    @Column()
    avatar_URL: string;
    @Column()
    description: string;
    @Column()
    date_join: Date;
}
export default User;