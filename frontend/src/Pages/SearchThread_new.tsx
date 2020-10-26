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
          initialValues={{ keyword: '', help: '', food: '', news: '', faculty: '', question: '', share: '', complain: '', nonsense: '', oldest: '', popular: '', like: '' , 
          veterinary: '', vettechs: '' , engineering: '' , agriculture: '', fisheries: '' , education: '', humanities: '', business: '' , economics: '', forestry: '' ,
          agindustry: '' , social: '' , science: '' , enviroment: '' , architecture: ''}}
          onSubmit={ async (values, actions) => {
            actions.setSubmitting(false);
          } }
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="frameSearchAndTopicSearchThread">
              <div className="searchTextSearchAndTopicSearchThread">Search :</div>
              <Field type="input" name="keyword" className="inputKeywordSearchThread" placeholder="Enter your keyword" style={{ width:"800px" , height:"60px" }} />
              <button  disabled={ isSubmitting  } className="frameSubmitSearchThread">
                <div className="textSubmitSearchThread"> Submit </div>
              </button>             
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
                {/* <Field type="checkbox" name="faculty" className="facultyClickBoxSearchThread" />  */}
                <Dropdown>
                  <Dropdown.Toggle variant="green">Faculty</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item><Field type="checkbox" name="veterinary" /> Veterinary</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="vettechs" /> Vet-techs</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="engineering" /> Engineering</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="agriculture" /> Agriculture</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="fisheries" /> Fisheries</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="education" /> Education</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="humanities" /> Humanities</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="business" /> Business</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="economics" /> Economics</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="forestry" /> Forestry</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="agindustry" /> Ag-industry</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="social" /> Social</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="science" /> Science</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="enviroment" /> Enviroment</Dropdown.Item>
                    <Dropdown.Item><Field type="checkbox" name="architecture" /> Architecture</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
                {/* <div className="facultyTextSearchThread"></div>                 */}
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
              <button className="frameSortBySearchThread">
              <Dropdown>
                <Dropdown.Toggle variant="dark">Sort</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Field type="checkbox" name="oldest" /> Oldest</Dropdown.Item>
                  <Dropdown.Item><Field type="checkbox" name="popular" /> Popular</Dropdown.Item>
                  <Dropdown.Item><Field type="checkbox" name="like" /> Like</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              </button>
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