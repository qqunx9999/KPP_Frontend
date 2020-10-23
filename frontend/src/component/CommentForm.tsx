import { Formik, Form, Field } from 'formik';
import React from 'react';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function CommentForm(props: LoginFormProps) {


  return (
    <Formik
      initialValues={{ reply: '', size: '', comment: '' }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      } }
    >
      {({ isSubmitting }) => (
        <Form>
          <h6>Reply to: </h6>
          <Field type="input" name="reply" placeholder="Comment numbers" /> <br />
          <p>*If you do not reply just leave it empty</p>
          <button><b>B</b></button>
          <button><i>I</i></button>
          <h6>Size :</h6>
          <Field type="input" name="size" /> <br />
          <h6>Place your comment :</h6>
          <Field type="input" name="comment" />
          <button disabled={isSubmitting}>Send</button>
        </Form>
      )}
    </Formik>
  );
}

export default CommentForm;