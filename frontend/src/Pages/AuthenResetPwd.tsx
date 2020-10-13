import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/AuthenResetPwd.css';

const AuthenResetPwd = () => {
  

  return (
    <div className="backgroundFinishLoadAuthenResetPwd">
      <div className="frameAuthenReset">
          <div className="KUpeopleAuthenReset">
            KU People
          </div>
          <div className="textAuthenReset">
            Password changed! Back to log in...
          </div>
      </div>
    </div>
  );
}

export default AuthenResetPwd;