import React, { useState, useEffect, useMemo } from 'react';
import '../CSSsource/Threads.css';
import ThreadService from '../service/ThreadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';

function Threads_new() {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<any>({thread:{}, userInfo:{}});
  const [comment, setComment] = useState<any[]>([{comment:{}, userInfo:{}}]);
  const history = useHistory();

  const fetchThread = () => {
    ThreadService.fetchOneThread({ ThreadID }.ThreadID)
      .then(obj => {
        setThread(obj);
      });
  };

  const fetchComment = () => {
    ThreadService.fetchComment({ ThreadID }.ThreadID)
      .then(obj => {
        setComment(obj);
      })
  };

  useEffect(() => {
    fetchThread();
    fetchComment();
  }, []);

  const voteUp = () => {
    const threadIdentity = thread.thread.threadID;
    return ThreadService.voteUp(threadIdentity)
  };

  const voteDown = () => {
    const threadIdentity = thread.thread.threadID;
    return ThreadService.voteDown(threadIdentity)
  };

  function toDate(timeString: string) {
    const day = new Date(timeString);
    const date = String(day.getDate());
    const month = String(day.getMonth());
    const year = String(day.getFullYear());
    const time = date + '/' + month + '/' + year;
    return time;
  }

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
            <div>
              When : &nbsp;
                { toDate(thread.thread.date_create) }
            </div>
            <div>
              Last edit : &nbsp;
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

        { thread.thread.up_vote_count } <button className="thread-upvote-frame" onClick={ voteUp }>Like</button>
        { thread.thread.down_vote_count } <button className="thread-downvote-frame" onClick={ voteDown }>Dislike</button>
        { thread.thread.number_of_all_comment } <br />

        { comment.map((item: any) => (
          <ul>
            <li key={ item.userInfo.userID }>
              Topic : &nbsp; { thread.thread.topic } <br />
              by : &nbsp; { item.userInfo.name } <br />
              When : &nbsp; { toDate(item.comment.date_create) }
            </li>
          </ul>
        )) }
      </div>
    </div>
  );
}

export default Threads_new;