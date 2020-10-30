import React, { useState, useEffect, useMemo } from 'react';
import '../CSSsource/Threads.css';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';
import { baseUrl } from '../config/constant';

function Threads_new() {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<any>({thread:{}, userInfo:{}});
  const history = useHistory();

  const fetchThread = () => {
    ThreadService.fetchOneThread({ ThreadID }.ThreadID)
      .then(obj => {
        setThread(obj);
      });
  };

  useEffect(() => {
    fetchThread();
  }, []);

  const voteUp = () => {
    const threadIdentity = thread.thread.threadID;
    return ThreadService.voteUp(threadIdentity)
  };

  const voteDown = () => {
    const threadIdentity = thread.thread.threadID;
    return ThreadService.voteDown(threadIdentity)
  };console.log(thread.thread.threadID)

  return (
    <div>
      <Navigtion />
      <div className="Threads-bigframe">
        <div className="thread-topic-frame">
          <div className="thread-topicname-frame">
            <div className="thread-topicname">
              Topic : &nbsp;
                { thread.thread.topic }
            </div>
            <div className="thread-topiccreater">
              by : &nbsp;
                { thread.userInfo.name }
            </div>
            <div className="thread-topic-detail-frame">
              <div className="thread-topic-detail-text">
                { thread.thread.content }
              </div>
            </div>
          </div>
        </div>

        <div className="thread-tags-frame">
          <div className="threads_tags_tags">Tags :</div>
          { thread.thread.tagg_arr }
        </div>

        <button className="thread_goback_button" onClick={history.goBack}>&lt; Go Back</button>
        <Link to={`/CreateComment/${{ ThreadID }.ThreadID}`}><button className="thread-givecm-button">Give Comment</button></Link>
        <Link to={`/CreateReport/${{ ThreadID }.ThreadID}`}><button className="thread-report-frame">Report</button></Link>

        { thread.thread.up_vote_count }

        <button className="thread-upvote-frame" onClick={ voteUp }>Like</button>

        { thread.thread.down_vote_count }
        
        <button className="thread-downvote-frame" onClick={ voteDown }>Dislike</button>

        { thread.thread.number_of_all_comment }

        {// thread.map(item => {
        //   if(item.threadID === { ThreadID }.ThreadID) {
        //     return(
        //       <div className="thread-reply1-whiteframe">
        //         <div className="thread-reply1-blackframe">
        //           <div className="thread-topicname-inreply1"> Topic : { item.topic } </div>
        //           <div className="thread-reply1-time"> When : { item.date_create } </div>
        //           <div className="thread-reply1-lastedit"> Last edit : { item.date_lastedit } </ div>
        //         </div>
        //         {/* { console.log(comment.map(obj => obj.comments[0].comment)) } */}
        //         {/* { comment.map(res => {
        //           if(res.comments[0].comment.content !== undefined) {
        //             return res.comments[0].comment.content
        //           }
        //         }) } */}
        //       </div>
        //     );
        //   }
        // }) 
      }
      </div>
    </div>
  );
}

export default Threads_new;