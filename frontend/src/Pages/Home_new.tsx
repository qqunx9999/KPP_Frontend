import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/Home.css';
import ThreadService from '../service/ThreadService';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageItem, Pagination } from 'react-bootstrap';
// import { blackMessageCircle } from "../CSSsource/Icons/black_Message_circle.png";

const temp = {
  margin: "10px",
};

function Home_new() {
  const [latestThread, setLatestThread] = useState<any>([{}]);
  const [hottestThread, setHottestThread] = useState<any>([{}]);
  const [newsThread, setNewsThread] = useState<any>([{}]);
  const [info, setInfo] = useState<any>([{}]);
  const [pageNum, setPageNum] = useState<number>(1);
  const time = new Date();
  const history = useHistory();

  const fetchNewThread = () => {
    ThreadService.fetchLatestThread(pageNum)
      .then(obj => {
        obj.map((item: any) => {
          setLatestThread(item.threads);
          setInfo(item.pageInfo);
        });
      });

    ThreadService.fetchHottestThread(pageNum)
      .then(obj => {
        obj.map((item: any) => {
          setHottestThread(item.threads);
        });
      });

    ThreadService.fetchNewsThread(pageNum)
    .then(obj => {
      obj.map((item: any) => {
        setNewsThread(item.threads);
      });
    });
  };

  function next() {
    if(pageNum < info.total_comment) {
      setPageNum(pageNum + 1);
    }
  };

  function previous() {
    if(pageNum > 0) {
      setPageNum(pageNum - 1);
    }
  }

  function dateCount(timeString: string) {
    const day = new Date(timeString);
    const postTime = day.getTime();
    const currentTime = time.getTime();
    const convertToDay = 1000 * 3600 * 24;
    const diffTime = Math.ceil((currentTime - postTime) / convertToDay);
    return Math.abs(diffTime);
  }

  useEffect(() => {
    fetchNewThread();
    next();
    previous();
  }, []);

  return (
    <div>
    <img src="https://dxgh891opzso3.cloudfront.net/files/5/9/6/9/2/shutterstock_1045743757.jpg?height=2000&width=3000" className="image" />
      <Navigtion />
      <div className="backgroundHomePage">
        <div style={temp}>
          <div className="latestWhiteFrameHomePage">
            <div className="latestGreenFrameHomePage">
              <div className="stackLatestHomePage">
                {/* <h1>Latest</h1> */}
                  { latestThread.map((item: any) => {
                    return (
                      <div>
                      <Link to={`/Thread/${item.threadID}`}>
                        <ul>
                        <li key={ item.threadID } className = "blog">
                          <p className="topicLatest">{item.topic}</p>
                          <div className="alphar"/>
                          <p className="dateLatest">  { dateCount(item.date_create) } Days</p>
                          <img className ="clockWise" src="https://image.flaticon.com/icons/png/512/3/3811.png" alt=""/>
                          </li>
                          </ul>
                      </Link>
                    </div>
                    );
                  }) }
              </div>
            </div>
          </div>
          <div className="latestFrameHomePage">
            <div className="latestTextHomePage">
              Latest
            </div>
          </div>
        <div style={temp}></div>
          <div className="hottestWhiteFrameHomePage">
            <div className="hottestGreenFrameHomePage">
              <div className="stackHottestHomePage">
                {/* <h1>Hottest</h1> */}
                { hottestThread.map((item: any) => (
                    <div>
                      <Link to={`/Thread/${item.threadID}`}>
                        <ul>
                          <li key={ item.threadID } className = "blog">
                            <p className="topicLatest">{item.topic}</p>
                            <div className="LDC">
                            <img className="likePic"src="https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-button-png-11.png" alt=""/>
                            <p className="likeHottest">
                            {item.up_vote_count}</p>
                            <div className="dP">
                            <img className="dislikePic" src="https://pngimg.com/uploads/dislike/dislike_PNG63.png" alt=""/></div>
                            <p className="dislikeHottest">  {item.down_vote_count}</p>
                            <img className="commentPic" src="https://image.flaticon.com/icons/png/512/25/25663.png" alt="" />
                            <p className="commentHottest">{ item.total_comment }</p>
                            </div>
                          </li>
                        </ul>
                      </Link>
                    </div>
                  )) }
              </div>
            </div>
          </div>
          <div className="hottestFrameHomePage">
            <div className="hottestTextHomePage">
              Hottest
            </div>
          </div>
        </div>
        <div className="newsWhiteFrameHomePage">
          <div className="newsGreenFrameHomePage">
            <div className="stackNewsHomePage">
              {/* <h1>News</h1> */}
              { newsThread.map((item: any) => (
                <div>
                  <Link to={`/Thread/${item.threadID}`}>
                    <ul>
                    <li key={ item.threadID } className = "blog">
                      <p className="topicNews"></p>{item.topic}
                    </li>
                    </ul>
                  </Link>
                </div>
              )) }
            </div>
          </div>
        </div>
        <div className="newsFrameHomePage">
          <div className="newsTextHomePage">
              News
          </div>
        </div>
      </div>
    </div>
  );
}



export default Home_new;
