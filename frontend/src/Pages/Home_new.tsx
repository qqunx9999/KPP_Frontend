import React, { useState, useEffect } from 'react';
import { Thread } from '../interfaces/threadEntity';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/Home.css';
import ThreadService from '../service/ThreadService';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import AuthService from '../service/AuthService';

const temp = {
  margin: "10px",
};

function Home_new() {
  const [thread, setThread] = useState<Thread[]>([]);
  const time = new Date();
  const history = useHistory();
  let itemThread: any;
  const [login, setLogin] = useState<boolean>(false);

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  thread.map(item => (itemThread = item));

  const fetchThread = () => {
    ThreadService.fetchThread()
      .then(obj => {
        setThread(obj);
      });
  };

  useEffect(() => {
    fetchThread();
  }, []);

  function redirected(): void {
    history.push('/')
  }

  return (
    <div>
      { !login && redirected()}
      <Navigtion />
        <div className="backgroundHomePage">
          <div style={temp}>
            <div className="latestWhiteFrameHomePage">
              <div className="latestGreenFrameHomePage">
                <div className="stackLatestHomePage">
                  <h1>Latest</h1>
                    {thread.map(item => (
                      <div>
                        <Link to={`/Thread/${item.threadID}`}>
                          {item.topic} - {time.getDate() - Number(item.date_create)} Days
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="hottestWhiteFrameHomePage">
              <div className="hottestGreenFrameHomePage">
                <div className="stackHottestHomePage"></div>
                  <h1>Hottest</h1>
                  {thread.map(item => (
                    <div>
                      <Link to={`/Thread/${item.threadID}`}>
                        {item.topic} - Like {item.up_vote_count}: Dislike {item.down_vote_count}: Comments {item.number_of_comment}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="newsWhiteFrameHomePage">
              <div className="newsGreenFrameHomePage">
                <div className="stackNewsHomePage">
                  <h1>News</h1>
                  {thread.map(item => (
                    <div>
                      <Link to={`/Thread/${item.threadID}`}>
                        {item.topic}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}

export default Home_new;