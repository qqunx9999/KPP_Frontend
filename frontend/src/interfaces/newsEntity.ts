export interface thread {
    userID: string,
    topic: string,
    tags: string,
    content: string,
    images: images,
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

interface images {
    URL: string,
    pos: number,
}