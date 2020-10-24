import React from 'react';
import { Link } from "react-router-dom";
import '../CSSsource/ChatRoom.css';
import { useHistory } from 'react-router';
import AuthService from '../service/AuthService';

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
            <h1>Chat</h1>
            <div className="buttonGobackChatRoom"> 
              <button onClick={ history.goBack }>Go Back</button>
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