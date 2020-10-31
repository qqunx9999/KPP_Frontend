import React, { useEffect, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../CSSsource/LoginSigninPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from '../service/AuthService';

function LoginSigninPage() {
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
    <div className="backgroundLoginSignin">
      { login ? history.push('/Home') : null}
      <div className="container">
        <div className="row">
          <div className="centerFrameLoginSignin">
            <div className="KUPeopleLoginSignin">
              KU people
          </div>
            <div className="DesbTextLoginSignin">
              Please sign up or log in before use.
          </div>
            <Link to="/SignUp">
              <button type="button" className="SignupFrameLoginSignin btn btn-success">
                <div className="SignUpLoginSignin">
                  Sign Up
              </div>
              </button>
            </Link>
            <Link to="/LogIn">
              <button type="button" className="LoginFrameLoginSignin btn btn-success">
                <div className="LogInLoginSignin ">
                  Log In
              </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSigninPage;
