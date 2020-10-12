import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginSigninPage.css';
import LogInPage from './LoginPage'

const LoginSigninPage = () => {
  

  return (
    <div className="backgroundLoginSignin">
      <div className="containe">
      <div className="centerFrameLoginSignin">
          <div className="KUPeopleLoginSignin">
                KU people
          </div>
          <div className="DesbTextLoginSignin">
                Please sign up or log in before use. 
          </div>
          <Link to="/SignUp" className="SignupFrameLoginSignin">
            <div className="SignUpLoginSignin">
                Sign Up
            </div>
          </Link>
          <Link to="/LogIn" className="LoginFrameLoginSignin">
            <div className="LogInLoginSignin ">
                Log In
            </div>    
          </Link>
      </div>
      </div>
    </div>
  );
}

export default LoginSigninPage;
