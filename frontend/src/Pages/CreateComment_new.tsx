import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Thread } from '../interfaces/threadEntity';
import threadService from '../service/threadService';
import Navigtion from '../component/NavBar';
import CommentForm from '../component/CommentForm';

const CreateComment_new = () => {
  const [thread, setThread] = useState<Thread[]>([]);
  const history = useHistory();
  const { ThreadID } = useParams();

  const temp = {
    "margin": "10px"
  };

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
    <div style={ temp }>
      <h1>Give Comment</h1>
      <button onClick={ history.goBack }>Go Back</button> <br />
      Topic : 
      { thread.map(item => {
        if (item.threadID === { ThreadID }.ThreadID) {
          return " " + item.topic
        }
      }) }
      <CommentForm />
    </div>
  );
}

export default CreateComment_new;