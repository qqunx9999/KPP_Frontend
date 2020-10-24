import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AuthService from '../service/AuthService';

const temp = {
  "margin": "10px",
};

function ChatRoom() {
  const history = useHistory();
  const [login, setLogin] = useState<boolean>(false);

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  return(
    <div>
      { login ? null : history.push('/') }
      <div style={ temp }>
        <h1>Chat</h1>
          
        <button onClick={ history.goBack }>Go Back</button>
      </div>
    </div>
  );
}

export default ChatRoom;