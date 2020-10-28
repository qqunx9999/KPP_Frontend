import React, { useState, useEffect } from 'react';
import '../CSSsource/Threads.css';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';
import { baseUrl } from '../config/constant';
import { constants } from 'os';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function Threads_new(props: LoginFormProps) {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<Thread[]>([]);
  const [comment, setComment] = useState<any[]>([]);
  const history = useHistory();

  const fetchThread = () => {
    ThreadService.fetchNewThread()
      .then(obj => {
        setThread(obj);
      });
  };

  const fetchComment = () => {
    fetch(`${ baseUrl }/threads/${ ThreadID }/comments/8/1`)
      .then(res => res.json())
      .then(obj => setComment([obj]));
  };

  useEffect(() => {
    fetchThread();
    fetchComment();
  }, []);

  const temp = {
    "color": "white",
  };

  const voteUp = () => {
    // thread.map(item => {
    //   const threadIdentity = item.threadID
    //   return ThreadService.voteUp(threadIdentity)
    // });
    { window.location.reload() }
  };

  const voteDown = () => {
    // thread.map(item => {
    //   const threadIdentity = item.threadID
    //   return ThreadService.voteDown(threadIdentity)
    // });
    { window.location.reload() }
  }

  return (
    <div>
      {/* <Navigtion />
      <div className="Threads-bigframe">
        <div className="thread-topic-frame">
          <div className="thread-topicname-frame">
            <div className="thread-topicname">
              Topic : &nbsp;
                {thread.map(item => {
              if (item.threadID === { ThreadID }.ThreadID) {
                return item.topic;
              }
            })}
            </div>
            <div className="thread-topiccreater">
              by : &nbsp;
                {thread.map(item => {
              if (item.threadID === { ThreadID }.ThreadID) {
                return item.userID;
              }
            })}
            </div>
            <div className="thread-topic-detail-frame">
              <div className="thread-topic-detail-text">
                {thread.map(item => {
                  if (item.threadID === { ThreadID }.ThreadID) {
                    return (
                      <div>
                        {item.content}
                      </div>
                    );                    
                  }
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="thread-tags-frame">
          <div className="threads_tags_tags">Tags :</div>
          {thread.map(item => {
            if (item.threadID === { ThreadID }.ThreadID) {
              return item.tag_arr.map(tag => (<li>{tag}</li>));
            }
          })}
        </div>

        <button className="thread_goback_button" onClick={history.goBack}>&lt; Go Back</button>
        <Link to={`/CreateComment/${{ ThreadID }.ThreadID}`}><button className="thread-givecm-button">Give Comment</button></Link>
        <Link to={`/CreateReport/${{ ThreadID }.ThreadID}`}><button className="thread-report-frame">Report</button></Link>

        { thread.map(item => {
          if(item.threadID === { ThreadID }.ThreadID) {
          return <div style={ temp }>{ item.up_vote_count }</div>
          }
        }) }

        <button className="thread-upvote-frame" onClick={ voteUp }>Like</button>

        { thread.map(item => {
          if(item.threadID === { ThreadID }.ThreadID) {
          return <div style={ temp }>{ item.down_vote_count }</div>
          }
        }) }
        
        <button className="thread-downvote-frame" onClick={ voteDown }>Dislike</button>

        { thread.map(item => {
          if(item.threadID === { ThreadID }.ThreadID) {
          return <div style={ temp }>{ item.number_of_all_comment }</div>
          }
        }) } */}

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
      {/* </div> */}
    </div>
  );
}

export default Threads_new;