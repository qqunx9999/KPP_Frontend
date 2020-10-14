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
import { UserPass } from '../interfaces/threadEntity';
import { runInNewContext } from 'vm';

const LoginPage = () => {
  const [login, setLogin] = useState<UserPass[]>([]);
  const [email, setEmail] = useState<string>('');
  const [pass, setPassword] = useState<string>('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
                <input placeholder="Type your Email..." style={{ width:"500px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleEmail } onSubmit={undefined} value={ email }  className="InputEmailLogIn1"/>
                <div className="kuthLogIn1">
                  @ku.th
                </div>
              </form>
          </div>
          <div className="PasswordLogIn1">
              <form>
                Password :
                <input type="password" placeholder="Type your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handlePassword } onSubmit={undefined} value={ pass }  className="InputPasswordLogIn1"/>
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
            <button onClick={ handleFetch } className="FrameLogIn1">
              <div className="LogInButtonLogIn1">
                    Log In
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;