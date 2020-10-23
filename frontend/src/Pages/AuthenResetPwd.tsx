import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import '../CSSsource/AuthenResetPwd.css';

function AuthenResetPwd() {
  const [time, setRedirect] = useState<boolean>(false);

  function delay() {
    setRedirect(true);
  }

  return (
    <div className="backgroundFinishLoadAuthenResetPwd">
      <div className="frameAuthenReset">
        <div className="KUpeopleAuthenReset">
          KU People
        </div>
        <div className="textAuthenReset">
          Password changed!Back to log in...
        </div>
      </div>
      {setInterval(delay, 3000)}
      {time && (<Redirect to="/" />)}
    </div>
  );
}

export default AuthenResetPwd;