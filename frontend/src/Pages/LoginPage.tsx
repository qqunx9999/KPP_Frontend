import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSsource/LoginPage.css';
import SignUpPage from "./SignUpPage"
import AuthenLogIn from './AuthenLogIn';
import Account from '../interfaces/accountEntity';
import { EmailID } from '../component/loginForm';
import { stringify } from 'querystring';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../service/AuthService';

type LoginFormProps = {
  loginCallBack?: () => void,
};

const LoginPage = (props: LoginFormProps) => {
  // const [redirected, setRedirected] = useState('');

  // // const 

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
          <EmailID />
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
          <Link to="/SignUp">
            <div className="go-to-sign-up">
              Go to Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;