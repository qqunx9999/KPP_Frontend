import React from 'react';
import { Link } from "react-router-dom";
import '../CSSsource/ChatRoom.css';
import { useHistory } from 'react-router';

function ChatRoom() {
  const history = useHistory();

const temp = {
  "margin": "10px",
};


  return(
    <div>
      <div className="backgroundChatRoom">
        <div className="frameContractChatRoom">
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
          <div style={ temp }>
            <h1>Chat</h1>
            <div className="buttonGobackChatRoom"> 
              <button onClick={ history.goBack }>Go Back</button>
            </div>
          </div>
        </div>
        <div className="frameChatAndInputChatRoom">
          <div className="frameChatOutputChatRoom">

          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ChatRoom;