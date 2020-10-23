import React, { useState, useEffect } from 'react';
import '../CSSsource/Threads.css';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';

const Threads_new = () => {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<Thread[]>([]);
  const history = useHistory();

  const fetchThread = () => {
    ThreadService.fetchThread()
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
    <div>
      <Navigtion />
      <div style={temp}>
        <h6>Topic :</h6>
        {thread.map(item => {
          if (item.threadID === { ThreadID }.ThreadID) {
            return item.topic
          }
        })}
        <h6>by :</h6>
        {thread.map(item => {
          if (item.threadID === { ThreadID }.ThreadID) {
            return item.userID
          }
        })}
        <h6>Content</h6>
        {thread.map(item => {
          if (item.threadID === { ThreadID }.ThreadID) {
            return (
              <div>
                {item.content}
              </div>
            );
          }
        })}
        <h6>Tags :</h6>
        {thread.map(item => {
          if (item.threadID === { ThreadID }.ThreadID) {
            return item.tag_arr.map(tag => (<li>{tag}</li>))
          }
        })}
        <button onClick={history.goBack}>Go Back</button>
        <Link to={`/CreateComment/${{ ThreadID }.ThreadID}`}><button>Give Comment</button></Link>
        <Link to={`/CreateReport/${{ ThreadID }.ThreadID}`}><button >Report</button></Link>
        <button>Like</button>
        <button>Dislike</button>
      </div>
    </div>
  );
}

export default Threads_new;