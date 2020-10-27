import React from 'react';
import { Formik, Form, Field } from 'formik';
import AuthService from '../service/AuthService';
import { baseUrl } from '../config/constant';
import '../CSSsource/CreateThread.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ThreadForm = () => {
  const history = useHistory();

  return (
    <div>
      <Formik
        initialValues={{
          tag: [], topic: '', content: '', size: '', text_type: [], facultu: []
        }}
        onSubmit={async (values, actions) => {
          const text = { 'bold': values.text_type[0], 'italic': values.text_type[1], 'font': 'Arial', 'size': Number(values.size) }
          const sendOption = {
            "userID": AuthService.getUserID(),
            "topic": values.topic,
            "tag_arr": values.tag,
            "content": values.content,
            "text_type": text,
            "image_arr": []
          };
          const res = await fetch(`${baseUrl}/threads`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendOption)
          })
            .then(() => history.push('/Home'));
          actions.setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="topicBlackFrameCreateThread">
              <div className="topicTextCreateThread">Topic :</div>
              <label>
                <Field type="input" name="topic" className="inputTopicNameCreateThread" placeholder="&nbsp; Topic name..." style={{ width: "980px", height: "65px" }} />
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
                  {/* <Field type="checkbox" name="tag" value="faculty" className="facultyClickBoxCreateThread" /> */}
                  {/* <div className="facultyTextCreateThread"> Faculty </div> */}
                  <Dropdown>
                    <Dropdown.Toggle variant="green">Faculty</Dropdown.Toggle>
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
                  <div className="nonsenseTextCreateThread"></div> Nonsense
                </button>
              </label>
            </div>
            <div className="placeYourContentFrameCreateThread">
              <div className="placeYourContentTextCreateThread">Place your content :</div>
              <div className="toolsPlaceYourContentCreateThread">
                <label>
                  <button className="frameBoldLettersToolsPlaceYourContentCreateThread">
                    <Field type="checkbox" name="text_type" value="bold" className="cthread-square" />
                    <div className="createthread-cha" > &nbsp;  <b>B</b> </div>
                  </button>
                </label>
                <label>
                  <button className="frameItalicLettersToolsPlaceYourContentCreateThread" >
                    <Field type="checkbox" name="text_type" value="italic" className="cthread-square" />
                    <div className="createthread-cha" > <i>I</i> </div>
                  </button>
                </label>

                <label>
                  <div className="frameSizeToolsPlaceYourContentCreateThread">
                    <div className="textSizeToolsPlaceYourContentCreateThread">Size</div>
                    <Field type="input" name="size" className="inputSizeCreateThread" style={{ width: "60px", height: "40px" }} />
                  </div>
                </label>

                <button disabled={isSubmitting} className="frameSendCreateThread" type="submit">
                  <div className="textSendToolsPlaceYourContentCreateThread"> Send </div>
                </button>
              </div>
              <label>
                <Field type="input" name="content" className="inputContentCreateThread" style={{ width: "1135px", height: "500px" }} />
              </label>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ThreadForm;