import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/AuthenLogIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Pages/image/nong_plub.png'

const AuthenLogIn = () => {
  return (
      <div className="greenBackgroungAuth">
        <div className="container-md">
          <div className="frameAuth">
            <div className="KUpeopleAuth">
              KU People
            </div>
              <div className="rotate">
                <img src={logo} alt ="React is stupid"/>
              </div>
              {/* <div className=" spinner-border text-success" role="status">
              <span className="sr-only">Loading...</span>
              </div> */}
              {/* </div> */}
              <div className="textAuth">
                Checking your verification code...
              </div>
            </div>
          </div>
        </div>
  );
}

export default AuthenLogIn;