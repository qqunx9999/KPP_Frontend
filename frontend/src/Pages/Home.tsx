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
          <div className="userRankHomePage">
            Beginner
          </div>
          <div className="userDisplayNameHomePage">
            Patrick Star
          </div>
        </div>
        
        <div className="latestWhiteFrameHomePage">
          <div className="latestGreenFrameHomePage">
            <div className="stackLatestHomePage">
              <div className="firstLatestTextHomePage">
                { thread.map(item => (
                  <Link to={`/Threads/${ item.userID }`}>
                    { thread.map(item => (
                      <li key={ item.userID }>item.topic</li>
                    )) }
                  </Link>
                )) }
              </div>
              <div className="firstLatestTimeFrameHomePage"> 
                <div className="firstLatestTimeHomePage">
                  1 seconds ago
                </div>
              </div>
            </div>
          </div>
          <div className="stackLatestPageNumberHomePage">
            <div className="goFirstButtonLatestPageNumber">
            </div>
            <div className="goBackButtonLatestPageNumberHomePage">
            </div>
            <div className="firstPageFrameLatestHomePage">
            </div>
            <div className="secondPageFrameLatestHomePage">
            </div>
            <div className="thirdPageFrameLatestHomePage">
            </div>
            <div className="fouthPageFrameLatestHomePage">
            </div>
            <div className="fifthPageFrameLatestHomePage">
            </div>
            <div className="goNextButtonLatestPageNumberHomePage">
            </div>

            <div className="currentPageNumberButtonLatestHomePage">
            </div>
            <div className="goLastButtonLatestPageNumber">
            </div>
            
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
                { thread.map(item => (
                    <Link to={`/Threads/${ item.userID }`}>
                      { thread.map(item => (
                        <li key={ item.userID }>item.topic</li>
                      )) }
                    </Link>
                  )) }
              </div>
              <div className="firstHottestStatusFrameHomePage"> 
                <div className="firstHottestLikeFrameHomePage">
                  <div className="firstHottestLikeNumberHomePage">
                    99
                  </div>
                </div>
                <div className="firstHottestDislikeFrameHomePage">
                  <div className="firstHottestDislikeNumberHomePage">
                    99
                  </div>
                </div>
                <div className="firstHottestCommentFrameHomePage">
                  <div className="firstHottestCommentNumberHomePage">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="stackHottestPageNumberHomePage">
            <div className="goFirstButtonHottestPageNumber">
            </div>
            <div className="goBackButtonHottestPageNumberHomePage">
            </div>
            <div className="firstPageFrameHottestHomePage">
            </div>
            <div className="secondPageFrameHottestHomePage">
            </div>
            <div className="thirdPageFrameHottestHomePage">
            </div>
            <div className="fouthPageFrameHottestHomePage">
            </div>
            <div className="fifthPageFrameHottestHomePage">
            </div>
            <div className="goNextButtonHottestPageNumberHomePage">
            </div>

            <div className="currentPageNumberButtonHottestHomePage">
            </div>
            <div className="goLastButtonHottestPageNumber">
            </div>
            
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
                { thread.map(item => (
                    <Link to={`/Threads/${ item.userID }`}>
                      { thread.map(item => (
                        <li key={ item.userID }>item.topic</li>
                      )) }
                    </Link>
                  )) }
              </div>
              <div className="firstNewsDateFrameHomePage"> 
                <div className="firstNewsDateHomePage">
                  14/9/2020
                </div>
              </div>
            </div>
          </div>
          <div className="stackNewsPageNumberHomePage">
            <div className="goFirstButtonNewsPageNumber">
            </div>
            <div className="goBackButtonNewsPageNumberHomePage">
            </div>
            <div className="firstPageFrameNewsHomePage">
            </div>
            <div className="secondPageFrameNewsHomePage">
            </div>
            <div className="thirdPageFrameNewsHomePage">
            </div>
            <div className="fouthPageFrameNewsHomePage">
            </div>
            <div className="fifthPageFrameNewsHomePage">
            </div>
            <div className="goNextButtonNewsPageNumberHomePage">
            </div>

            <div className="currentPageNumberButtonNewsHomePage">
            </div>
            <div className="goLastButtonNewsPageNumber">
            </div>
            
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