import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginPage.css';
import SignUpPage from "./SignUpPage"
import AuthenLogIn from './AuthenLogIn';

const LoginPage = () => {
  const [newEmail, setNewEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>(''); 

  const handleEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(email.target.value);
  }

  const handlePassword = (pass: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(pass.target.value);
  }

  return (
    <div className="LogInPage1">
      <div className="container">
      <div className="CenterFrameLogin1">
        
          <div className="KUPeopleLogin1">
                  KU People
          </div>
          <p className="TextPleaseLogIn1">
                  Please sign up or log in before use.
          </p>
          <div className="EmailLogIn1">
              <form>
                Email :
                <input value={ newEmail } onChange={ handleEmail } placeholder="Type your Email..." style={{ width:"500px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onSubmit={undefined} className="InputEmailLogIn1"/>
                <div className="kuthLogIn1">
                  @ku.th
                </div>
              </form>
          </div>
          <div className="PasswordLogIn1">
              <form>
                Password :
                <input value={ newPassword } onChange={ handlePassword } placeholder="Type your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onSubmit={undefined} className="InputPasswordLogIn1"/>
              </form>
          </div>
          <div className="TextForgetLogIn1">
                  Forget your password?
          </div>
          <a className="ClickHereLogIn1" href="/ForgetPwd">
                  click here!
          </a>
          <Link to="/" className="FrameGoBackLogIn1" >
            <div className="GoBackButtonLogIn1">
              &lt; Go Back
            </div>
          </Link>
          <div className="TextDontLogIn1">
                  Don't have an account?
          </div>
          <a className="GoToSignUpLogIn1" href="/Signup">
                  Go to Sign Up
          </a>
          <Link to="/LogIn/AuthenLogIn">
            <div className="FrameLogIn1">
              <div className="LogInButtonLogIn1">
                    Log In
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;