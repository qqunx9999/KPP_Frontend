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
    
<<<<<<< HEAD
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
=======
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
>>>>>>> 2b93cb1bc028525d2b27e771d0bb4ed54827d998
      
    
  );
}

export default SignUpPage;
