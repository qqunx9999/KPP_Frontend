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
    avatar_URL: string;
    @Column()
    exp: number;
    @Column()
    rank: string;
    @Column()
    friend_arr: {user:ObjectID,sender:boolean, isaccepted:boolean, date_add:Date, date_accepted:Date, date_delete:Date}[];
    @Column()
    numberfriends: number;
    @Column()
    description: string;
    @Column()
    ischatmember_arr: {chatroomID:ObjectID}[]; //chatroomID
    @Column()
    date_join: Date;
    @Column()
    isloggedin: boolean
}
export default User;
