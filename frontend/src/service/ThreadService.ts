import { baseUrl } from '../config/constant';
import AuthService from './AuthService';

export async function fetchLatestThread(pageNum: number): Promise<[]> {
    const res = await fetch(`${ baseUrl }/threads/filter/%20/Latest/8/${ pageNum }`)
    const thread = res.json();
    return thread;
}

export async function fetchHottestThread(pageNum: number): Promise<[]> {
    const res = await fetch(`${ baseUrl }/threads/filter/%20/Hottest/8/${ pageNum }`)
    const thread = res.json();
    return thread;
}

export async function fetchNewsThread(pageNum: number): Promise<[]> {
    const res = await fetch(`${ baseUrl }/threads/filter/%20/Newest/8/${ pageNum }`)
    const thread = res.json();
    return thread;
}

export async function fetchOneThread(threadID: any | undefined): Promise<any> {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }`);
    const thread = res.json();
    return thread
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
    console.log(comment)
    return comment;
}

export async function fetchReportThread(userID: string) {
    const res = await fetch(`${ baseUrl }/reports/reportTs/list/${ userID }/8/1`);
    const report = res.json();
    return report;
}

export async function fetchReportComment(userID: string) {
    const res = await fetch(`${ baseUrl }/reports/reportCs/list/${ userID }/8/1`);
    const report = res.json();
    return report;
}

export async function reportThread(threadID: string, reportBody: any) {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }/reportTs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportBody)
    });
    const report = res.json();
    if(report) { return report }
    else { return null }
}

export async function reportComment(threadID: string, reportBody: any, commentID: string) {
    const res = await fetch(`${ baseUrl }/threads/${ threadID }/comments/${ commentID }/reportCs`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reportBody)
    });
    const report = res.json();
    if(report) { return report }
    else { return null }
}

export async function fetchOneThreadReport(reportTID: string) {
    const res = await fetch(`${ baseUrl }/reports/reportTs/${ reportTID }`);
    const report = res.json();
    return report;
}

export async function fetchOneCommentReport(reportCID: string) {
    const res = await fetch(`${ baseUrl }/reports/reportCs/${ reportCID }`);
    const report = res.json();
    return report;
}

export async function searchThread(keyword: string, tags: string, sortby: string, pagesize: number, pageNO: number) {
    const res = await fetch(`${ baseUrl }/threads/search/${ keyword }/${ tags }/${ sortby }/${ pagesize }/${ pageNO }`);
    const search = res.json();
    console.log(`${ baseUrl }/threads/search/${ keyword }/${ tags }/${ sortby }/${ pagesize }/${ pageNO }`)
    return search;
}

export default {
    fetchLatestThread,
    fetchHottestThread,
    fetchNewsThread,
    fetchOneThread,
    passThreadNO,
    checkThreadNO,
    clearThreadNO,
    voteUp,
    voteDown,
    fetchComment,
    fetchReportThread,
    fetchReportComment,
    reportThread,
    reportComment,
    fetchOneThreadReport,
    fetchOneCommentReport,
    searchThread,
}; 