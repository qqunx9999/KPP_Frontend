import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CSSsource/SignupPage.css';

type AccountProps = {
    // account: Account;
};

export const SignUp = (props: AccountProps) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPassword] = useState<string>('');
    const [conPass, setConPass] = useState<string>('');
    const [account, setAccount] = useState<string>('');

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConPass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConPass(event.target.value);
    };

    const handleAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount(event.target.value);
    };

    const handleFetch = () => {
        const newFetch = {
            mail: email,
            Password: pass,
        };

        fetch('', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFetch),
        });
    };

    return (
        <form>
            <div className="signup-account-name_">
                Account Name :
            <input placeholder="Type your username... (Only characters and numbers allowed.)" style={{ width: "770px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={ handleAccount } onSubmit={undefined} value={ account } className="signup-Input_account" />
            </div>
            <div className="signup-email_">
                Email :
              <input placeholder="Type your Email..." style={{ width: "750px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={ handleEmail } onSubmit={undefined} value={ email } className="signup-Input_email" />
            </div>
            <div className="signup-_ku-th">
                @ku.th
          </div>
            <div className="signup-password_">
                Password :
              <input placeholder="Type your password..." style={{ width: "820px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={ handlePassword } onSubmit={undefined} value={ pass } className="signup-Input_password" />
            </div>
            <div className="signup-cf-password">
                Confirm Password :
              <input placeholder="Confirm your password..." style={{ width: "640px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={ handleConPass } onSubmit={undefined} value={ conPass } className="signup-Input-cf-password" />
            </div>
            <div className="signup-sign-up">
                <Link to="/SignUp/AuthenSignup" className="signup-su-frame">
                    <button onClick={handleFetch} className="signup-square"></button>
                  &nbsp; &nbsp; Sign Up
              </Link>
            </div>
        </form>
    );
};