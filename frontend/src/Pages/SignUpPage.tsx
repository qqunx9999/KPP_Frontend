import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/SignupPage.css';


const SignUpPage = () => {
  const [account, setAccount] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [pass, setPassword] = useState<string>('');
  const [conPass, setConPass] = useState<string>('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

  const handleConPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConPass(event.target.value);
  };

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
                  <input placeholder="Type your username... (Only characters and Numbers allowed.)" style={{ width:"560px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleAccount } onSubmit={undefined} value={ account }  className="Input_account"/>
                 
              </form>
            </div>
            <div className="email-text">
              <form>
                  Email :
                  <input placeholder="Type your Email..." style={{ width:"600px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleEmail } onSubmit={undefined} value={ email }  className="user_email"/>
                  <div className="addku">
                    @ku.th
                  </div>
              </form>
            </div>
            <div className="pass">
              <form>
                  Password :
                  <input placeholder="Type your password..." style={{ width:"690px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handlePassword } onSubmit={undefined} value={ pass }  className="user_password"/>
                 
              </form>
            </div>
            <div className="conpassword">
              <form>                  
                  Confirm Password :
                  
                  <input placeholder="Comfirm your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleConPass } onSubmit={undefined} value={ conPass }  className="user_conpassword"/>
                 
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
                <button onClick={ handleFetch } className="square"></button>
                  &nbsp; Sign Up
              </Link>
            </div>
        </div>
      </div>
      
    
  );
}

export default SignUpPage;
