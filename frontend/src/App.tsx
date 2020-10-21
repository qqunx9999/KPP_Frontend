import React, { Component } from 'react';
import { Switch, Route, useHistory } from 'react-router';
import AuthenLogIn from './Pages/AuthenLogIn';
import AuthenResetPwd from './Pages/AuthenResetPwd';
import AuthenSignup from './Pages/AuthenSignup';
import CreateComment from './Pages/old pages/CreateComment';
import CreateReport from './Pages/CreateReport';
import CreateThread from './Pages/CreateThread';
import ForgetPwd from './Pages/ForgetPwd';
import Home_new from './Pages/Home_new';
// import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import LoginSigninPage from './Pages/LoginSigninPage';
import Profile from './Pages/Profile';
import ReportList from './Pages/ReportList';
import SearchThread from './Pages/SearchThread';
import Setting from './Pages/Setting';
import SignUpPage from './Pages/SignUpPage';
import TermOfUse from './Pages/TermOfUse';
import Threads from './Pages/old pages/Threads';
import Threads_new from './Pages/Thread_new';
import threadService from './service/threadService';
import CreateComment_new from './Pages/CreateComment_new';

const App = () => {
    const history = useHistory();

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
            
            <Route path="/Home_new" component={ Home_new } />
            <Route path={`/Thread_new/:ThreadID`} component={ Threads_new } />
            <Route path={ `/Threads/:threadID/CreateComment` } component={ CreateComment_new } />
            

            {/* <Route path="/Home">
                <Home loginCallBack={ props.loginCallBack }/>
            </Route>
            <Route exact path="/Threads/:threadID"component={ Threads } />
            <Route exact path="/Threads/:threadID/CreateComment" component={ CreateComment } />
            <Route path="/CreateThread" component={ CreateThread } />
            <Route path="/ReportList" component={ ReportList } />
            <Route path="/SearchThread" component={ SearchThread } />
            <Route path="/Profile" component={ Profile } />
            <Route exact path="/Threads/:threadID/CreateReport" component={ CreateReport } />
            <Route path="/Setting" component={ Setting } /> */}
        </Switch>
    );
};

export default App;