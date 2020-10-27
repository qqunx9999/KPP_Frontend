import { baseUrl } from '../config/constant';
import { Thread } from '../interfaces/threadEntity';
import AuthService from './AuthService';

export async function fetchThread(): Promise<Thread[]> {
    const res = await fetch(`${ baseUrl }/threads/filter/%20/Newest/8/1`)
    const courses = res.json();
    return courses
}

export function passThreadNO(threadNO: string): void {
    localStorage.setItem('threadNO', threadNO);
    // console.log(threadNO);
}

export function checkThreadNO(): string {
    const res = localStorage.threadNO;
    return res;
}

export function clearThreadNO(): void {
    localStorage.removeItem('threadNO');
}

export async function voteUp(threadID: string | undefined) {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "up_vote_arr": [{ "userID": AuthService.getUserID() }]
        })
    });
}

export async function voteDown(threadID: string | undefined) {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "down_vote_arr": [{ "userID": AuthService.getUserID() }]
        })
    });
}

export default {
    fetchThread,
    passThreadNO,
    checkThreadNO,
    clearThreadNO,
    voteUp,
    voteDown
}; 