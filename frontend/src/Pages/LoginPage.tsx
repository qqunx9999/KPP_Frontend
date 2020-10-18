import React, { useState } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSsource/LoginPage.css';
import { EmailID } from '../component/loginForm';
import AuthService from '../service/AuthService';

const LoginPage = () => {
  const [user, setUser] = useState<any>('');

  const handleUserLogin = () => {
    setUser(AuthService.getUserInfo());
  }

  return (
    <div className="LogInPage1">
      <div className="container-md">
        <div className="CenterFrameLogin1">

          <div className="KUPeopleLogin1">
            KU People
          </div>
          <p className="TextPleaseLogIn1">
            Please sign up or log in before use.
          </p>
          <EmailID loginCallBack={ handleUserLogin }/>
          <div className="TextForgetLogIn1">
            Forget your password?
          </div>
          <a className="ClickHereLogIn1" href="/ForgetPwd">
            click here!
          </a>
          <Link to="/" >
            <button type="button" className="FrameGoBackLogIn1 btn btn-success">

              <div className="GoBackButtonLogIn1">
                &lt; Go Back
            </div>
            </button>
          </Link>
          <div className="TextDontLogIn1">
            Don't have an account?
          </div>
          <a className="GoToSignUpLogIn1" href="/Signup">
            Go to Sign Up
          </a>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;