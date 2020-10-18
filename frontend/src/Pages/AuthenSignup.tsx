import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Redirect
} from "react-router-dom";
import '../CSSsource/AuthenSignup.css';
import logo from '../Pages/image/nong_plub.png'
const AuthenSignup = () => {
  const [time, setRedirect] = useState<boolean>(false);

  const delay = () => {
    setRedirect(true);
  };

  return (
    <div>
      <Router>
        <div className="AuthenSU-outer-frame">
          <div className="AuthenSU-whiteframe">
            <div className="AuthenSU-k-u-people">
              KU People
                 </div>
            <div className="rotate">
              <img src={logo} alt="React is stupid" />
            </div>
            <div className="AuthenSU-in_progess">
              Signing up in progess...
                 </div>
          </div>
        </div>

      </Router>
      { setInterval(delay, 3000)}
      { time && (<Redirect to="/" />)}
    </div>

  );
}

export default AuthenSignup;