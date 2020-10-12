import React from 'react';
import { baseUrl } from '../constant';
import { thread } from '../interfaces/newsEntity';

export async function fetchThreads(): Promise<thread[]> {
    const res = await fetch(`${ baseUrl }/threads`)
    const threads = res.json();
    return threads;
}

export default {
    fetchThreads,
};