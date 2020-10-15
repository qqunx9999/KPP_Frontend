import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Account from '../interfaces/accountEntity';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginPage.css';

type AccountProps = {
    // account: Account;
};

export const EmailID = (props: AccountProps) => {
    const [email, setEmail] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const [pass, setPassword] = useState<string>('');

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleFetch = () => {
        const newFetch = {
          mail: email,
          password: pass,
        };
    
        fetch('http://localhost:3000/auth/login', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newFetch),
        });
      };
    
    return(
        <div>
        <form>
            <div className="EmailLogIn1">
                Email :
            <input placeholder="Type your Email..." style={{ width: "500px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handleEmail} onSubmit={undefined} value={email} className="InputEmailLogIn1" />
            <div className="kuthLogIn1">
                @ku.th
            </div>
            </div>
            <div className="PasswordLogIn1">
                Password :
            <input type="password" placeholder="Type your password..." style={{ width: "480px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handlePassword} onSubmit={undefined} value={pass} className="InputPasswordLogIn1" />
            </div>
        </form>
        <Link to="/LogIn/AuthenLogIn">
            <div onClick={ handleFetch } className="FrameLogIn1">
              <div className="LogInButtonLogIn1">
                    Log In
              </div>
            </div>
          </Link>
        </div>
    );
};