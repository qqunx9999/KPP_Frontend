import React from 'react';
import ReactDOM from 'react-dom';
import './CSSsource/index.css';
import * as serviceWorker from './serviceWorker';
import LoginSigninPage from './Pages/Login-SigninPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUpPage from './Pages/Sign-UpPage' ;


ReactDOM.render(
  <Router>
      <Switch>
        <Route exact path="/">
          <LoginSigninPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
