import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/ChangeName.css';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';

function ChangeProfileForm() {

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
          "oldPass": values.oldPass,
          "newPass": values.newPass,
          "verify": values.verify,
        }
        UserService.changeName(userID, changeNameOption);
        UserService.changePass(changePassOption);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="newName" className="cName_newname_input" placeholder="Type your new name... (Only characters and Numbers allowed.)"/>
          <Field type="text" name="newQuote" className="cName_newquote_input" placeholder="Type your new quote..."/>
          <Field type="text" name="newPass" className="cName_newpassword_input" placeholder="Type your new password ..." />
          <Field type="text" name="conPass" className="cName_confirm_newpassword_input" placeholder="Type confirm password..." />
          <Field type="text" name="oldPass" className="cName_oldpassword_input" placeholder="Type your old password ..." />
          <Field type="text" name="verify" className="cName_verifycode_input" placeholder="Type verify code ..." />
          <button className="cName-confirmbutton" disabled={isSubmitting}>Confirm</button>
        </Form>
      )}
    </Formik>
  );
}

export default ChangeProfileForm;
