import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSsource/LoginPage.css';
import { EmailID } from '../component/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../service/AuthService';

const LoginPage = () => {
  const [login, setLogin] = useState<boolean>(false);
  const history = useHistory();

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  return (
    <div className="LogInPage1">
      { login ? history.push('/Home') : null }
      <div className="container-md">
        <div className="CenterFrameLogin1">

          <div className="KUPeopleLogin1">
            KU People
          </div>
          <p className="TextPleaseLogIn1">
            Please sign up or log in before use.
          </p>
          <EmailID />
          <div className="TextForgetLogIn1">
            Forget your password?
          </div>
          <a className="ClickHereLogIn1" href="/ForgetPwd">
            click here!
          </a>
          <Link to="/" >
            <button type="button" className="FrameGoBackLogIn1 btn btn-success">
              <div className="GoBackButtonLogIn1">
                &lt; Go Back
              </div>
            </button>
          </Link>
          <div className="TextDontLogIn1">
            Don't have an account?
          </div>
          <Link to="/SignUp">
            <div className="go-to-sign-up">
              Go to Sign up
            </div>
          </Link>
        </div>
      </div>
    </div>

  );
}

export default LoginPage;