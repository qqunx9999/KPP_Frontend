import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../CSSsource/LoginPage.css';
import { Field, Form, Formik } from 'formik';
import AuthService from '../service/AuthService';

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
                const result = await AuthService.LoginUser((values.email).concat('@ku.th'), values.password);
                console.log(result);
                if (!result) {
                    setLoginErrorMessage('Login error: Wrong username or password');
                } else {
                    setLoginErrorMessage('');
                    if (props.loginCallBack) {
                        props.loginCallBack();
                    };
                    history.push('/LogIn/AuthenLogIn');
                };
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
                    <button type="submit" disabled={ isSubmitting } className="FrameLogIn1">
                        <div className="LogInButtonLogIn1">
                            Log In
                        </div>
                    </button>
                </Form>
            )}
        </Formik>
    );
};