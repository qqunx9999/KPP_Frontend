import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { Link } from "react-router-dom";
import '../CSSsource/CreateComment.css';
import { Thread } from '../interfaces/threadEntity';
import threadService from '../service/threadService';
import Navigtion from '../component/navBar';

const CreateComment_new = ({ ThreadID }) => {
  const [thread, setThread] = useState<Thread[]>([]);
  const history = useHistory();
  console.log({ThreadID});

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
    <div>
      hello
      <button onClick={ history.goBack }>Go Back</button>
    </div>
  );
}

export default CreateComment_new;