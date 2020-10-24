import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  useHistory
} from "react-router-dom";
import '../CSSsource/AuthenSignup.css';
import logo from '../Pages/image/nong_plub.png'
import AuthService from '../service/AuthService';

function AuthenSignup() {
  const [time, setRedirect] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const history = useHistory();

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  const delay = () => {
    setRedirect(true);
  };

  return (
    <div>
      { login ? history.push('/Home') : null}
      <Router>
        <div className="AuthenSU-outer-frame">
          <div className="AuthenSU-whiteframe">
            <div className="AuthenSU-k-u-people">
              KU People
            </div>
            <div className="rotate">
              <img src={logo} alt="React is stupid" />
            </div>
            <div className="AuthenSU-in_progess">
              Signing up in progess...
            </div>
          </div>
        </div>
      </Router>
      {setInterval(delay, 3000)}
      {time && (<Redirect to="/" />)}
    </div>

  );
}

export default AuthenSignup;