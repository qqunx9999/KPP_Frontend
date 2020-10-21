import React, { useState, useEffect } from 'react';
import '../CSSsource/Threads.css';
import { Thread } from '../interfaces/threadEntity';
import threadService from '../service/threadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import CreateComment from './old pages/CreateComment';

const Threads_new = () => {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<Thread[]>([]);
  const history = useHistory();
  
  const fetchThread = () => {
    threadService.fetchThread()
      .then(obj => {
        setThread(obj);
      })
  };

  useEffect(() => {
    fetchThread();
  }, []);

  const temp = {
    margin: "10px",
  };

  return (
    <div style={ temp }>
      <h6>Topic :</h6>
      { thread.map(item => {
        if (item.threadID === {ThreadID}.ThreadID) {
          return item.topic
        }
      }) }
      <h6>Content</h6>
      { thread.map(item => {
        if (item.threadID == {ThreadID}.ThreadID) {
          return item.content
        }
      }) }
      <h6>Tags :</h6>
      { thread.map(item => {
        if (item.threadID === {ThreadID}.ThreadID) {
        return  item.tag_arr.map(tag => (<li>{ tag }</li>))
        }
      }) }
      <button onClick={ history.goBack }>Go Back</button>
      <Link to={`/Threads/:threadID/CreateComment`}><button >Give Comment</button></Link>
      
      <button >Report</button>
      <button>Like</button>
      <button>Dislike</button>
    </div>
  );
}

export default Threads_new;