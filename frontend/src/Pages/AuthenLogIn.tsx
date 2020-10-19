import React, { useState } from 'react';
import '../CSSsource/AuthenLogIn.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Pages/image/nong_plub.png'
import { Redirect } from 'react-router';

const AuthenLogIn = () => {
  const [time, setRedirect] = useState<boolean>(false);

  const delay = () => {
    setRedirect(true)
  };

  return (
    <div className="greenBackgroungAuth">
      <div className="container-md">
        <div className="frameAuth">
          <div className="KUpeopleAuth">
            KU People
          </div>
          <div className="rotate">
            {/* <img src={ logo } alt="React is stupid" /> */}
          </div>
          <div className=" spinner-border text-success" id="spin" role="status">
              <span className="sr-only">Loading...</span>
              </div>
          <div className="textAuth">
            Checking your verification code...
          </div>
        </div>
      </div>
      { setInterval(delay, 3000) }
      { time && (<Redirect to="/Home" />) }
    </div>
  );
}

export default AuthenLogIn;