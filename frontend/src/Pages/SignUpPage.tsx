import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/SignupPage.css';


const SignUpPage = () => {
  
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>(''); 

  const handleEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(email.target.value);
  }

  const handlePassword = (pass: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(pass.target.value);
  }

  return (
    
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
                  <input placeholder="Type your username... (Only characters and Numbers allowed.)" style={{ width:"560px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="Input_account"/>
                 
              </form>
            </div>
            <div className="email-text">
              <form>
                  Email :
                  <input placeholder="Type your Email..." style={{ width:"600px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleEmail } onSubmit={undefined} value={ newEmail }  className="user_email"/>
                  <div className="addku">
                    @ku.th
                  </div>
              </form>
            </div>
            <div className="pass">
              <form>
                  Password :
                  <input placeholder="Type your password..." style={{ width:"690px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handlePassword } onSubmit={undefined} value={ newPassword }  className="user_password"/>
                 
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
                <button className="square"></button>
                  &nbsp; Sign Up
              </Link>
            </div>
        </div>
      </div>
      
    
  );
}

export default SignUpPage;
