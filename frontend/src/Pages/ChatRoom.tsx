import React from 'react';
import { useHistory } from 'react-router';

const temp = {
  "margin": "10px",
};

function ChatRoom() {
  const history = useHistory();

  return(
    <div>
      <div style={ temp }>
        <h1>Chat</h1>
          
        <button onClick={ history.goBack }>Go Back</button>
      </div>
    </div>
  );
}

export default ChatRoom;