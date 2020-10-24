export interface Userinfo {
    userID?: string;
    username: string;
    email: string;
    password: string;
    avatar_URL: string;
    exp: number;
    rank: string;
    friend_arr: { 
        userID: string, 
        sender: boolean, 
        isAccepted: boolean, 
        date_add: Date, 
        date_accepted: Date, 
        date_delete: Date 
    }[];// userID, sender, isaccepted, date_add, date_delete
    numberfriends: number;
    description: string;
    isChatMember_arr: { chatroomID: string }[]; //chatroomID
    date_join: Date;
    isAdmin: boolean;
    isLoggedIn: boolean;
}