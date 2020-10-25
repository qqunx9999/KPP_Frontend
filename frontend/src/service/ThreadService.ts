import { baseUrl } from '../config/constant';
import { Thread } from '../interfaces/threadEntity';

export async function fetchThread(): Promise<Thread[]> {
    const res = await fetch(`${ baseUrl }/threads`)
    const courses = res.json();
      return courses
}

export async function checkComment() {
    const res = await fetch(`${ baseUrl }/`);
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

export default {
    fetchThread,
    passThreadNO,
    checkThreadNO,
    clearThreadNO,
    checkComment,
}; 