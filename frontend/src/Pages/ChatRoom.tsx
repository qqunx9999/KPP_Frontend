import React, { useEffect, useState } from 'react';
import '../CSSsource/ChatRoom.css';
import { useHistory } from 'react-router';
import ChatService from '../service/ChatService';

function ChatRoom() {
  const history = useHistory();
  const [message, setMessage] = useState<any>('');

  function fetchMessage() {
    ChatService.fetchMessage()
      .then(obj => {
        setMessage(obj);
      })
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  return(
    <div>
      <div className="backgroundChatRoom">
        {/* <div className="frameContractChatRoom">
          <div className="textContractChatRoom">
            Contract
          </div>
        </div>
        <div className="frameChattingNameChatRoom">
          <div className="picChattingNameChatRoom">

          </div>
          <div className="textChattingNameChatRoom">
            Name Here
          </div>
        </div>
        <div className="frameNameListChatRoom">
            <h1>Chat</h1>
            <div className="buttonGobackChatRoom"> 
              <button onClick={ history.goBack }>Go Back</button>
            </div>
        </div>
        <div className="frameChatAndInputChatRoom">
          <div className="frameChatOutputChatRoom">

          </div>
        </div> */}
        <label>
          <input type="text" />
          <button type="submit">Send</button>
        </label>
      </div>
    </div>
  );
}

export default ChatRoom;