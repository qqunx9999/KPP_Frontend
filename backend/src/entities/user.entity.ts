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
    friend_arr: [ObjectID, Date, Date, boolean][];// userID, date_add, date_remove(default null), isaccept
    @Column()
    numberfriends: number;
    @Column()
    avatar_URL: string;
    @Column()
    description: string;
    @Column()
    date_join: Date;
    @Column()
    ischatmember_arr: ObjectID[]; //chatroomID 
}
export default User;