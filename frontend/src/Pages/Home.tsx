import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Thread } from '../interfaces/threadEntity';
import 'bootstrap/dist/css/bootstrap.css';
import ThreadItem from '../component/threadItem';
import '../CSSsource/Home.css';

import threadService from '../service/threadService';
import Navigtion from '../component/navBar';

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
      <Navigtion />
      <div className="backgroundHomePage">
        <div className="latestWhiteFrameHomePage">
          <div className="latestGreenFrameHomePage">
            <div className="stackLatestHomePage">
              <div className="firstLatestTextHomePage">
                {thread.map(item => (
                  <Link to={{ pathname: `/Threads/${item.threadID}` }}>
                    <ul className="content">
                      <ThreadItem key={item.threadID} thread={item} />
                    </ul>
                  </Link>
                ))}
              </div>
              <div className="firstLatestTimeFrameHomePage">
                <div className="firstLatestTimeHomePage">
                  1 seconds ago
                </div>
              </div>
            </div>
          </div>
          <div className="stackLatestPageNumberHomePage">
            <div className="goFirstButtonLatestPageNumber" />
            <div className="goBackButtonLatestPageNumberHomePage" />
            <div className="firstPageFrameLatestHomePage" />
            <div className="secondPageFrameLatestHomePage" />
            <div className="thirdPageFrameLatestHomePage" />
            <div className="fouthPageFrameLatestHomePage" />
            <div className="fifthPageFrameLatestHomePage" />
            <div className="goNextButtonLatestPageNumberHomePage" />
            <div className="currentPageNumberButtonLatestHomePage" />
            <div className="goLastButtonLatestPageNumber" />
            <div className="firstPageNumberLatestHomePage">
              1
            </div>
            <div className="secondPageNumberLatestHomePage">
              2
            </div>
            <div className="thirdPageNumberLatestHomePage">
              3
            </div>
            <div className="fouthPageNumberLatestHomePage">
              4
            </div>
            <div className="fifthPageNumberLatestHomePage">
              5
            </div>
          </div>
        </div>
        <div className="latestFrameHomePage">
          <div className="latestTextHomePage">
            Latest
          </div>
        </div>


        <div className="hottestWhiteFrameHomePage">
          <div className="hottestGreenFrameHomePage">
            <div className="stackHottestHomePage">
              <div className="firstHottestTextHomePage">
                {thread.map(item => (
                  <Link to={`/Threads/${item.threadID}`}>
                    <ul className="content">
                      <ThreadItem key={item.threadID} thread={item} />
                    </ul>
                  </Link>
                ))}
              </div>
              <div className="firstHottestStatusFrameHomePage">
                <div className="firstHottestLikeFrameHomePage">
                  {thread.slice(0, 1).map(item => (
                    <div key={item.threadID} className="firstHottestLikeNumberHomePage">
                      { item.up_vote_count}
                    </div>
                  ))}
                </div>
                <div className="firstHottestDislikeFrameHomePage">
                  {thread.slice(0, 1).map(item => (
                    <div key={item.threadID} className="firstHottestDislikeNumberHomePage">
                      { item.down_vote_count}
                    </div>
                  ))}
                </div>
                <div className="firstHottestCommentFrameHomePage">
                  {thread.slice(0, 1).map(item => (
                    <div key={item.threadID} className="firstHottestCommentNumberHomePage">
                      { item.number_of_comment}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="stackHottestPageNumberHomePage">
            <div className="goFirstButtonLatestPageNumber" />
            <div className="goBackButtonLatestPageNumberHomePage" />
            <div className="firstPageFrameLatestHomePage" />
            <div className="secondPageFrameLatestHomePage" />
            <div className="thirdPageFrameLatestHomePage" />
            <div className="fouthPageFrameLatestHomePage" />
            <div className="fifthPageFrameLatestHomePage" />
            <div className="goNextButtonLatestPageNumberHomePage" />
            <div className="currentPageNumberButtonLatestHomePage" />
            <div className="goLastButtonLatestPageNumber" />
            <div className="firstPageNumberHottestHomePage">
              1
            </div>
            <div className="secondPageNumberHottestHomePage">
              2
            </div>
            <div className="thirdPageNumberHottestHomePage">
              3
            </div>
            <div className="fouthPageNumberHottestHomePage">
              4
            </div>
            <div className="fifthPageNumberHottestHomePage">
              5
            </div>
          </div>
        </div>
        <div className="hottestFrameHomePage">
          <div className="hottestTextHomePage">
            Hottest
          </div>
        </div>


        <div className="newsWhiteFrameHomePage">
          <div className="newsGreenFrameHomePage">
            <div className="stackNewsHomePage">
              <div className="firstNewsTextHomePage">
                {thread.map(item => (
                  <Link to={`/Threads/${item.threadID}`} >
                    <ul className="content">
                      <ThreadItem key={item.threadID} thread={item} />
                    </ul>
                  </Link>
                ))}
              </div>
              <div className="firstNewsDateFrameHomePage">
                <div className="firstNewsDateHomePage">
                  14/9/2020
                </div>
              </div>
            </div>
          </div>
          <div className="stackNewsPageNumberHomePage">
            <div className="goFirstButtonLatestPageNumber" />
            <div className="goBackButtonLatestPageNumberHomePage" />
            <div className="firstPageFrameLatestHomePage" />
            <div className="secondPageFrameLatestHomePage" />
            <div className="thirdPageFrameLatestHomePage" />
            <div className="fouthPageFrameLatestHomePage" />
            <div className="fifthPageFrameLatestHomePage" />
            <div className="goNextButtonLatestPageNumberHomePage" />
            <div className="currentPageNumberButtonLatestHomePage" />
            <div className="goLastButtonLatestPageNumber" />
            <div className="firstPageNumberNewsHomePage">
              1
            </div>
            <div className="secondPageNumberNewsHomePage">
              2
            </div>
            <div className="thirdPageNumberNewsHomePage">
              3
            </div>
            <div className="fouthPageNumberNewsHomePage">
              4
            </div>
            <div className="fifthPageNumberNewsHomePage">
              5
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

export default Home;