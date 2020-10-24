import { Field, Form, Formik } from 'formik';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';

const SearchThread_new = () => {
  const history = useHistory();

  const temp = {
    "margin": "10px",
  };

  return (
    <div>
      <Navigtion />
      <div style={ temp }>
        <button onClick={ history.goBack }>Go Back</button>
        <Formik
          initialValues={{ keyword: '', help: '', food: '', news: '', faculty: '', question: '', share: '', complain: '', nonsense: '', oldest: '', popular: '', like: '' }}
          onSubmit={ async (values, actions) => {
            actions.setSubmitting(false);
          } }
        >
          {({ isSubmitting }) => (
            <Form>
              <h6>Search :</h6>
              <Field type="input" name="keyword" placeholder="Enter your keyword" />
              <button disabled={ isSubmitting }>Submit</button>
              <h6>Topic:</h6>
              <Field type="checkbox" name="help" /> Help &nbsp;
              <Field type="checkbox" name="food" /> Food &nbsp;
              <Field type="checkbox" name="news" /> News &nbsp;
              <Field type="checkbox" name="faculty" /> Faculty <br />
              <Field type="checkbox" name="question" /> Question &nbsp;
              <Field type="checkbox" name="sharing" /> Sharing &nbsp;
              <Field type="checkbox" name="complain" /> Complain &nbsp;
              <Field type="checkbox" name="nonsense" /> Nonsense
              <Dropdown>
                <Dropdown.Toggle variant="dark">Sort</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Field type="checkbox" name="oldest" /> Oldest</Dropdown.Item>
                  <Dropdown.Item><Field type="checkbox" name="popular" /> Popular</Dropdown.Item>
                  <Dropdown.Item><Field type="checkbox" name="like" /> Like</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchThread_new;