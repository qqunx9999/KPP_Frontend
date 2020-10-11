import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/AuthenLogIn.css';

const AuthenLogIn = () => {
  

  return (
      <div className="greenBackgroungAuth">
          <div className="frameAuth">
            <div className="KUpeopleAuth">
              KU People
            </div>
            <div className="textAuth">
              Checking your verification code...
            </div>
          </div>
      </div>
  );
}

export default AuthenLogIn;
