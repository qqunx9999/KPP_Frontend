import React, { useState } from 'react';

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
            <input placeholder="Type your Email..." style={{ width: "500px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handleEmail} onSubmit={undefined} value={email} className="InputEmailLogIn1" />
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
            <input type="password" placeholder="Type your password..." style={{ width: "480px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handlePassword} onSubmit={undefined} value={pass} className="InputPasswordLogIn1" />
        </form>
    );
};

export const ConPass = (props: AccountProps) => {
    const [conPass, setConPass] = useState<string>('');

    
    const handleConPass = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConPass(event.target.value);
    };

    return(
        <form>                  
                  Confirm Password :
                  
                  <input placeholder="Comfirm your password..." style={{ width:"480px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={ handleConPass } onSubmit={undefined} value={ conPass }  className="user_conpassword"/>
                 
              </form>
    );
};

export const AccountName = (props: AccountProps) => {
    const [account, setAccount] = useState<string>('');

    
    const handleAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccount(event.target.value);
    };

    return (
        <form>
            Account Name :
            <input placeholder="Type your username... (Only characters and Numbers allowed.)" style={{ width: "560px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={handleAccount} onSubmit={undefined} value={account} className="Input_account" />

        </form>
    );

}