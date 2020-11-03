import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../CSSsource/SignupPage.css';
import AuthService from '../service/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseUrl } from '../config/constant';
import * as Yup from 'yup';

export const SignUp = () => {
  const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
  const history = useHistory();

  return (
    <Formik
      initialValues={{ account: '', email: '', password: '', conPass: '' }}
      validationSchema={ Yup.object({
        account: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
        conPass: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match').required('Required')
      }) }
      onSubmit={async (values, actions) => {
        const result = await fetch(`${ baseUrl }/users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            "username": values.account,
            "email": (values.email).concat('@ku.th'),
            "password": values.password
          })
        });
        console.log(result);
        if (result) {
          history.push('/SignUp/AuthenSignup');
        };
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="account" className="signup-account-name_">
            Account Name :
            <Field type="input" required name="account" placeholder="Type your username... (Only characters and numbers allowed.)" style={{ width: "770px", height: "50px" , fontSize: "30px","background-color":"white"}} className="form-control signup-Input_account" />
          </label>
          <label htmlFor="email" className="signup-email_">
            Email :
            <Field type="input" required name="email" placeholder="Type your Email..." style={{ width: "750px", height: "50px" , fontSize: "30px","background-color":"white"}} className="form-control signup-Input_email" />
          </label>
          <label className="signup-_ku-th">
            @ku.th
            </label>
          <label className="verificationSignupPage">
            Verification code will send to you.
          </label>
          <label htmlFor="password" className="signup-password_">
            Password :
            <Field type="password" required name="password" placeholder="Type your password..." style={{ width: "855px", height: "50px", fontSize: "30px","background-color":"white"}} className="form-control signup-Input_password" />
          </label>
          <label htmlFor="conPass" className="signup-cf-password">
            Confirm Password :
            <Field type="password" required name="conPass" placeholder="Confirm your password..." style={{ width: "675px", height: "50px" , fontSize: "30px","background-color":"white"}} className="form-control signup-Input-cf-password" />
          </label>

          <label htmlFor="verify" className="signup-verify">
            Verification Code :
            <Field type="input" required name="verify" placeholder="Enter code" style={{ width: "240px", height: "50px" , fontSize: "30px"}} className="form-control signup-Input_verify" />
          </label>

          <div className="signup-sign-up">
            <button type="submit" id="signup-su-frame" className="btn btn-success" disabled={ isSubmitting }>
              <span id="bigText">Sign Up</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};