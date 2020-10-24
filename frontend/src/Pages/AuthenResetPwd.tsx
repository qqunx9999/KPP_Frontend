import React, { useEffect, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import '../CSSsource/AuthenResetPwd.css';
import AuthService from '../service/AuthService';

function AuthenResetPwd() {
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

  function delay() {
    setRedirect(true);
  }

  return (
    <div className="backgroundFinishLoadAuthenResetPwd">
      { login ? history.push('/Home') : null }
      <div className="frameAuthenReset">
        <div className="KUpeopleAuthenReset">
          KU People
        </div>
        <div className="textAuthenReset">
          Password changed!Back to log in...
        </div>
      </div>
      {setInterval(delay, 3000)}
      {time && (<Redirect to="/" />)}
    </div>
  );
}

export default AuthenResetPwd;