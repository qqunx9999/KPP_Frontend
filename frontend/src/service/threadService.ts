import { baseUrl } from '../config/constant';
import { Thread } from '../interfaces/threadEntity';

export async function fetchThread(): Promise<Thread[]> {
    const res = await fetch(`${ baseUrl }/threads`)
    const courses = res.json();
      return courses
}

export default {
    fetchThread,
};