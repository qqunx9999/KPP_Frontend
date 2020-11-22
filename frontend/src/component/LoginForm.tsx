import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSSsource/LoginPage.css';
import { Field, Form, Formik } from 'formik';
import AuthService from '../service/AuthService';
import * as Yup from 'yup';

const inputStyle = {
  width: "500px",
  height: "50px",
  fontSize: "30px"
  ,"background-color":"white"
}

export const EmailID = () => {
  const [loginErrorMessage, setLoginErrorMessage] = useState('');
  const history = useHistory();

  const login = AuthService.isUserLoggedIn();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required')
      })}
      onSubmit={async (values, actions) => {
        const result = await AuthService.LoginUser((values.email).concat('@ku.th'), values.password);
        if (!result) {
          setLoginErrorMessage('Login error: Wrong username or password');
        } else {
          setLoginErrorMessage('');
          localStorage.setItem('email', values.email);
          history.push('/LogIn/AuthenLogIn');
        };
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          { loginErrorMessage && (<div className="errorMessageLogin">{loginErrorMessage}</div>)}
          <div className="EmailLogIn1">
            Email :
            <Field type="input" name="email" placeholder="Type your Email..." style={inputStyle} className="form-control InputEmailLogIn1" required />
            <div className="kuthLogIn1">
              @ku.th
            </div>
          </div>
          <div className="PasswordLogIn1">
            Password :
            <Field type="password" name="password" placeholder="Type your password..." style={inputStyle} className="form-control InputPasswordLogIn1" required />
          </div>
          <button type="submit" disabled={isSubmitting} className="FrameLogIn1 btn btn-success">
            <div className="LogInButtonLogIn1">
              Log In
            </div>
          </button>
        </Form>
      )}
    </Formik>
  );
};
