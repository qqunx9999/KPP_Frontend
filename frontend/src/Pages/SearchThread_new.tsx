import { Field, Form, Formik } from 'formik';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import '../CSSsource/SearchThread.css';

const SearchThread_new = () => {
  const history = useHistory();

  const temp = {
    "margin": "10px",
  };

  return (
    <div>
      <Navigtion />
      <div className="backgroundSearchThread">
        <button className="sThread_goback_button" onClick={ history.goBack }>Go Back</button>
        <Formik
          initialValues={{ keyword: '', help: '', food: '', news: '', faculty: '', question: '', share: '', complain: '', nonsense: '', oldest: '', popular: '', like: '' }}
          onSubmit={ async (values, actions) => {
            actions.setSubmitting(false);
          } }
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="frameSearchAndTopicSearchThread">
              <div className="searchTextSearchAndTopicSearchThread">Search :</div>
              <Field type="input" name="keyword" className="inputKeywordSearchThread" placeholder="Enter your keyword" style={{ width:"800px" , height:"60px" }} />
              <button  disabled={ isSubmitting }>Submit</button>
              <div className="topicTextSearchThread">Topic :</div>
              <button className="needHelpFrameSearchThread">
                 <Field type="checkbox" name="help" className="needHelpClickBoxSearchThread" /> 
                <div className="needHelpTextSearchThread">
                  &nbsp; &nbsp; Need Help
                </div>
              </button>
              <button className="foodFrameSearchThread">
                <Field type="checkbox" name="food" className="foodClickBoxSearchThread" /> 
                  <div className="foodTextSearchThread">
                    Food
                  </div>
              </button>
              <button className="newsFrameSearchThread">
                <Field type="checkbox" name="news" className="newsClickBoxSearchThread"/> 
                <div className="newsTextSearchThread">
                  News
                </div>
              </button>
              <button className="facultyFrameSearchThread">
                <Field type="checkbox" name="faculty" className="facultyClickBoxSearchThread" /> 
                <div className="facultyTextSearchThread">Faculty</div>                
              </button>
              <button className="questionFrameSearchThread">
                <Field type="checkbox" name="question" className="questionClickBoxSearchThread" /> 
                <div className="questionTextSearchThread"> Question</div>
              </button>
              <button className="sharingFrameSearchThread">
                <Field type="checkbox" name="sharing" className="sharingClickBoxSearchThread" />
                <div className="sharingTextSearchThread">Sharing</div>
              </button>
              <button className="complainFrameSearchThread">
                <Field type="checkbox" name="complain" className="complainClickBoxSearchThread" /> 
                <div className="complainTextSearchThread">Complain</div>
              </button>
              <button className="nonsenseFrameSearchThread">
                <Field type="checkbox" name="nonsense" className="nonsenseClickBoxSearchThread" />
                <div className="nonsenseTextSearchThread">Nonsense</div>
              </button>
              <Dropdown>
                <Dropdown.Toggle variant="dark">Sort</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Field type="checkbox" name="oldest" /> Oldest</Dropdown.Item>
                  <Dropdown.Item><Field type="checkbox" name="popular" /> Popular</Dropdown.Item>
                  <Dropdown.Item><Field type="checkbox" name="like" /> Like</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </div>
            </Form>
          )}
        </Formik>
        <div className="frameResultSearchThread"></div>
      </div>
    </div>
  );
};

export default SearchThread_new;