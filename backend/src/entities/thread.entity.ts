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
    image_arr: [string, number][]; //Url: string pos: number
    
    @Column()
    up_vote_arr: ObjectID[];

    @Column()
    down_vote_arr: ObjectID[];

    @Column()
    up_vote_count: number;

    @Column()
    down_vote_count: number;

    @Column()
    number_of_comment: number;

    @Column()
    date_create: Date;

    @Column()
    date_lastedit?: Date;

    @Column()
    date_delete?: Date;

    @Column()
    isanonymous: boolean;
}

export default Thread;