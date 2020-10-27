export interface Thread {
    threads: {
        threadID?: string;
    userID: string; 
    topic: string;
    tag_arr : string[];
    content: string;
    text_type: {
        bold: boolean, 
        italic: boolean, 
        font: string, 
        size: number
    };
    image_arr: {
        URL: string,
        pos: number
    }[]; //Url, pos
    up_vote_arr: {
        userID:string
    }[]; //userID
    down_vote_arr: {
        userID:string
    }[]; //userID
    up_vote_count: number;
    down_vote_count: number;
    total_comment: number;
    number_of_all_comment: number;
    date_create: Date;
    date_lastedit: Date;
    date_delete: Date;
    },
    pageInfo: {
        pagesize: number,
        pageNo: number,
        total: number
    }
}
