import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Account from '../interfaces/accountEntity';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginPage.css';
import { Field, Form, Formik } from 'formik';
import AuthService from '../service/AuthService';

type AccountProps = {
    // account: Account;
};

export const EmailID = (props: AccountProps) => {
    
    return(
        <div>
        <Formik
            initialValues = {{ email: '', password: '' }}
            onSubmit = {(values, actions) => {
                const login = {
                    email: values.email,
                    password: values.password,
                };
                actions.setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="EmailLogIn1">
                        Email :
                    <Field type="input" name="email" placeholder="Type your Email..." style={{ width: "500px", height: "50px" }} className="InputEmailLogIn1" />
                    <div className="kuthLogIn1">
                        @ku.th
                    </div>
                    </div>
                    <div className="PasswordLogIn1">
                        Password :
                    <Field type="password" name="password" placeholder="Type your password..." style={{ width: "480px", height: "50px" }} className="InputPasswordLogIn1" />
                    </div>
                    <Link to="/LogIn/AuthenLogIn">
                        <div aria-disabled={ isSubmitting } className="FrameLogIn1">
                            <div className="LogInButtonLogIn1">
                                Log In
                            </div>
                        </div>
                    </Link>
                </Form>
            )}
        </Formik>
        </div>
    );
};