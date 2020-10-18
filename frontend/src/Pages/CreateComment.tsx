import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/CreateComment.css';
import { Thread } from '../interfaces/threadEntity';
import threadService from '../service/threadService';

const CreateComment = () => {
  const [thread, setThread] = useState<Thread[]>([]);
  const [commentNO, setCommentNO] = useState<string>('');
  const [size, setSize] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleCommentNo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentNO(event.target.value);
  };

  const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(event.target.value);
  };

  const handleNewDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
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
      <div className="createcm-bigframe">
        { thread.map(item => (
          <div>
            <Link to={ `/Threads/${ item.userID }/` }>
              <div className="createcm_goback">
                <button className="createcm_goback_button">
                  &lt; Go back
                </button>
              </div>
            </Link>
          </div>
        )) }
        <div className="createcm_goback">
          <button className="createcm_goback_button">
          &lt; Go back
          </button>
        </div>
        <div className="createcm-whiteframe">          
          <div className="createcm-give-comment">
            Give Comment
          </div>

          <div className="createcm-topicname-frame">
            <div className="createcm-in-topic_">
              In Topic :
            </div>
            <div className="createcm-topic-name">
              { thread.map(item => (
                item.topic
              )) }
            </div>
          </div>

          <div className="createcm-repltyo-frame">
            <div className="createcm-replyto">
                <form>
                    Reply to :
                    <input placeholder=" Comment numbers" style={{ width:"250px" , height:"50px" }} onChange={ handleCommentNo } value={ commentNO } className="createcm_replyto_input"/>                    
                </form>
            </div>
          </div>

          <div className="createcm-leave-empty">
            *if you do not reply just leave it empty
          </div>

          <div className="createcm-cm-frame">
            <div className="createcm-placecm">
              Place your comment :
            </div>
            <div className="createcm-green-frame">
              <div>
                <button className="createcm-bold-frame">

                </button>
              </div>
              <div>
                <button className="createcm-Italic-frame">

                </button>
              </div>
              <div className="createcm-fonts">
                <button className="createcm-fonts-frame">
                  Fonts
                </button>
              </div>
              <div className="createcm-size-frame">
                <div className="createcm-size">
                  <form>
                    Size
                    <input placeholder="" style={{ width:"75px" , height:"50px" }} onChange={ handleSize } value={ size } className="createcm_size_input"/>                    
                  </form>
                </div>
              </div>

              <div>
                <button className="createcm-Clipboard-frame">

                </button>
              </div>

              <div>
                <button className="createcm-Upload-frame">

                </button>
              </div>

              <div>
                <button className="createcm-Link-frame">

                </button>
              </div>

              <div>
                <button className="createcm-Image-frame">

                </button>
              </div>

              <div>
                <button className="createcm-Barchart-frame">

                </button>
              </div>

              <div className="createcm-send">
                <button className="createcm-send-frame">
                  Send
                </button>
              </div>
            </div>

            <form>                    
              <input placeholder="" style={{ width:"1140px" , height:"250px" }} onChange={ handleNewDescription } value={ description } className="createcm_cm_input"/>                    
            </form>
          </div>

        </div>
      </div>
  );
}

export default CreateComment;