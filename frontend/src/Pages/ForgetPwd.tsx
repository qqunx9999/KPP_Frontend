import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../CSSsource/ForgetPwd.css';

const ForgetPwd = () => {

    const [newEmail, setNewEmail] = useState<string>('');
    const [newPassword, setNewPassword] = useState<string>('');

    const handleEmail = (email: React.ChangeEvent<HTMLInputElement>) => {
        setNewEmail(email.target.value);
    }

    const handlePassword = (pass: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(pass.target.value);
    }

    return (
        <div className="forgetpwd-frame">
            <div className="forgetpwd-whiteframe">
                <div className="forgetpwd-k-u-people">
                    KU People
                </div>
                <div className="password-reset">
                    Password reset
                </div>
                <div className="forgetpwd-email_">
                    <form>
                        E-mail :
                    <input placeholder="Type your Email..." style={{ width: "480px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""} className="forgetpwd_email_input" />
                    </form>
                </div>
                <div className="send">
                    <button className="send_button">
                        send
                    </button>
                </div>
                <div className="verification">
                    verification code will send to you. It expired after 5 minutes.
                </div>
                <div className="new-password_">
                    <form>
                        New Password :
                    <input placeholder="Type your password..." style={{ width: "480px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""} className="newpassword_input" />
                    </form>
                </div>
                <div className="confirm-password_">
                    <form>
                        Confirm Password :
                    <input placeholder="Type your password..." style={{ width: "420px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={ handleEmail } onSubmit={undefined} value={ newEmail } className="confirmpassword_input" />
                    </form>
                </div>
                <div className="verification-code_">
                    <form>
                        Verification Code :
                    <input placeholder="Type your verification code..." style={{ width: "440px", height: "50px" }} onFocus={undefined} onBlur={undefined} onChange={ handlePassword } onSubmit={undefined} value={ newPassword } className="verification-code_input" />
                    </form>
                </div>
                <Link to="/LogIn" className="fgpwd_go-back">
                    <div className="fgpwd_goback_button">
                        &lt; Go Back
                    </div>
                </Link>
                <Link to='/ForgetPwd/AuthenResetPwd' className="fgpwd_confirm">
                    <button className="fgpwd_confirm_button">
                        Confirm
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default ForgetPwd;