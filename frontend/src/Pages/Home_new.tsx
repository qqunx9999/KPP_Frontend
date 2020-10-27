import React, { useState, useEffect } from 'react';
import { Thread } from '../interfaces/threadEntity';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/Home.css';
import ThreadService from '../service/ThreadService';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const temp = {
  margin: "10px",
};

function Home_new() {
  const [thread, setThread] = useState<any>([{}]);
  const time = new Date();
  const history = useHistory();
  let itemThread: any;

  const fetchThread = () => {
    ThreadService.fetchThread()
      .then(obj => {
        setThread(obj);
      });
  };

  useEffect(() => {
    fetchThread();
  }, []);
  
  if(thread[0].threads != undefined) {
      const item = thread[0].threads
      // console.log(item)
    }

  function latest() {
    if (thread[0].threads != undefined) {
      const item = thread;
      item.map((obj: any) => {
        console.log(thread);
        return <li>{obj.threads.topic}</li>;
      });
    }
  }

  function hottest() {

  }

  function news() {

  }

  return (
    <div>
      <Navigtion />
      <div className="backgroundHomePage">
        <div style={temp}>
          <div className="latestWhiteFrameHomePage">
            <div className="latestGreenFrameHomePage">
              <div className="stackLatestHomePage">
                <h1>Latest</h1>
                  { latest }
              </div>
            </div>
          </div>
        <div style={temp}></div>
          <div className="hottestWhiteFrameHomePage">
            <div className="hottestGreenFrameHomePage">
              <div className="stackHottestHomePage">
                <h1>Hottest</h1>
                { true && hottest }
              </div>
            </div>
          </div>
        </div>
        <div className="newsWhiteFrameHomePage">
          <div className="newsGreenFrameHomePage">
            <div className="stackNewsHomePage">
              <h1>News</h1>
              { news }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home_new;