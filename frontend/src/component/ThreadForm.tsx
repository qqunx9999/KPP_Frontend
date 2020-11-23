import React from 'react';
import { Formik, Form, Field } from 'formik';
import AuthService from '../service/AuthService';
import { baseUrl } from '../config/constant';
import '../CSSsource/CreateThread.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';
import TextEditor from './TextEditor';

const ThreadForm = () => {
  const history = useHistory();
  let message = localStorage.message
  console.log(message)

  return (
    <div>
      <Formik
        initialValues={{
          tag: [], topic: '', content: '', size: '', faculty: []
        }}
        onSubmit={async (values, actions) => {
          // console.log(values.content)
          const sendOption = {
            "userID": AuthService.getUserID(),
            "topic": values.topic,
            "tag_arr": values.tag,
            "content": values.content,
            "image_arr": []
          };
          // console.log(sendOption);
          const res = await fetch(`${baseUrl}/threads`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${ localStorage.token }`
            },
            body: JSON.stringify(sendOption)
          });
          console.log(res);
          if(res) {
            history.push('/Home');
            localStorage.removeItem("message")
          };
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="topicBlackFrameCreateThread">
              <div className="topicTextCreateThread">Topic :</div>
              <label>
                <Field type="text" name="topic" className="inputTopicNameCreateThread" placeholder="&nbsp; Topic name..." style={{ width: "980px", height: "65px" ,fontSize: "30px"}} />
              </label>
            </div>
            <div className="tagsBlackFrameCreateThread">
              <div className="tagsTextCreateThread">Tags :</div>
              <label>
                <button className="needHelpFrameCreateThread">
                  <Field type="checkbox" name="tag" value="help" className="needHelpClickBoxCreateThread" />
                  <div className="needHelpTextCreateThread"> Need Help </div>
                </button>
              </label>
              <label>
                <button className="foodFrameCreateThread">
                  <Field type="checkbox" name="tag" value="food" className="foodClickBoxCreateThread" />
                  <div className="foodTextCreateThread"> Food </div>
                </button>
              </label>
              <label>
                <button className="newsFrameCreateThread">
                  <Field type="checkbox" name="tag" value="news" className="newsClickBoxCreateThread" />
                  <div className="newsTextCreateThread"> News </div>
                </button>
              </label>
              <label>
                <button className="facultyFrameCreateThread">
                  <div className="facultyTextCreateThread"> Faculty </div>
                  <Dropdown>
                    <Dropdown.Toggle variant="green">          </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="veterinary" /> Veterinary</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="vettechs" /> Vet-techs</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="engineering" /> Engineering</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="agriculture" /> Agriculture</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="fisheries" /> Fisheries</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="education" /> Education</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="humanities" /> Humanities</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="business" /> Business</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="economics" /> Economics</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="forestry" /> Forestry</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="agindustry" /> Ag-industry</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="social" /> Social</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="science" /> Science</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="enviroment" /> Enviroment</Dropdown.Item>
                      <Dropdown.Item><Field type="checkbox" name="faculty" value="architecture" /> Architecture</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </button>
              </label>
              <label>
                <button className="questionFrameCreateThread">
                  <Field type="checkbox" name="tag" value="question" className="questionClickBoxCreateThread" />
                  <div className="questionTextCreateThread"> Question </div>
                </button>
              </label>
              <label>
                <button className="sharingFrameCreateThread">
                  <Field type="checkbox" name="tag" value="sharing" className="sharingClickBoxCreateThread" />
                  <div className="sharingTextCreateThread"> Sharing </div>
                </button>
              </label>
              <label>
                <button className="complainFrameCreateThread">
                  <Field type="checkbox" name="tag" value="complain" className="complainClickBoxCreateThread" />
                  <div className="complainTextCreateThread"> Complain </div>
                </button>
              </label>
              <label>
                <button className="nonsenseFrameCreateThread">
                  <Field type="checkbox" name="tag" value="nonsense" className="nonsenseClickBoxCreateThread" />
                  <div className="nonsenseTextCreateThread">Nonsense</div> 
                </button>
              </label>
            </div>
            <div className="placeYourContentFrameCreateThread">
              <div className="placeYourContentTextCreateThread">Place your content :</div>

                <button disabled={isSubmitting} className="btn btn-success frameSendCreateThread" type="submit" value={ localStorage.message }>
                  <div className="textSendToolsPlaceYourContentCreateThread"> Send </div>
                </button>
              
              <label>
                <Field type="text" name="content" className="inputContentCreateThread" style={{ width: "1135px", height: "500px" }} />
                <div className="inputContentCreateThread">
                  {/* <TextEditor /> */}
                </div>
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ThreadForm;