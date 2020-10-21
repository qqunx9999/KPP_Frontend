import React, { useState, useEffect } from 'react';
import { Thread } from '../interfaces/threadEntity';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/Home.css';
import threadService from '../service/threadService';
import Navigtion from '../component/navBar';
import { Route, useHistory, useParams } from 'react-router';
import Threads_new from './Thread_new';
import AuthService from '../service/AuthService';
import { BrowserRouter, Link } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';

type LoginFormProps = {
  loginCallBack?: () => void,
}

const temp = {
  margin: "10px",
};

const Home_new = (props: LoginFormProps) => {
  const [thread, setThread] = useState<Thread[]>([]);
  const time = new Date();
  const history = useHistory();
  const param = useParams();
  let itemThread: any;

  thread.map(item => (itemThread = item));

  const fetchThread = () => {
    threadService.fetchThread()
      .then(obj => {
        setThread(obj);
      })
  };

  const passThread = (item: string) => {
    threadService.passThreadNO(item);
  };

  useEffect(() => {
    fetchThread();
  }, []);

  return (
    <div>
      <div style={temp}>
        <h1>Latest</h1>
        {thread.map(item => (
          <div>
            <Link to={`/Thread_new/${ item.threadID }`} >
              { item.topic } - { time.getDate() - Number(item.date_create) } Days
            </Link>
          </div>
        ))}
        <h1>Hottest</h1>
        {thread.map(item => (
          <div>
            <Link to={`/Thread_new/${ item.threadID }`} >
              { item.topic } - Like { item.up_vote_count } : Dislike { item.down_vote_count } : Comments { item.number_of_comment }
            </Link>
          </div>
        ))}
        <h1>News</h1>
        {thread.map(item => (
          <div>
            <Link to={`/Thread_new/${ item.threadID }`} >
              { item.topic }
            </Link>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Home_new;