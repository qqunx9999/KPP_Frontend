import { Entity, Column, ObjectIdColumn } from 'typeorm';
import { ObjectID } from 'mongodb'
 
@Entity()
export class Thread{
    @ObjectIdColumn()
    threadID?: ObjectID;
    @Column()
    userID: ObjectID; 
    @Column()
    topic: string;
    @Column()
    tag_arr : string[];
    @Column()
    content: string;
    @Column()
    image_arr: [string, number][]; //Url, pos
    @Column()
    up_vote_arr: ObjectID[]; //userID
    @Column()
    down_vote_arr: ObjectID[]; //userID
    @Column()
    up_vote_count: number;
    @Column()
    down_vote_count: number;
    @Column()
    total_comment: number;
    @Column()
    number_of_all_comment: number;
    @Column()
    date_create: Date;
    @Column()
    date_lastedit: Date;
    @Column()
    date_delete: Date;
    @Column()
    isanonymous: boolean;
}

export default Thread;