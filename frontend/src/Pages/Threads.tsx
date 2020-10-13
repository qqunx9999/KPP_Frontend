import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/Threads.css';

const Threads = () => {
  

  return (
     <div className="Threads-bigframe">
       <div className="thread_goback">
          <button className="thread_goback_button">                        
          &lt; Go back
          </button>
      </div>

      <div className="thread-tags-frame">
        <div className="threads_tags_tags">
          Tags :
        </div> 
        <div className="thread_minitag1">
          <button className="thread_minitag1_frame">                        
            Tag1
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
          99
        </div>
        <div className="thread-downvote-no">
          99
        </div>
        <div className="thread-comment-no">
          99
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

      <div className="thread-givecomment-txt">
         <button className="thread-givecm-button">
          Give Comment
         </button>
      </div>
      
      <div className="thread-topic-frame">
        <div className="thread-topicname-frame">
          <div className="thread-topicname">
            Topic : Topic Name
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