import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AccountName, ConPass, EmailID, PassID } from '../component/SignUpForm';
import '../CSSsource/SignupPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const SignUpPage = () => {



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
    
      <div className="outer-frame">
        <div className = "container-lg">
          <div className="white-frame">
              <div className="k-u-people">
                    KU people
              </div>
              <div className="descb-text">
                    Please sign up or log in before use. 
              </div>
              <div className="accountName">
                <AccountName />
              </div>
              <div className="email-text">
                <EmailID />
              </div>
              <div className="pass">
                <PassID />
              </div>
              <div className="conpassword">
                <ConPass />
              </div>
              <div className="accept">
                    You alreay read and accept
              </div>
              
              <div className="term">
                <Link to= "/TermOfUse">
                    Term of use Agreement
                </Link>
              </div>
              
              <div className="_go-back">
                <Link to= "/" className="button">
                    &lt; Go Back
                </Link>
              </div>
              <div className="sign-up">
                <Link to= "/SignUp/AuthenSignup" className="button2">
                  <button onClick={ handleFetch } className="square"></button>
                    &nbsp; Sign Up
                </Link>
              </div>
          </div>
        </div>
      </div>
      
    
  );
}

export default SignUpPage;
