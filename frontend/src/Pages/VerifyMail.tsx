import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router';
import { baseUrl } from '../config/constant';

function VerifyMail() {
  const history = useHistory();

  const temp = {
    "margin": "10px"
  }

  return(
    <div style={ temp }>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={Yup.object({
          email: Yup.string().required('Required email'),
        })}
        onSubmit={async (values, actions) => {
          const email = values.email.concat('@ku.th');
          localStorage.setItem("email", email);
          console.log(2)
          const result = await fetch(`${ baseUrl }/users/verifymail/${ email }`, {
            method: 'POST',
            headers: { 'Content-Type': 'applicaiton/json' },
          }).then(result => console.log(result))
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Email :&nbsp;
              <Field type="input" name="email" />&nbsp;
              @ku.th
            </label> <br />
            <button disabled={ isSubmitting } type="submit" onClick={ () => console.log(1) }>Verify</button>
          </Form>
        )}
      </Formik>
      {/* <Formik
        initialValues={{ username: '' }}
        onSubmit={async (values, actions) => {
          alert(JSON.stringify(values.username, null, 2))
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <label>
              Username :&nbsp;
              <Field type="input" name="username" />
            </label> <br />
            <button disabled={ isSubmitting } type="submit">Check</button>
          </Form>
        )}
      </Formik> */}
      <button onClick={ () => history.push('/SignUp') }>Next</button>
    </div>
  );
}

export default VerifyMail;