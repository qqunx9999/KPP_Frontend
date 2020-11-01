import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/Home.css';
import ThreadService from '../service/ThreadService';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PageItem, Pagination } from 'react-bootstrap';
import { number } from 'yup';

const temp = {
  margin: "10px",
};

function Home_new() {
  const [latestThread, setLatestThread] = useState<any>([{}]);
  const [hottestThread, setHottestThread] = useState<any>([{}]);
  const [newsThread, setNewsThread] = useState<any>([{}]);
  const [info, setInfo] = useState<any>([{}]);
  const time = new Date();
  const history = useHistory();
  let pageNum = 1;

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

  function dateCount(timeString: string) {
    const day = new Date(timeString);
    const postTime = day.getTime();
    const currentTime = time.getTime();
    const convertToDay = 1000 * 3600 * 24;
    const diffTime = Math.floor((currentTime - postTime) / convertToDay) ;
    return Math.abs(diffTime);
  }

  type pageProps = {
    threadSize: number,
  }
  
  function Page(props: pageProps) {
    let [active, setActive] = useState<number>(1);
    let item = [];
  
    const changePage = (page: number) => {
      setActive(page);
      pageNum = page;
    };
    
    for (let number = 1;number <= props.threadSize;number++) {
      item.push(
        <PageItem key={ number } active={ number === active } onClick={ () => changePage(number) }>{ number }</PageItem>
      );
    }
  
    return(
      <div>
        <Pagination size="lg" >{ item }</Pagination>
      </div>
    );
  }  

  useEffect(() => {
    fetchNewThread();
  }, []);

  //console.log(thread)
  return (
    <div>
      <Navigtion />
      <div className="backgroundHomePage">
        <div style={temp}>
          <div className="latestWhiteFrameHomePage">
            <div className="latestGreenFrameHomePage">
              <div className="stackLatestHomePage">
                <h1>Latest</h1>
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
            <Page threadSize={ info.total } />
          </div>
        <div style={temp}></div>
          <div className="hottestWhiteFrameHomePage">
            <div className="hottestGreenFrameHomePage">
              <div className="stackHottestHomePage">
                <h1>Hottest</h1>
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
                            <img className="dislikePic"src="https://pngimg.com/uploads/dislike/dislike_PNG63.png" alt=""/>
                            <p className="dislikeHottest">  {item.down_vote_count}</p>
                            <img className="commentPic" src="" alt="" />
                            <p className="commentHottest">{ item.total_comment }</p>
                            </div>
                          </li>
                        </ul>
                      </Link>
                    </div>
                  )) }
              </div>
            </div>
            <Page threadSize={ info.total } />
          </div>
        </div>
        <div className="newsWhiteFrameHomePage">
          <div className="newsGreenFrameHomePage">
            <div className="stackNewsHomePage">
              <h1>News</h1>
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
              <Page threadSize={ info.total } />
        </div>
      </div>
    </div>
  );
}


export default Home_new;