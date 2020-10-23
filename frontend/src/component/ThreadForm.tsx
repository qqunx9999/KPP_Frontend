import React from 'react';
import { Formik, Form, Field } from 'formik';

const ThreadForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ topic: '', size: '', help: '', food: '', news: '', faculty: '', question: '', share: '', complain: '', nonsense: '', comment: '' }}
        onSubmit={ async (values, actions) => {
          actions.setSubmitting(false);
        } }
      >
        {({ isSubmitting }) => (
          <Form>
            <h6>Topic : </h6>
            <Field type="input" name="topic" placeholder="Topic name..." />
            <h6>Tags : </h6>
            <Field type="checkbox" name="help" /> Need Help &nbsp;
            <Field type="checkbox" name="food" /> Food &nbsp;
            <Field type="checkbox" name="news" /> News &nbsp;
            <Field type="checkbox" name="faculty" /> Faculty <br />
            <Field type="checkbox" name="question" /> Question &nbsp;
            <Field type="checkbox" name="share" /> Sharing &nbsp;
            <Field type="checkbox" name="complain" /> Complain &nbsp;
            <Field type="checkbox" name="nonsense" /> Nonsense <br />
            <button><b>B</b></button>
            <button><i>I</i></button>
            <h6>Size : </h6>
            <Field type="size" name="size" />
            <h6>Place your content : </h6>
            <Field type="input" name="comment" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ThreadForm;