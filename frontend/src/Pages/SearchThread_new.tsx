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
                  <Dropdown.Toggle className="foodTextSearchThread" variant="green">
                    <Field type="checkbox" name="faculty" className="newsClickBoxSearchThread"/> 
                    <div>Faculty</div>
                  </Dropdown.Toggle>
                  <div style={{overflow:"hidden"}}>
                  <Dropdown.Menu className="dropdownframef">
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="veterinary" /> Veterinary</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="vettechs" /> Vet-techs</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="engineering" /> Engineering</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="agriculture" /> Agriculture</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="fisheries" /> Fisheries</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="education" /> Education</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="humanities" /> Humanities</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="business" /> Business</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="economics" /> Economics</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="forestry" /> Forestry</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="agindustry" /> Ag-industry</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="social" /> Social</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="science" /> Science</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="enviroment" /> Enviroment</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>
                    <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="architecture" /> Architecture</Dropdown.Item><div style={{height:"10px",position:"relative"}}></div>

                  </Dropdown.Menu>
                  </div>
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
              
              <button  className="frameSortBySearchThread">
              <Dropdown>
              
                <Dropdown.Toggle className="sort-by" variant="dark">
                  <div >Sort By</div>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownframe">
                  <Dropdown.Item className="sortlistframeoldest"><Field type="checkbox" id="increasescale"  name="oldest" /><div> Oldest</div></Dropdown.Item>
                  <Dropdown.Item className="sortlistframepopular"><Field type="checkbox"  id="increasescale" name="popular" /> Popular</Dropdown.Item>
                  <Dropdown.Item className="sortlistframelike"><Field type="checkbox"  id="increasescale" name="like" /> Like</Dropdown.Item>
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