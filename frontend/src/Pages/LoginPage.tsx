import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/LoginPage.css';


const LoginPage = () => {
  

  return (
    <Router>
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
          <div className="click-here_">
                  click here!
          </div>
          <div className="frame_go-back">
            <div className="_go-back">
                  Go Back
            </div>
          </div>
          <div className="text_Dont">
                  Don't have an account?
          </div>
          <div className="go-to-sign-up">
                  Go to Sign Up
          </div>
          <div className="frame_log-in">
            <div className="log-in">
                  Log In
            </div>
          </div>
            
        </div>
      </div>
    </Router>
  );
}

export default LoginPage;