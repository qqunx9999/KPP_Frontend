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
    
     <div className="signup-bigframe">
       <div className="signup-whiteframe">
         <div className="signup-k-u-people">
           KU People
         </div>
         <div className="signup-plz-text">
           Please sign up or log in before use.
         </div>
         <SignUp />
          <div className="signup-accept-text">
            You already read and accept
          </div>
          <button className="signup-term-text">
            <Link to= "/TermOfUse">
            Term of Use Agreement
            </Link>
          </button>

          <div className="signup_go-back">
            <Link to= "/" className="signup-gb-frame">
                &lt; Go Back
            </Link>
          </div>
       </div>
     </div>
      
    
  );
}

export default SignUpPage;