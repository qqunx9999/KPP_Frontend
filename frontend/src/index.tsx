import React from 'react';
import ReactDOM from 'react-dom';
import './CSSsource/index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginSigninPage from './Pages/LoginSigninPage';
import SignUpPage from './Pages/SignUpPage' ;
import LoginPage from './Pages/LoginPage' ;
import AuthenLogIn from './Pages/AuthenLogIn';
import ForgetPwd from './Pages/ForgetPwd';
import TermOfUse from './Pages/TermOfUse';


ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/">
          <LoginSigninPage/>
        </Route>
        <Route exact path="/LogIn">
          <LoginPage/>
        </Route>
        <Route exact path="/SignUp">
          <SignUpPage />
        </Route>
        <Route exact path="/LogIn/AuthenLogIn">
          <AuthenLogIn/>
        </Route>
        <Route exact path="/ForgetPwd">
          <ForgetPwd/>
        </Route>
        <Route exact path="/TermOfUse">
          <TermOfUse/>
        </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
