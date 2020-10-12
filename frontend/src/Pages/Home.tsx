import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { thread } from '../interfaces/newsEntity';
import threadService from '../service/threadService';

const Home = () => {
  // const [thread, setThread] = useState<thread[]>([]);

  // const fetchThread = () => {
  //   threadService.fetchThreads()
  //     .then(thread => {
  //       setThread(thread)
  //     });
  // }

  // useEffect(() => {
  //   fetchThread();
  // }, []);

  return (
     <div>
      {/* { thread.map(item => {
        <ul>
          
        </ul>
      }) } */}
     </div>
  );
}

export default Home;