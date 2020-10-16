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
import { EmailID } from '../component/loginForm';
import { stringify } from 'querystring';
import 'bootstrap/dist/css/bootstrap.min.css';


const LoginPage = () => {

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
          <button  type="button" className="FrameGoBackLogIn1 btn btn-success">

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