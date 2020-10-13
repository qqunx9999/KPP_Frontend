import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Thread } from '../interfaces/threadEntity';
import 'bootstrap/dist/css/bootstrap.css';

import '../CSSsource/Home.css';

import threadService from '../service/threadService';


const Home = () => {
  const [thread, setThread] = useState<Thread[]>([]);

  const fetchThread = () => {
    threadService.fetchThread()
      .then(obj => {
        setThread(obj);
      })
  };

  useEffect(() => {
    fetchThread();
  }, []);

  return (
     <div>
       <div className="backgroundHomePage">
       <div className="topBlackFrameHomePage">
        <div className="topKUPeopleHomePage">
        </div>
        <div className="searchSymbolHomePage">
        </div>
        <div className="createBlogSymbolHomePage">
        </div>
        <div className="profilePicHomePage">
        </div>
        <div className="rankHomePage">
          Beginner
        </div>
       </div>
        
        
        <h6>Latest</h6>
        <ul>
          <Link to={ `Threads` }>
            { thread.map(item => {
              return <li key={ item.userID }>{ item.content }</li>
            }) }
          </Link>
        </ul>
        <h6>Hottest</h6>
        <ul>
          <Link to={ `Threads` }>
            { thread.map(item => {
                return <li key={ item.userID }>{ item.content }</li>
              }) }
          </Link>
        </ul>
        <h6>News</h6>
        <ul>
          <Link to={ `Threads` }>
            { thread.map(item => {
              return <li key={ item.userID }>{ item.content }</li>
            }) }
          </Link>
        </ul>
       </div>
     </div>
  );
}

export default Home;