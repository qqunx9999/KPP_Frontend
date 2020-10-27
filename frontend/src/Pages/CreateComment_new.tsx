import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';
import Navigtion from '../component/NavBar';
import CommentForm from '../component/CommentForm';
import '../CSSsource/CreateComment.css';

function CreateComment_new() {
  const [thread, setThread] = useState<Thread[]>([]);
  const history = useHistory();
  const { ThreadID } = useParams();

  const fetchThread = () => {
    ThreadService.fetchThread()
      .then(obj => {
        setThread(obj);
      });
  };

  useEffect(() => {
    fetchThread();
  }, []);

  return (
    <div>
      <Navigtion />
        <div className="createcm-bigframe">        
        <button className="createcm_goback_button" onClick={ history.goBack }>&lt; Go Back</button> <br />
        <div className="createcm-whiteframe">
          <div className="createcm-give-comment">
            Give Comment
          </div>
          <div className="createcm-topicname-frame">
            <div className="createcm-in-topic_">
              In Topic :
            </div>
            <div className="createcm-topic-name">              
              { thread.map(item => {
                return <div />
                // if (item.threadID === { ThreadID }.ThreadID) {
                //   return " " + item.topic
                // }
              }) }
            </div>
          </div>
          <CommentForm />
        </div>
      </div>
    </div>
  );
}

export default CreateComment_new;