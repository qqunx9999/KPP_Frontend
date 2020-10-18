import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import AuthenLogIn from './Pages/AuthenLogIn';
import AuthenResetPwd from './Pages/AuthenResetPwd';
import AuthenSignup from './Pages/AuthenSignup';
import CreateComment from './Pages/CreateComment';
import CreateReport from './Pages/CreateReport';
import CreateThread from './Pages/CreateThread';
import ForgetPwd from './Pages/ForgetPwd';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import LoginSigninPage from './Pages/LoginSigninPage';
import Profile from './Pages/Profile';
import ReportList from './Pages/ReportList';
import SearchThread from './Pages/SearchThread';
import Setting from './Pages/Setting';
import SignUpPage from './Pages/SignUpPage';
import TermOfUse from './Pages/TermOfUse';
import Threads from './Pages/Threads';

const App = () => {

    return (
        <Switch>
            <Route exact path="/">
                <LoginSigninPage />
            </Route>
            <Route exact path="/LogIn">
                <LoginPage />
            </Route>
            <Route exact path="/SignUp">
                <SignUpPage />
            </Route>
            <Route path="/LogIn/AuthenLogIn">
                <AuthenLogIn />
            </Route>
            <Route exact path="/ForgetPwd">
                <ForgetPwd />
            </Route>
            <Route path="/TermOfUse">
                <TermOfUse />
            </Route>
            <Route path="/ForgetPwd/AuthenResetPwd">
                <AuthenResetPwd />
            </Route>
            <Route path="/SignUp/AuthenSignup">
                <AuthenSignup />
            </Route>
            <Route path="/Home">
                <Home />
            </Route>
            <Route exact path="/Threads/:threadID">
                <Threads />
            </Route>
            <Route exact path="/Threads/:threadID/CreateComment">
                <CreateComment />
            </Route>
            <Route path="/CreateThread">
                <CreateThread />
            </Route>
            <Route path="/ReportList">
                <ReportList />
            </Route>
            <Route path="/SearchThread">
                <SearchThread />
            </Route>
            <Route path="/Profile">
                <Profile />
            </Route>
            <Route exact path="/Threads/:threadID/CreateReport">
                <CreateReport />
            </Route>
            <Route path="/Setting">
                <Setting />
            </Route>
        </Switch>
    );
};

export default App;