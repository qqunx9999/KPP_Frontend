import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../CSSsource/SignupPage.css';
import AuthService from '../service/AuthService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { baseUrl } from '../config/constant';
import * as Yup from 'yup';

export const SignUp = () => {
  // const [signUpErrorMessage, setSignUpErrorMessage] = useState('');
  const history = useHistory();
  // console.log(localStorage.email)

  return (
    <div>
      {/* <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required email'),
        })}
        onSubmit={async (values, actions) => {
          console.log(1)
          const email = values.email.concat('@ku.th');
          localStorage.setItem("email", email);
          console.log(2)
          const result = await fetch(`${baseUrl}/users/verifymail/${email}`, {
            method: 'POST',
            headers: { 'Content-Type': 'applicaiton/json' },
          }).then(result => console.log(result))
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email" className="signup-email_">
              Email :
              <Field type="input" name="email" required placeholder="Type your Email..." style={{ width: "500px", height: "50px", fontSize: "30px", "background-color": "white" }} className="form-control signup-Input_email" />&nbsp;
              <button type="button" className="btn btn-success" id="sendVerify" disabled={isSubmitting}>
                <div className="sendVerifyText">Verify</div>
              </button>
            </label>

            <label className="signup-_ku-th">
              @ku.th
            </label>
          </Form>
        )}
      </Formik> */}
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required')
        })}
        onSubmit={async (values, actions) => {
          const email = values.email.concat('@ku.th');
          await fetch(`${baseUrl}/users/verifymail/${email}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "email": email
            })
          }).then(res => {
            if (res.status === 201) {
              localStorage.setItem('email', values.email);
            }
          });
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="email" className="signup-email_">
              Email :
              <Field type="input" name="email" required placeholder="Type your Email..." style={{ width: "500px", height: "50px", fontSize: "30px", "background-color": "white" }} className="form-control signup-Input_email" />
              <button type="submit" className="btn btn-success" id="sendVerify" disabled={isSubmitting}>
                <div className="sendVerifyText">Verify</div>
              </button>
            </label>
            <div className="signup-_ku-th">@ku.th</div>
          </Form>
        )}
      </Formik>
      <Formik
        initialValues={{ username: '', password: '', conPass: '', verify_email: '' }}
        validationSchema={Yup.object({
          password: Yup.string().required('Required'),
          conPass: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match').required('Required'),
          verify_email: Yup.string().min(6, 'To short').max(6, 'To long'),
        })}
        onSubmit={async (values, actions) => {
          console.log(values.verify_email)
          const result = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              "username": String(localStorage.username),
              "email": localStorage.email,
              "password": values.password,
              "verify": values.verify_email
            })
          });
          console.log(result);
          if (result.status === 201) {
            history.push('/SignUp/AuthenSignup');
          }
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="account" className="signup-account-name_">
              Username :
              <Field type="input" required name="account" placeholder="Only characters and numbers allowed." style={{ width: "550px", height: "50px", fontSize: "30px", "background-color": "white" }} className="form-control signup-Input_account" />
            </label>
            <label htmlFor="password" className="signup-password_">
              Password :
              <Field type="password" required name="password" placeholder="Type your password..." style={{ width: "810px", height: "50px", fontSize: "30px", "background-color": "white" }} className="form-control signup-Input_password" />
            </label>
            <label htmlFor="conPass" className="signup-cf-password">
              Confirm Password :
              <Field type="password" required name="conPass" placeholder="Confirm your password..." style={{ width: "630px", height: "50px", fontSize: "30px", "background-color": "white" }} className="form-control signup-Input-cf-password" />
            </label>

            <label htmlFor="verify" className="signup-verify">
              Verification Code :
              <Field type="input" required name="verify_email" placeholder="Enter code" style={{ width: "240px", height: "50px", fontSize: "30px", "background-color": "white" }} className="form-control signup-Input_verify" />
            </label>

            <div className="signup-sign-up">
              <button type="submit" id="signup-su-frame" className="btn btn-success" disabled={isSubmitting}>
                <span id="bigText">Sign Up</span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};