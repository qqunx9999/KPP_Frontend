export interface Thread {
    userID: string,
    topic: string,
    tags: string,
    content: string,
    Images: Images,
    upVote: [string],
    downVote: [string],
    upVoteCount: number,
    downVoteCount: number,
    numberOfComent: number,
    dateCreate: Date,
    dateLastEdit: Date,
    dateDelete: Date,
    isAnonymous: boolean,
}

interface Images {
    URL: string,
    pos: number,
}