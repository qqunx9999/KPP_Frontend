import { IsInt , IsNotEmpty , IsBoolean , IsDate , IsString } from "class-validator";
import {ObjectID} from 'mongodb';

export class CreateThread{

    userID: ObjectID; 

    @IsString()
    topic: string;

    
    tag_arr : string[];

    @IsString()
    content: string;

    
    image_arr: [string, number][]; //Url: string pos: number
    

    up_vote_arr: ObjectID[];


    down_vote_arr: ObjectID[];

    @IsInt()
    up_vote_count: number;

    @IsInt()
    down_vote_count: number;

    @IsInt()
    number_of_comment: number;

    @IsDate()
    date_create: Date;

    @IsDate()
    date_lastedit?: Date;

    @IsDate()
    date_delete?: Date;

    @IsBoolean()
    isanonymous: boolean;
}