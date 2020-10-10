import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/LoginSigninPage.css';


const LoginSigninPage = () => {
  

  return (
    <Router>
      <div className="dell-x-p-s">
        <div className="center-frame">
            <div className="k-u-people">
                  KU people
            </div>
            <div className="descb-text">
                  Please sign up or log in before use. 
            </div>
            <a className="signup-frame" href="/SignUp">
              <div className="sign-up">
                  Sign Up
              </div>
            </a>
            <a className="login-frame" href="/LogIn">
              <div className="log-in">
                  Log In
              </div>    
            </a>
        </div>
      </div>
    </Router>
  );
}

export default LoginSigninPage;
