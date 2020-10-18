import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../CSSsource/SignupPage.css';
import AuthService from '../service/AuthService';

export const Forgetpass = () => {
    const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
    const history = useHistory();

    const style1 = {  width: "490px", height: "40px", };
    const style2 = { width: "420px", height: "40px", };
    const style3 = { width: "440px", height: "40px", };

    const sendVerify = () => {
        AuthService.fetchVerifyCode();
    };

    return (
        <Formik
            initialValues={{ email: '', newPassword: '', conPass: '', verify: '' }}
            onSubmit={async (values, actions) => {
                const result = await AuthService.SignupUser((values.email), values.newPassword, values.conPass, values.verify);
                if(result) {
                    history.push('/ForgetPwd/AuthenResetPwd');
                }
                actions.setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="forgetpwd-email_">
                        E-mail :
                    <Field type="input" name="email" placeholder="Type your Email..." style={ style1 } className="forgetpwd_email_input" />
                    </div>
                    <div className="send">
                        <button onClick={ sendVerify } className="send_button">
                            Send
                        </button>
                    </div>
                    <div className="new-password_">
                        New Password :
                    <Field type="password" name="newPassword" placeholder="Type your password..." style={ style1 } className="newpassword_input" />
                    </div>
                    <div className="confirm-password_">
                        Confirm Password :
                    <Field type="password" name="conPass" placeholder="Type your password..." style={ style2 } className="confirmpassword_input" />
                    </div>
                    <div className="verification-code_">
                        Verification Code :
                    <Field type="input" name="verify" placeholder="Type your verification code..." style={ style3 } className="verification-code_input" />
                    </div>
                    <Link to="/LogIn" className="fgpwd_go-back">
                        <div className="fgpwd_goback_button">
                            &lt; Go Back
                        </div>
                    </Link>
                    <div className="fgpwd_confirm">
                        <button disabled={ isSubmitting } type="submit" className="fgpwd_confirm_button">                        
                            Confirm
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};