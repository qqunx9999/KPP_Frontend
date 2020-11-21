import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/Home.css';
import Navigtion from '../component/NavBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Test extends React.Component {
  state = {
    latest: {
      threads: [],
      pageInfo: {
        pageNo: 1,
        pagesize: 8,
        total: 0
      }
    },
    hottest: {
      threads: [],
      pageInfo: {
        pageNo: 1,
        pagesize: 8,
        total: 0
      }
    },
    news: {
      threads: [],
      pageInfo: {
        pageNo: 1,
        pagesize: 8,
        total: 0
      }
    }
  }

  fetchLatestPages = async (pageNumber: any) => {
    let response = await fetch(`http://localhost:3000/threads/filter/%20/Latest/8/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'applecation/json',
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    this.setState({
      latest: {
        threads: data[0].threads,
        pageInfo: {
          pageNo: data[0].pageInfo.pageNo,
          pagesize: data[0].pageInfo.pagesize,
          total: data[0].pageInfo.total
        }
      }
    });
  }

  fetchHottestPages = async (pageNumber: any) => {
    let response = await fetch(`http://localhost:3000/threads/filter/%20/Hottest/8/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'applecation/json',
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    this.setState({
      hottest: {
        threads: data[0].threads,
        pageInfo: {
          pageNo: data[0].pageInfo.pageNo,
          pagesize: data[0].pageInfo.pagesize,
          total: data[0].pageInfo.total
        }
      }
    });
  }

  fetchNewsPages = async (pageNumber: any) => {
    let response = await fetch(`http://localhost:3000/threads/filter/%20/Newest/8/${pageNumber}`, {
      method: 'GET',
      headers: {
        'Accept': 'applecation/json',
        'Content-Type': 'application/json'
      },
    });

    const data = await response.json();

    this.setState({
      news: {
        threads: data[0].threads,
        pageInfo: {
          pageNo: data[0].pageInfo.pageNo,
          pagesize: data[0].pageInfo.pagesize,
          total: data[0].pageInfo.total
        }
      }
    });
  }

  componentDidMount() {
    this.fetchLatestPages(1);
    this.fetchHottestPages(1);
    this.fetchNewsPages(1)
  }

  render() {
    // console.dir(this.state.hottest.threads);
    let latestThreads: any, hottestThreads: any, newsThreads: any;
    const time = new Date();

    function dateCount(timeString: string) {
      const day = new Date(timeString);
      const postTime = day.getTime();
      const currentTime = time.getTime();
      const convertToDay = 1000 * 3600 * 24;
      const diffTime = Math.ceil((currentTime - postTime) / convertToDay);
      return Math.abs(diffTime);
    }

    function dateDetail(timeString: string) {
      const fullDate = new Date(timeString);
      const date = fullDate.getDay();
      const month = fullDate.getMonth();
      const year = fullDate.getFullYear();
      return String(date) + "/" + String(month) + "/" + String(year);
    }

    if (this.state.latest.threads !== []) {
      latestThreads = this.state.latest.threads.map((thread: any) => (
        <div>
          <Link to={`/Thread/${thread.threadID}`}>
            <ul>
              <li key={thread.threadID} id="reactgivemeafuck">
                <p className="topicLatest4" id="blog">{thread.topic}</p>
                <div className="alphar" />
                <p className="dateLatest">  {dateCount(thread.date_create)} {dateCount(thread.date_create) ? ("Days") : ("Day")} </p>
                <img className="clockWise" src="https://image.flaticon.com/icons/png/512/3/3811.png" alt="" />
              </li>
            </ul>
          </Link>
        </div>
      ));
    };

    if (this.state.hottest.threads !== []) {
      hottestThreads = this.state.hottest.threads.map((thread: any) => (
        <div>
          <Link to={`/Thread/${thread.threadID}`}>
            <ul>
              <li key={thread.threadID} id="blog">
                <p className="topicLatest" id="blog">{thread.topic}</p>
                <div className="LDC">
                  <img className="likePic" src="https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-button-png-11.png" alt="" />
                  <p className="likeHottest">{thread.up_vote_count}</p>
                  <div className="dP">
                    <img className="dislikePic" src="https://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="" /></div>
                  <p className="dislikeHottest">  {thread.down_vote_count}</p>
                  <img className="commentPic" src="https://image.flaticon.com/icons/png/512/25/25663.png" alt="" />
                  <p className="commentHottest">{thread.total_comment}</p>
                </div>
              </li>
            </ul>
          </Link>
        </div>
      ));
    };

    if (this.state.news.threads !== []) {
      newsThreads = this.state.news.threads.map((thread: any) => (
        <div>
          <Link to={`/Thread/${thread.threadID}`}>
            <ul>
              <li key={thread.threadID} id="ablog">
                <p>
                  <div className="alphar" />
                  <div >{thread.topic}</div>
                  <div className="llk">{dateDetail(thread.date_create)}</div>
                </p>
              </li>
            </ul>
          </Link>
        </div>
      ));
    };

    let latestPages = [], hottestPages = [], newestPages = [];
    for (let i = 1; i <= Number(this.state.latest.pageInfo.total); i++) {
      latestPages.push(i);
    }
    for (let i = 1; i <= Number(this.state.hottest.pageInfo.total); i++) {
      hottestPages.push(i);
    }
    for (let i = 1; i <= Number(this.state.news.pageInfo.total); i++) {
      newestPages.push(i);
    }

    const renderLatestPageNumber = latestPages.map((page: any) => {
      if (page == 1 || page == this.state.latest.pageInfo.total || (page >= this.state.latest.pageInfo.pageNo - 2 && page <= this.state.latest.pageInfo.pageNo + 2)) {
        return (
          <div aria-label="Page navigation">
            <div className="pagination">
              <div className="page-item" onClick={() => this.fetchLatestPages(page)}>
                <div className="page-link">{page}</div>
              </div>
            </div>
          </div>
        );
      };
    })

    const renderHottestPageNumber = hottestPages.map((page: any) => {
      if (page == 1 || page == this.state.hottest.pageInfo.total || (page >= this.state.hottest.pageInfo.pageNo - 2 && page <= this.state.hottest.pageInfo.pageNo + 2)) {
        return (
          <div aria-label="Page navigation">
            <div className="pagination">
              <div className="page-item" onClick={() => this.fetchHottestPages(page)}>
                <div className="page-link">{page}</div>
              </div>
            </div>
          </div>
        );
      };
    })

    const renderNewestPageNumber = newestPages.map((page: any) => {
      if (page == 1 || page == this.state.news.pageInfo.total || (page >= this.state.news.pageInfo.pageNo - 2 && page <= this.state.news.pageInfo.pageNo + 2)) {
        return (
          <div aria-label="Page navigation">
            <div className="pagination">
              <div className="page-item" onClick={() => this.fetchNewsPages(page)}>
                <div className="page-link">{page}</div>
              </div>
            </div>
          </div>
        );
      };
    })

    return (
      <div>
        <Navigtion />
        <div className="backgroundHomePage">
          <div className="latestWhiteFrameHomePage">
            <div className="latestGreenFrameHomePage">
              <div className="stackLatestHomePage2">
                {latestThreads}
              </div>
              {renderLatestPageNumber}
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
                {hottestThreads}
              </div>
              {renderHottestPageNumber}
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
                {newsThreads}
              </div>
              {renderNewestPageNumber}
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
}