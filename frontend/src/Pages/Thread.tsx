import React, { useState, useEffect, useMemo } from 'react';
import '../CSSsource/Threads.css';
import ThreadService from '../service/ThreadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';

function Threads_new() {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<any>({ thread: { tag_arr: [] }, userInfo: {} });
  const [comment, setComment] = useState<any>({ comments: [{ comment: {}, userInfo: {} }], commentsExist: [] });
  const history = useHistory();

  const fetchThread = () => {
    ThreadService.fetchOneThread({ ThreadID }.ThreadID)
      .then(obj => {
        setThread(obj);
      });
    ThreadService.fetchComment({ ThreadID }.ThreadID)
      .then(obj => {
        setComment(obj);
      })
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
        <div className="thread-topic-frame mx-auto ml-1">
          <div className="thread-topicname-frame">
            <div className="thread-topicname">
              Topic : &nbsp;
                {thread.thread.topic}
            </div>
            <div className="thread-topiccreater">
              by : &nbsp;
                {thread.userInfo.name}
            </div>
            <div className="thread-topic-createdate">
              When : &nbsp;
                {toDate(thread.thread.date_create)}
            </div>
            <div className="thread-topic-lastedit">
              Last edit : &nbsp;
            </div>
            <div className="thread-topic-detail-frame">
              <div className="thread-topic-detail-text">
                {thread.thread.content}
              </div>
            </div>
          </div>
        </div>

        <div className="thread-tags-frame">
          <div className="threads_tags_tags">Tags :</div>
          <div className="tagAlphar">
            <div className = "tagText">
            {thread.thread.tag_arr}
            </div>
          </div>
          
        </div>

        <button className="sthread_goback_button btn btn-success ml-1 mx-auto" onClick={history.goBack}> Go Back</button>
        <Link to={`/CreateComment/${{ ThreadID }.ThreadID}`}><button className="thread-givecm-button">
          <div className="comment-button-icon">
          </div>
          Give Comment
          </button>
        </Link>
        <Link to={`/CreateReport/${{ ThreadID }.ThreadID}`}><button className="thread-report-frame"><div className="report-button-icon">
        </div></button></Link>
        <div className="like-dislike-comment-displayframe">
          <div className="like-display-icon"></div>
          <div className="dislike-display-icon"></div>
          <div className="comment-display-icon"></div>
          <div className="thread-upvote-no">{thread.thread.up_vote_count}</div>
          <div className="thread-downvote-no">{thread.thread.down_vote_count}</div>
          <div className="thread-comment-no">{thread.thread.number_of_all_comment}</div>
        </div>
        <button className="thread-upvote-frame" onClick={voteUp}>
          <div className="like-button-icon"></div>
        </button>
        <button className="thread-downvote-frame" onClick={voteDown}>
          <div className="dislike-button-icon"></div>
        </button>
        <br />{console.dir(comment.comments[0])}

        {comment.comments.map((item: any) => (
          <ul>
            <li key={item.userInfo.userID}></li>
            <div className="keep" id={item === comment[0] ? "onE" : undefined}>
              <div className="frameGreenComment">
                <div className="frameBlackComment">
                  <div className="textTopicComment">
                    Topic : &nbsp; {thread.thread.topic} <br />
                  </div>
                  <div className="numberOfCommentTopicComment">
                    by : &nbsp; {item.userInfo.name} <br />
                  </div>
                  <div>
                    
                     { item.comment.reply_to === 0 ? null : <div className="textReplyToTopicComment">Reply to : &nbsp; {item.comment.reply_to}</div> }

                  </div>
                  <div className="textWhenTopicComment">
                    When : &nbsp; {toDate(item.comment.date_create)} <br />
                  </div>
                  <div className="textLastEditedTopicComment">
                    LastEdited :
                    { item.comment.date_lastedit === null ? <p>--</p> : item.comment.date_last_edit }
                    </div>
                </div>
                <div className="textDetailTopicComment">
                  Content : &nbsp; {item.comment.content}
                </div>
              </div>
            </div>
          </ul>
        ))}
        <div>

        </div>
      </div>
    </div>
  );
}

export default Threads_new;
