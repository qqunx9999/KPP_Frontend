import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(newFetch),
        });
      };
    
    return(
        <form>
            <div className="accountName">
                Account Name :
                <input placeholder="Type your username... (Only characters and Numbers allowed.)" style={{ width: "560px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handleAccount} onSubmit={undefined} value={account} className="Input_account" />
            </div>
            <div className="email-text">
                Email :
                <input placeholder="Type your Email..." style={{ width: "500px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handleEmail} onSubmit={undefined} value={email} className="InputEmailLogIn1" />
                <div className="kuthLogIn1">
                    @ku.th
                </div>
            </div>
            <div className="pass">
                Password :
                <input type="password" placeholder="Type your password..." style={{ width: "480px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handlePassword} onSubmit={undefined} value={pass} className="InputPasswordLogIn1" />
            </div>
            <div className="conpassword">
                Confirm Password :
                <input placeholder="Comfirm your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleConPass } onSubmit={undefined} value={ conPass }  className="user_conpassword"/>
            </div>
            <div className="sign-up">
                <Link to= "/SignUp/AuthenSignup" className="button2">
                    <button onClick={ handleFetch } className="square"></button>
                    &nbsp; Sign Up
                </Link>
            </div>
        </form>
    );
};