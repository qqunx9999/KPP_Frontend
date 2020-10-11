import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/LoginPage.css';
import SignUpPage from "./SignUpPage"
import AuthenLogIn from './AuthenLogIn';

const LoginPage = () => {
  return (
    <div className="log-in-page-1">
      <div className="center-frame-login">
        <div className="k-u-people">
                KU People
        </div>
        <p className="text_Please">
                Please sign up or log in before use.
        </p>
        <div className="email_">
            <form>
              Email :
              <input placeholder="Type your Email..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="Input_email"/>
              <div className="_ku-th">
                @ku.th
              </div>
            </form>
        </div>
        <div className="password_">
            <form>
              Password :
              <input placeholder="Type your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="Input_password"/>
            </form>
        </div>
        <div className="text_Forget">
                Forget your password?
        </div>
        <a className="click-here_" href="/ForgetPwd">
                click here!
        </a>
        <Link to="/" className="frame_go-back" >
          <div className="_go-back">
            Go Back
          </div>
        </Link>
        <div className="text_Dont">
                Don't have an account?
        </div>
        <a className="go-to-sign-up" href="/Signup">
                Go to Sign Up
        </a>
        <Link to="/LogIn/AuthenLogIn">
          <div className="frame_log-in">
            <div className="log-in">
                  Log In
            </div>
          </div>
        </Link>
      </div>
    </div>

  );
}

export default LoginPage;