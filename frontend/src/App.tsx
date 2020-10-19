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

type LoginFormProps = {
    loginCallBack?: () => void,
};

const App = (props: LoginFormProps) => {

    return (
        <Switch>
            <Route exact path="/" component={ LoginSigninPage } />
            <Route exact path="/LogIn" component={ LoginPage } />
            <Route exact path="/SignUp" component={ SignUpPage } />
            <Route path="/LogIn/AuthenLogIn" component={ AuthenLogIn } />
            <Route exact path="/ForgetPwd" component={ ForgetPwd } />
            <Route path="/TermOfUse" component={ TermOfUse } />
            <Route path="/ForgetPwd/AuthenResetPwd" component={ AuthenResetPwd } />
            <Route path="/SignUp/AuthenSignup" component={ AuthenSignup } />
            <Route path="/Home">
                <Home loginCallBack={ props.loginCallBack }/>
            </Route>
            <Route exact path="/Threads/:threadID"component={ Threads } />
            <Route exact path="/Threads/:threadID/CreateComment" component={ CreateComment } />
            <Route path="/CreateThread" component={ CreateThread } />
            <Route path="/ReportList" component={ ReportList } />
            <Route path="/SearchThread" component={ SearchThread } />
            <Route path="/Profile" component={ Profile } />
            <Route exact path="/Threads/:threadID/CreateReport" component={ CreateReport } />
            <Route path="/Setting" component={ Setting } />
        </Switch>
    );
};

export default App;