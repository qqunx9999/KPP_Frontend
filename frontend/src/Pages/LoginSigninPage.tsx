import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/LoginSigninPage.css';
import LogInPage from './LoginPage'

const LoginSigninPage = () => {
  

  return (
    <div className="dell-x-p-s">
      <div className="center-frame">
          <div className="k-u-people">
                KU people
          </div>
          <div className="descb-text">
                Please sign up or log in before use. 
          </div>
          <Link to="/SignUp" className="signup-frame">
            <div className="sign-up">
                Sign Up
            </div>
          </Link>
          <Link to="/LogIn" className="login-frame">
            <div className="log-In">
                Log In
            </div>    
          </Link>
      </div>
    </div>
  );
}

export default LoginSigninPage;
