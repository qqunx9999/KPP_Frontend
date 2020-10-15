import React, { useState } from 'react';
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

    
    return(
        <form>
            Email :
            <input placeholder="Type your Email..." style={{ width: "500px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handleEmail} onSubmit={undefined} value={email} className="InputEmailLogIn1 form-control" />
            <div className="kuthLogIn1">
                @ku.th
                </div>
        </form>
    );
};

export const PassID = (props: AccountProps) => {
    const [pass, setPassword] = useState<string>('');

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <form>
            Password :
            <input type="password" placeholder="Type your password..." style={{ width: "480px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handlePassword} onSubmit={undefined} value={pass} className="InputPasswordLogIn1 form-control" />
        </form>
    );
};