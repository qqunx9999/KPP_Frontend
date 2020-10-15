import { render } from '@testing-library/react';
import React from 'react';
import { Thread } from '../interfaces/threadEntity';

type threadProps = {
    thread: Thread;
}

const ThreadItem = (props: threadProps) => {
    const thread: Thread = props.thread;

    return(
    <li>{ thread.topic }</li>
    );
};

export default ThreadItem;