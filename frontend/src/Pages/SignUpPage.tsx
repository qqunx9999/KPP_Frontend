import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/SignupPage.css';


const SignUpPage = () => {

  return (
    <Router>
      <div className="outer-frame">
        <div className="white-frame">
            <div className="k-u-people">
                  KU people
            </div>
            <div className="descb-text">
                  Please sign up or log in before use. 
            </div>
            <div className="accountName">
              <form>
                  Account Name :
                  <input placeholder="Type your username... (Only characters and Numbers allowed.)" style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="Input_account"/>
                 
              </form>
            </div>
            <div className="email-text">
              <form>
                  Email :
                  <input placeholder="Type your Email..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="user_email"/>
                  <div className="addku">
                    @ku.th
                  </div>
              </form>
            </div>
            <div className="pass">
              <form>
                  Password :
                  <input placeholder="Type your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="user_password"/>
                 
              </form>
            </div>
            <div className="conpassword">
              <form>                  
                  Confirm Password :
                  
                  <input placeholder="Comfirm your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="user_conpassword"/>
                 
              </form>
            </div>
            <div className="accept">
                  You alreay read and accept
            </div>
            <div className="term">
                  Term of use Agreement
            </div>
            <div className="_go-back">
              <button className="button">
                  &lt; Go Back
              </button>
            </div>
            <div className="sign-up">
              <button className="button2">
                <button className="square"></button>
                  &nbsp; Sign Up
              </button>
            </div>
        </div>
      </div>
      
    </Router>
  );
}

export default SignUpPage;
