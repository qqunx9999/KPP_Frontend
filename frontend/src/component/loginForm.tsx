import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginPage.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import AuthService from '../service/AuthService';
import { Button } from 'react-bootstrap/lib/InputGroup';

type LoginFormProps = {
    loginCallBack?: () => void,
}

const inputStyle = {
    width: "500px",
    height: "50px",
}

export const EmailID = (props: LoginFormProps) => {
    const [loginErrorMessage, setLoginErrorMessage] = useState('');
    const history = useHistory();
    
    return(
        <div>
        <Formik
            initialValues = {{ email: '', password: '' }}
            validate = {values => {
                const errors: any = {}
                if (values.email === '') {
                    errors.email = 'Login required.';
                };
                if (values.password === '') {
                    errors.password = 'Password required';
                };
                return errors;
            }}
            onSubmit = { async (values, actions) => {
                const res = await AuthService.LoginUser(values.email, values.password);
                if (!res) {
                    setLoginErrorMessage('Login error: Wrong username or password');
                } else {
                    setLoginErrorMessage('');
                    if (props.loginCallBack) {
                        props.loginCallBack();
                    }
                    history.push('/LogIn/AuthenLogIn');
                }
                actions.setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    { loginErrorMessage && (<div>{ loginErrorMessage }</div>) }
                    <div className="EmailLogIn1">
                        Email :
                    <Field type="input" name="email" placeholder="Type your Email..." style={ inputStyle } className="InputEmailLogIn1" />
                    
                    <div className="kuthLogIn1">
                        @ku.th
                    </div>
                    
                    </div>
                    <div className="PasswordLogIn1">
                        Password :
                    <Field type="password" name="password" placeholder="Type your password..." style={ inputStyle } className="InputPasswordLogIn1" />
                    </div>
                    <button disabled={ isSubmitting } className="FrameLogIn1">
                        <div className="LogInButtonLogIn1">
                            Log In
                        </div>
                    </button>
                </Form>
            )}
        </Formik>
        </div>
    );
};