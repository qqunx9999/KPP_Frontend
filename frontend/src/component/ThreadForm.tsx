import React from 'react';
import { Formik, Form, Field } from 'formik';
import ThreadService from '../service/ThreadService';
import AuthService from '../service/AuthService';
import { baseUrl } from '../config/constant';

const ThreadForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ tag: [], topic: '', content: '', size: '', text_type: [] }}
        onSubmit={ async (values, actions) => {
          const text = { 'bold': values.text_type[0], 'italic': values.text_type[1], 'font': 'Arial', 'size': Number(values.size) }
          fetch(`${ baseUrl }/threads`,{
            method: 'POST',
            headers: {'Contect-Type': 'application/json'},
            body: JSON.stringify({
              'topic': values.topic,
              'userID': AuthService.getUserID(),
              'tag_arr': values.tag,
              'content': values.content,
              'text_type': text,
              'image_arr': []
            })
          }).then(obj => {
            console.log(obj);
          })
          actions.setSubmitting(false);
        } }
      >
        {({ isSubmitting }) => (
          <Form>
            <h6>Topic :</h6>
              <label>
                <Field type="input" name="topic" />
              </label>
              <div>
                <h6>Tags :</h6>
                <label>
                  <Field type="checkbox" name="tag" value="help" />
                  Need Help
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="food" />
                  Food
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="news" />
                  News
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="faculty" />
                  Faculty
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="question" />
                  Question
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="sharing" />
                  Sharing
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="complain" />
                  Complain
                </label>
                <label>
                  <Field type="checkbox" name="tag" value="nonsense" />
                  Nonsense
                </label>
              </div>
              <div>
                <label>
                  <Field type="checkbox" name="text_type" value="bold" />
                  <b>B</b>
                </label>
                <label>
                  <Field type="checkbox" name="text_type" value="italic" />
                  <i>I</i>
                </label>        
              </div>
                <label>
                  <h6>Size :</h6>
                  <Field type="input" name="size" />
                </label> 
              <h6>Place your content :</h6>
              <label>
                <Field type="input" name="content" />
              </label>
            <button disabled={ isSubmitting } type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ThreadForm;