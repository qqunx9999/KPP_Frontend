import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/Login-SigninPage.css';
import SignUpPage from './Sign-UpPage' ;


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
            <a className="signup-frame" href="/sign-up">
              <div className="sign-up">
                  Sign Up
              </div>
            </a>
            <Link to="/log-in" className="login-frame">
              <div className="log-in">
                  Log In
              </div>    
            </Link>
        </div>
      </div>
    </Router>
  );
}

export default LoginSigninPage;
