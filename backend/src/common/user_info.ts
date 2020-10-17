import { ObjectID } from "mongodb";

export class User_info{
    userID?: ObjectID
    username: string;
    avatar_URL: string;
    exp: number;
    rank: string;
    isLoggedIn: boolean;
}