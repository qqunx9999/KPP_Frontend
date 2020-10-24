import React, { useState } from 'react';
import '../CSSsource/AuthenLogout.css';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

function AuthenLogout() {
    const [time, setRedirect] = useState<boolean>(false);

    const delay = () => {
        setRedirect(true);
      };

    return (
      <div className="AtLogout_bigframe">
          <div className="container-md">
            <div className="AtLogout_whiteframe">
                <div className="AtLogout_k-u-people">KU People</div>
                <div className="rotate"></div>
                <div className=" spinner-border text-success" id="AtLogout_spin" role="status">
                    <span className="sr-only">Loading Out...</span>
                    
                </div>
                <div className="AtLogout_success">Logout success! Go to home...</div>
            </div>
          </div>
          {setInterval(delay, 3000)}
          {time && (<Redirect to="/" />)}
      </div>
    );
  }
  
  export default AuthenLogout;