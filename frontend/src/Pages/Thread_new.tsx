import React, { useState, useEffect } from 'react';
import '../CSSsource/Threads.css';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';
import { baseUrl } from '../config/constant';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function Threads_new(props: LoginFormProps) {
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<Thread[]>([]);
  const [comment, setComment] = useState('');
  const history = useHistory();

  const fetchThread = () => {
    ThreadService.fetchThread()
      .then(obj => {
        setThread(obj);
      });
  };

  const fetchComment = () => {
    const fetchOption = {

    };
    fetch(`${ baseUrl }/threads/${ ThreadID }/comments/8/1`)
      .then(res => res.json())
      .then(obj => setComment(obj));
  };

  useEffect(() => {
    fetchThread();
    fetchComment();
  }, []);

  return (
    <div>
      <Navigtion />
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
        <button className="thread-upvote-frame">Like</button>
        <button className="thread-downvote-frame">Dislike</button>

        { thread.map(item => {
          if(item.threadID === { ThreadID }.ThreadID) {
            return(
              <div>
                Topic : { item.topic } <br />
                When : { item.date_create } <br />
                Last edit : { item.date_last_edit } <br />
                { console.log(comment) }
              </div>
            );
          }
        }) }
      </div>
    </div>
  );
}

export default Threads_new;