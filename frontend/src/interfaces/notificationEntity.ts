export interface commentNotifications {
    notificationInfo: {
        notificationInfo: string,
        userID: string,
        object_type: string,
        object_typeID: string,
        date_noti: string
    },
    commentInfo: {
        comment: {
            commentID: string,
            userID: string,
            threadID: string,
            content: string,
            image_arr: [],
            reply_to: number,
            commentNO: number,
            date_create: string
        },
        threadInfo: {
            thread: {
                threadID: string,
                userID: string,
                topic: string,
                tag_arr: [],
                content: string,
                threadNO: number,
                up_vote_arr: [],
                down_vote_arr: [],
                up_vote_count: number,
                down_vote_count: number,
                total_comment: number,
                number_of_all_comment: number,
                date_create: string
            },
            userInfo: {
                userID: string,
                name: string,
                exp: number,
                rank: string,
                isAdmin: boolean,
                isLoggin: boolean
            }
        },
        userInfo: {
            userID: string,
            name: string,
            exp: number,
            rank: string,
            isAdmin: boolean,
            isLoggin: boolean
        }
    }
}