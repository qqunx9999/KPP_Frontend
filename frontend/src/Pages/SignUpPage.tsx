import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AccountName, ConPass, EmailID, PassID } from '../component/SignUpForm';
import '../CSSsource/SignupPage.css';


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
    
     <div className="signup-bigframe">
       <div className="signup-whiteframe">
         <div className="signup-k-u-people">
           KU People
         </div>
         <div className="signup-plz-text">
           Please sign up or log in before use.
         </div>
         <div className="signup-account-name_">
            <form>
              Account Name :
              <input placeholder="Type your username... (Only characters and numbers allowed.)" style={{ width:"770px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="signup-Input_account"/>                    
            </form>
          </div>
          <div className="signup-email_">
            <form>
              Email :
              <input placeholder="Type your Email..." style={{ width:"750px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="signup-Input_email"/>                    
            </form>
          </div>
          <div className="signup-_ku-th">
            @ku.th
          </div>
          <div className="signup-password_">
            <form>
              Password :
              <input placeholder="Type your password..." style={{ width:"820px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="signup-Input_password"/>                    
            </form>
          </div>
          <div className="signup-cf-password">
            <form>
              Confirm Password :
              <input placeholder="Confirm your password..." style={{ width:"640px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="signup-Input-cf-password"/>                    
            </form>
          </div>
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
          <div className="signup-sign-up">
              <Link to= "/SignUp/AuthenSignup" className="signup-su-frame">
                <button onClick={ handleFetch } className="signup-square"></button>
                  &nbsp; &nbsp; Sign Up
              </Link>
            </div>
       </div>
     </div>
      
    
  );
}

export default SignUpPage;
