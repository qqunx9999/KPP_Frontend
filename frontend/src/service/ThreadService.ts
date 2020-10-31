import { baseUrl } from '../config/constant';
import AuthService from './AuthService';

export async function fetchLatestThread(): Promise<[]> {
    const res = await fetch(`${ baseUrl }/threads/filter/%20/Latest/8/1`)
    const thread = res.json();
    return thread;
}

export async function fetchOneThread(threadID: any | undefined): Promise<any> {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }`);
    const thread = res.json();
    return thread;
}

export function passThreadNO(threadNO: string): void {
    localStorage.setItem('threadNO', threadNO);
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
    window.location.reload()
}

export async function voteDown(threadID: string | undefined) {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "down_vote_arr": [{ "userID": AuthService.getUserID() }]
        })
    });
    window.location.reload()
}

export async function fetchComment(threadID: string | undefined) {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }/comments`);
    const comment = res.json();
    return comment;
}

export async function fetchReportThread(adminID: string) {
    const res = await fetch(`${ baseUrl }/reports/reportTs/list/${ adminID }/8/1`);
    const report = res.json();
    return report;
}

export default {
    fetchLatestThread,
    fetchOneThread,
    passThreadNO,
    checkThreadNO,
    clearThreadNO,
    voteUp,
    voteDown,
    fetchComment,
    fetchReportThread,
}; 