import React from 'react';
import { Formik, Form, Field } from 'formik';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function ReportForm(props: LoginFormProps) {
  return (
    <Formik
      initialValues={{ reportThread: '', reportComment: '', commentNO: '', size: '', comment: '' }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      } }
    >
      {({ isSubmitting }) => (
        <Form>
          <h6>Want to report :</h6>
          <Field type="checkbox" name="reportThread" /> This Thread <br />
          <Field type="checkbox" name="reportComment" /> Comment <Field type="input" name="commentNO" placeholder="Comment NO." /> <br />
          <button><b>B</b></button>
          <button><i>I</i></button>
          <h6>Size :</h6>
          <Field type="input" name="size" />
          <h6>Place your reason :</h6>
          <Field type="input" name="comment" />
          <button disabled={isSubmitting}>Send</button>
        </Form>
      )}
    </Formik>
  );
}

export default ReportForm;