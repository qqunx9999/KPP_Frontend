import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginPage.css';
import SignUpPage from "./SignUpPage"
import AuthenLogIn from './AuthenLogIn';
import Account from '../interfaces/accountEntity';
import { EmailID, PassID } from '../component/loginForm';

const LoginPage = () => {
  const [login, setLogin] = useState<Account[]>([]);

  const handleFetch = () => {
    const newFetch = {

    };

    fetch('', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newFetch),
    });
  };

  return (
    <div className="LogInPage1">
      <div className="container">
      <div className="CenterFrameLogin1">
        
          <div className="KUPeopleLogin1">
                  KU People
          </div>
          <p className="TextPleaseLogIn1">
                  Please sign up or log in before use.
          </p>
          <div className="EmailLogIn1">
            <EmailID />
              
          </div>
          <div className="PasswordLogIn1">
            <PassID />
          </div>
          <div className="TextForgetLogIn1">
                  Forget your password?
          </div>
          <a className="ClickHereLogIn1" href="/ForgetPwd">
                  click here!
          </a>
          <Link to="/" className="FrameGoBackLogIn1" >
            <div className="GoBackButtonLogIn1">
              &lt; Go Back
            </div>
          </Link>
          <div className="TextDontLogIn1">
                  Don't have an account?
          </div>
          <a className="GoToSignUpLogIn1" href="/Signup">
                  Go to Sign Up
          </a>
          <Link to="/LogIn/AuthenLogIn">
            <div onClick={ handleFetch } className="FrameLogIn1">
              <div className="LogInButtonLogIn1">
                    Log In
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;