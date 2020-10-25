import { baseUrl } from '../config/constant';
import { Thread } from '../interfaces/threadEntity';

export async function fetchThread(): Promise<Thread[]> {
    const res = await fetch(`${ baseUrl }/threads`)
    const courses = res.json();
      return courses
}

export async function saveThread(topic: string, userID: any, tag_arr: string[], content: string, text_type: {bold: boolean, italic: boolean, font: string, size: number}, image_arr: {URL: string, pos: number}) {
    const newThread = {
        "topic": topic,
        "userID": userID,
        "tag_arr": tag_arr,
        "content": content,
        "text_type": text_type,
        "image_arr": image_arr,
    }

    const saveOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newThread),
    }
    const res = await fetch(`${ baseUrl }/threads`, saveOption);
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
    saveThread,
}; 