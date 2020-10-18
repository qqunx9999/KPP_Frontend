import React from 'react';
import { Link } from "react-router-dom";
import '../CSSsource/LoginSigninPage.css';
import LogInPage from './LoginPage'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginSigninPage = () => {


  return (

    <div className="backgroundLoginSignin">
      <div className="container-sm">
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
          <Link to="/LogIn" >
            <button type="button" className="LoginFrameLoginSignin btn btn-success">
              <div className="LogInLoginSignin ">
                Log In
            </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginSigninPage;
