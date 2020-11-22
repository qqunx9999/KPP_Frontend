import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/ChangeName.css';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';
import { useHistory } from 'react-router';

function ChangeProfileForm() {
  const history = useHistory();

  return (
    <Formik
      initialValues={{ email: localStorage.email, newName: '', newQuote: '', newPass: '', conPass: '', oldPass: '', verify: '' }}
      onSubmit={async (values, actions) => {
        const userID = AuthService.getUserID();
        const changeNameOption = {
          "name": values.newName,
        };
        const changePassOption = {
          "email": values.email,
          "newPass": values.newPass,
          "verify": values.verify,
        }
        UserService.changeName(userID, changeNameOption);
        // UserService.
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="newName" className="cName_newname_input" placeholder="Type your new name... (Only characters and Numbers allowed.)" style={{ width: "800px", height: "60px" }} />
          <Field type="text" name="newQuote" className="" placeholder="Type your new quote..." />
          <Field type="text" name="newPass" className="" placeholder="Type your new password ..." />
          <Field type="text" name="conPass" className="" placeholder="Type confirm password..." />
          <Field type="text" name="oldPass" className="" placeholder="Type your old password ..." />
          <Field type="text" name="verify" className="" placeholder="Type verify code ..." />
          <button className="cName-confirmbutton" disabled={isSubmitting}>Confirm</button>
        </Form>
      )}
    </Formik>
  );
}

export default ChangeProfileForm;
