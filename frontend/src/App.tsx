import React, { Component } from 'react';
import { Switch, Route, useHistory } from 'react-router';
import AuthenLogIn from './Pages/AuthenLogIn';
import AuthenResetPwd from './Pages/AuthenResetPwd';
import AuthenSignup from './Pages/AuthenSignup';
import ForgetPwd from './Pages/ForgetPwd';
import Home_new from './Pages/Home_new';
import LoginPage from './Pages/LoginPage';
import LoginSigninPage from './Pages/LoginSigninPage';
import SignUpPage from './Pages/SignUpPage';
import TermOfUse from './Pages/TermOfUse';
import Threads_new from './Pages/Thread_new';
import CreateComment_new from './Pages/CreateComment_new';
import CreateReport_new from './Pages/CreateReport_new';
import SearchThread_new from './Pages/SearchThread_new';
import CreateThread_new from './Pages/CreateThread_new';
import Profile_new from './Pages/Profile_new';
import Setting_new from './Pages/Setting_new';

const App = () => {
    const history = useHistory();

    return (
        <Switch>
            <Route exact path="/" component={ LoginSigninPage } />
            <Route exact path="/LogIn" component={ LoginPage } />
            <Route exact path="/SignUp" component={ SignUpPage } />
            <Route exact path="/ForgetPwd" component={ ForgetPwd } />
            <Route path="/LogIn/AuthenLogIn" component={ AuthenLogIn } />
            <Route path="/TermOfUse" component={ TermOfUse } />
            <Route path="/ForgetPwd/AuthenResetPwd" component={ AuthenResetPwd } />
            <Route path="/SignUp/AuthenSignup" component={ AuthenSignup } />
            <Route path="/Home" component={ Home_new } />
            <Route path="/Thread/:ThreadID" component={ Threads_new } />
            <Route path="/CreateComment/:ThreadID" component={ CreateComment_new } />
            <Route path="/CreateReport/:ThreadID" component={ CreateReport_new } />
            <Route path="/SearchThread" component={ SearchThread_new } />
            <Route path="/CreateThread" component={ CreateThread_new } />
            <Route path="/Profile" component={ Profile_new } />
            <Route path="/Setting" component={ Setting_new } />
        </Switch>
    );
};

export default App;