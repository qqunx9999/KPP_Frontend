import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import '../CSSsource/SearchThread.css';
import ThreadService from '../service/ThreadService';
import SearchThreadForm from '../component/SearchThreadForm';
import { Link } from 'react-router-dom';
import { baseUrl } from '../config/constant';


const SearchThread = () => {
  const history = useHistory();
  const [pageInfo, setPageInfo] = useState<any>([]);
  const [threads, setThreads] = useState<any>([{}]);
  const [page, setPage] = useState<number>(1);

  function QueryThread() {
    if (localStorage.finish === 'yes') {
      let tags = "";
      if (localStorage.tags === "") {
        if (localStorage.faculty === "") {
          tags = '%20';
        } else {
          tags = localStorage.faculty;
        };
      } else {
        if (localStorage.faculty === "") {
          tags = localStorage.tags;
        } else {
          tags = localStorage.tags + ',' + localStorage.faculty;
        };
      };
      const keyword = localStorage.keyword;
      const sort = localStorage.sort;
      ThreadService.searchThread(keyword, tags, sort, 5, page)
        .then(res => {
          setPageInfo(res.pageInfo);
          setThreads(res.threads);
        });
    };
  }

  function changePage(page: number) {
    setPage(page);
  }

  useEffect(() => {
    QueryThread();
    changePage(page);
  }, [page]);

  // console.dir(pageInfo);

  let pages: any = [];
  for (let i = 1; i <= pageInfo.total; i++) {
    pages.push(i);
  }
  
  const RenderPages = () => {
    return (
      <div>
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-end">
            {pages.map((page: number) => (
              <li key={page} className="page-item" onClick={() => changePage(page)}>
                <div className="page-link">{page}</div>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );
  }

  return (
    <div>
      <Navigtion />
      <div className="backgroundSearchThread">
        
        <button className="btn btn-success sThread_goback_buttonn" onClick={history.goBack}> Go Back</button>
        <SearchThreadForm />
      </div>      
      <div className="search-searchresult">
        <RenderPages />
        {threads.map((item: any) => {
          if (item.topic !== undefined) {
            return (
              <div> 
                <Link to={`/Thread/${item.threadID}`}>
                  <ul> 
                    <div className ="lineSpacing">
                    <p className="search-topicLatest">{item.topic}</p>    
                    <div id="likeVoteComment" className="dunno"> 
                    <div className="LDC2">
                  <img className="likePic" src="https://www.freeiconspng.com/thumbs/youtube-like-png/youtube-like-button-png-11.png" alt="" />
                  <p className="likeHottest">{item.up_vote_count}</p>
                  <div className="dP">
                    <img className="dislikePic" src="https://pngimg.com/uploads/dislike/dislike_PNG63.png" alt="" /></div>
                  <p className="dislikeHottest">{item.down_vote_count}</p>
                  <img className="commentPic" src="https://image.flaticon.com/icons/png/512/25/25663.png" alt="" />
                  <p className="commentHottest">{item.total_comment}</p>
                    </div>
                    </div>
                    </div>
                    
                  </ul>
                </Link>
              </div>
            );
          }
        })}
      </div>
     
    </div>
  );
};

export default SearchThread;


          
            
{/* <div>
<Link to={`/Thread/${thread.threadID}`}>
  <ul>
    <li key={thread.threadID} id="blog9">
      <p className="topicLatest" id="blog9">{thread.topic}</p>
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
</div> */}