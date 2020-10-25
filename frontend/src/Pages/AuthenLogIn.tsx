import React, { useEffect, useState } from 'react';
import '../CSSsource/AuthenLogIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect, useHistory } from 'react-router';
import AuthService from '../service/AuthService';

function AuthenLogIn() {
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
    <div className="greenBackgroungAuth">
      { login ? history.push('/Home') : null }
      <div className="container-md">
        <div className="frameAuth">
          <div className="KUpeopleAuth">
            KU People
          </div>
          <div className="rotate" />
          <div className=" spinner-border text-success" id="spin" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <div className="textAuth">
            Checking your verification code...
          </div>
        </div>
      </div>
      {setInterval(delay, 3000)}
      {time && (<Redirect to="/Home" />)}
    </div>
  );
}

export default AuthenLogIn;