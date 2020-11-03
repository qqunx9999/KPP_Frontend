import { ObjectID } from "mongodb";

export class User_info{
    userID?: ObjectID
    //username: string;
    name: string;
    avatar_URL: string;
    exp: number;
    rank: string;
    isAdmin: boolean;
    isLoggedIn: boolean;
}