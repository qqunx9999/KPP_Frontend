import React from 'react';
import { Switch, Route } from 'react-router';
import AuthenLogIn from './Pages/AuthenLogIn';
import AuthenResetPwd from './Pages/AuthenResetPwd';
import AuthenSignup from './Pages/AuthenSignup';
import ForgetPwd from './Pages/ForgetPwd';
import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import LoginSigninPage from './Pages/LoginSigninPage';
import SignUpPage from './Pages/SignUpPage';
import TermOfUse from './Pages/TermOfUse';
import Threads from './Pages/Thread';
import CreateComment from './Pages/CreateComment';
import CreateReport from './Pages/CreateReport';
import SearchThread from './Pages/SearchThread';
import CreateThread from './Pages/CreateThread';
import Profile from './Pages/Profile';
import Setting from './Pages/Setting';
import ReadReport from './Pages/ReadReport';
import ChatRoom from './Pages/ChatRoom';
import AuthenLogout from './Pages/AuthenLogout';
import ChangeName from './Pages/ChangeName';
import Test from './Test';
import ReportList from './Pages/ReportList';
import VerifyMail from './Pages/VerifyMail';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LoginSigninPage} />
      <Route exact path="/LogIn" component={LoginPage} />
      <Route exact path="/SignUp" component={SignUpPage} />
      <Route exact path="/ForgetPwd" component={ForgetPwd} />
      <Route path="/LogIn/AuthenLogIn" component={AuthenLogIn} />
      <Route path="/TermOfUse" component={TermOfUse} />
      <Route path="/ForgetPwd/AuthenResetPwd" component={AuthenResetPwd} />
      <Route path="/SignUp/AuthenSignup" component={AuthenSignup} />
      <Route path="/Home" component={Home} />
      <Route path="/Thread/:ThreadID" component={Threads} />
      <Route path="/CreateComment/:ThreadID" component={CreateComment} />
      <Route path="/CreateReport/:ThreadID" component={CreateReport} />
      <Route path="/SearchThread" component={SearchThread} />
      <Route path="/CreateThread" component={CreateThread} />
      <Route path="/Profile" component={Profile} />
      <Route exact path="/Setting" component={Setting} />
      <Route path="/ReportList" component={ReportList} />
      <Route path="/ReadReport/:type/:reportID" component={ReadReport} />
      <Route path="/ChatRoom" component={ChatRoom} />
      <Route path="/AuthenLogout" component={AuthenLogout} />
      <Route exact path="/Setting/ChangeName" component={ChangeName} />
      <Route path="/Test" component={Test} />
    </Switch>
  );
}

export default App;