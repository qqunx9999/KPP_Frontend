import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/CreateThread.css';

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
            <div className="topicBlackFrameCreateThread">
              <div className="topicTextCreateThread">Topic : </div>
              <Field type="input" name="topic" className="inputTopicNameCreateThread" placeholder="Topic name..." style={{ width:"980px" , height:"60px" }} />
            </div>
            <div className="tagsBlackFrameCreateThread">
            <div className="tagsTextCreateThread ">Tags : </div>
              <button className="needHelpFrameCreateThread">
                <Field type="checkbox" name="help" className="needHelpClickBoxCreateThread" />
                <div className="needHelpTextCreateThread">Need Help</div>
              </button>
              <button className="foodFrameCreateThread">
                <Field type="checkbox" name="food" className="foodClickBoxCreateThread" /> 
                <div className="foodTextCreateThread">Food</div>
              </button>
              <button className="newsFrameCreateThread">
                <Field type="checkbox" name="news" className="newsClickBoxCreateThread" /> 
                <div className="newsTextCreateThread">News</div>
              </button>
              <button className="facultyFrameCreateThread">
                <Field type="checkbox" name="faculty" className="facultyClickBoxCreateThread" /> 
                <div className="facultyTextCreateThread">Faculty</div>
              </button>
              <button className="questionFrameCreateThread">
                <Field type="checkbox" name="question" className="questionClickBoxCreateThread" /> 
                <div className="questionTextCreateThread"> Question</div>
              </button>
              <button className="sharingFrameCreateThread">
                <Field type="checkbox" name="share" className="sharingClickBoxCreateThread" /> 
                <div className="sharingTextCreateThread">Sharing </div>
              </button>
              <button className="complainFrameCreateThread">
                <Field type="checkbox" name="complain" className="complainClickBoxCreateThread" /> 
                <div className="complainTextCreateThread">Complain</div>
              </button>
              <button className="nonsenseFrameCreateThread">
                <Field type="checkbox" name="nonsense" className="nonsenseClickBoxCreateThread" /> 
                <div className="nonsenseTextCreateThread">Nonsense</div>
              </button>
            </div>
            <div className="placeYourContentFrameCreateThread">
              <div className="toolsPlaceYourContentCreateThread">
                <button className="frameBoldLettersToolsPlaceYourContentCreateThread">
                  <div className="createthread-cha">
                    <b>B</b>
                  </div>
                </button>
                <button className="frameItalicLettersToolsPlaceYourContentCreateThread">
                  <div className="createthread-cha">
                    <i>I</i>
                  </div>
                </button>
                <button className="frameSizeToolsPlaceYourContentCreateThread">
                  <div className="textSizeToolsPlaceYourContentCreateThread">Size </div>
                  <Field type="size" name="size" className="inputSizeCreateThread" style={{ width:"50px" , height:"35px" }} />
                </button>
              </div>
              <div className="placeYourContentTextCreateThread">Place your content : </div>
              <Field type="input" name="comment" className="inputContentCreateThread" style={{ width:"1140px" , height:"480px" }} />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ThreadForm;