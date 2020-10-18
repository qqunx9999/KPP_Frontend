import React, { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import '../CSSsource/ForgetPwd.css';
import { Forgetpass } from '../component/ForgetpwdForm';

const ForgetPwd = () => {


    return (
        <div className="forgetpwd-frame">
            <div className="forgetpwd-whiteframe">
                <div className="forgetpwd-k-u-people">
                    KU People
                </div>
                <div className="password-reset">
                    Password reset
                </div>
                <div className="verification">
                    verification code will send to you. It expired after 5 minutes.
                </div>
                <Forgetpass />
            </div>
        </div>
    );
}

export default ForgetPwd;