import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { SignUp } from '../component/SignUpForm';
import '../CSSsource/SignupPage.css';


const SignUpPage = () => {
  return (
      <div className="outer-frame">
        <div className="white-frame">
            <div className="k-u-people">
                  KU people
            </div>
            <div className="descb-text">
                  Please sign up or log in before use. 
            </div>
            
            <div className="accept">
                  You alreay read and accept
            </div>
            <SignUp />
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
        </div>
      </div>
  );
}

export default SignUpPage;
