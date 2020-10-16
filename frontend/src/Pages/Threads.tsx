import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/Threads.css';
import { Thread } from '../interfaces/threadEntity';
import threadService from '../service/threadService';

const Threads = () => {
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
     <div className="Threads-bigframe">
       <Link to="/Home" className="thread_goback">
          <button className="thread_goback_button">                        
          &lt; Go back
          </button>
      </Link>

      <div className="thread-givecomment-txt">
        <button className="thread-givecm-button">
          Give comment
        </button>
      </div>
      <div className="thread-tags-frame">
        <div className="threads_tags_tags">
          Tags :
        </div> 
        <div className="thread_minitag1">
          <button className="thread_minitag1_frame">
            { thread.map(item => (
              <div>
              {console.log(item)}
              {item.tag_arr[0]}
              </div>
            )) }
          </button>
        </div>
        <div className="thread_minitag2">
          <button className="thread_minitag2_frame">                        
            Tag2
          </button>
        </div>
        <div className="thread_minitag3">
          <button className="thread_minitag3_frame">                        
            Tag3
          </button>
        </div>
      </div>

      <div className="thread-vote-frame">
        <div className="thread-upvote-no">
          { thread.map(item => {
            return item.up_vote_count
          }) }
        </div>
        <div className="thread-downvote-no">
          { thread.map(item => {
            return item.down_vote_count
          }) }
        </div>
        <div className="thread-comment-no">
          { thread.map(item => {
            return item.number_of_comment
          }) }
        </div>
      </div>
      
      <div>
         <button className="thread-upvote-frame">
          
         </button>
      </div>

      <div>
         <button className="thread-downvote-frame">

         </button>
      </div>

      <div>
         <button className="thread-comment-frame">

         </button>
      </div>

      { thread.map(item => (
        <div>
          <Link to ={`/Threads/${ item.userID }/CreateComment`}>
            <div className="thread-givecomment-txt">
              <button className="thread-givecm-button">
                Give Comment
              </button>
            </div>
          </Link>
        </div>
      )) }
      
      <div className="thread-topic-frame">
        <div className="thread-topicname-frame">
          <div className="thread-topicname">
            Topic : { thread.map(item => {
              return item.topic
            }) }
          </div>
          <div className="thread-topiccreater">
            by topic creater name
          </div>
          <div className="thread-topic-createdate">
            When : xx/yy/zzzz
          </div>
          <div className="thread-topic-lastedit">
            Last edited :
          </div>
          <div className="thread-topic-lastedit-date">
            xx/yy/zzzz aa:bb AM
          </div>
        </div>        
        <div className="thread-topic-detail-frame">
          <div className="thread-topic-detail-text">
            { thread.map(item => {
              if (item.userID === item.userID) 
                return item.content
            }) } <br/>
            { thread.map(item => (
              <img src={ item.image_URL } />
            )) }
          </div>
        </div>
      </div>

      <div className="thread-reply1-whiteframe">
        <div className="thread-reply1-blackframe">
          <div className="thread-topicname-inreply1">
            Topic : Topic Name
          </div>
          <div className="thread-reply1-user">
            #1 by user1 name
          </div>
          <div className="thread-reply1-time">
            When : xx/yy/zzzz
          </div>
          <div className="thread-reply1-lastedit">
            Last edited :
          </div>
          <div className="thread-reply1-lastedit-date">
            xx/yy/zzzz aa:bb AM
          </div>
        </div>
      </div>

      <div className="thread-reply2-whiteframe">
        <div className="thread-reply2-blackframe">
          <div className="thread-topicname-inreply2">
            Topic : Topic Name
          </div>
          <div className="thread-reply2-user">
            #2 by user2 name
          </div>
          <div className="thread-reply2-time">
            When : xx/yy/zzzz
          </div>
          <div className="thread-reply2-lastedit">
            Last edited :
          </div>
          <div className="thread-reply2-lastedit-date">
            xx/yy/zzzz aa:bb AM
          </div>
        </div>
      </div>
    </div>
     
  );
}

export default Threads;