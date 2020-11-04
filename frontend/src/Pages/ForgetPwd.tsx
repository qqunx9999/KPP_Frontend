import React, { useEffect, useState } from 'react';
import '../CSSsource/ForgetPwd.css';
import { Forgetpass } from '../component/ForgetpwdForm';
import { useHistory } from 'react-router';
import AuthService from '../service/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';

function ForgetPwd() {
  const [login, setLogin] = useState<boolean>(false);
  const history = useHistory();

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  return (
    <div className="forgetpwd-frame">
      { login ? history.push('/Home') : null}
      <div className="forgetpwd-whiteframe">
        <div className="forgetpwd-k-u-people">
          KU People
        </div>
        <div className="password-reset">
          Password reset
        </div>
        <div className="verification">
          verification code will send to you.It expired after 10 minutes.
        </div>
        <Forgetpass />
      </div>
    </div>
  );
}

export default ForgetPwd;