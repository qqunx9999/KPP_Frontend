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
import AuthenSignup from './Pages/AuthenSignup';
import AuthenResetPwd from './Pages/AuthenResetPwd'
import Home from './Pages/Home'
import Threads from './Pages/Threads'
import CreateComment from './Pages/CreateComment'
import CreateThread from './Pages/CreateThread'
import CreateReport from './Pages/CreateReport'
import Profile from './Pages/Profile'
import ReportList from './Pages/ReportList'
import SearchThread from './Pages/SearchThread'
import Setting from './Pages/Setting'


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
        <Route path="/LogIn/AuthenLogIn">
          <AuthenLogIn/>
        </Route>
        <Route exact path="/ForgetPwd">
          <ForgetPwd/>
        </Route>
        <Route path="/TermOfUse">
          <TermOfUse/>
        </Route>
        <Route path="/ForgetPwd/AuthenResetPwd">
          <AuthenResetPwd/>
        </Route>
        <Route path="/SignUp/AuthenSignup">
          <AuthenSignup/>
        </Route>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route exact path="/Threads/:threadID">
          <Threads/>
        </Route>
        <Route exact path="/Threads/:threadID/CreateComment">
          <CreateComment/>
        </Route>
        <Route path="/CreateThread">
          <CreateThread/>
        </Route>
        <Route path="/ReportList">
          <ReportList/>
        </Route>
        <Route path="/SearchThread">
          <SearchThread/>
        </Route>
        <Route path="/Profile">
          <Profile/>
        </Route>
        <Route exact path="/Threads/:threadID/CreateReport">
          <CreateReport/>
        </Route>
        <Route path="/Setting">
          <Setting/>
        </Route>
      </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
