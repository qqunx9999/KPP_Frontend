import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
import '../CSSsource/SearchThread.css';
import * as Yup from 'yup';

const SearchThreadForm = () => {
  return (
    <div>
      <div>
        <div className="frameResultSearchThread"></div>
        <Formik
          initialValues={{ keyword: '', tags: '', sort: '', faculty: '' }}
          validationSchema={Yup.object({
            keyword: Yup.string()
              .required('Please type some keyword'),
            sort: Yup.string()
              .required('Required sort type')
          })}
          onSubmit={async (values, actions) => {
            localStorage.removeItem('tags');
            localStorage.removeItem('keyword');
            localStorage.removeItem('faculty');
            localStorage.removeItem('sort');
            localStorage.removeItem('finish');
            localStorage.setItem('tags', values.tags);
            localStorage.setItem('keyword', values.keyword);
            localStorage.setItem('faculty', values.faculty);
            localStorage.setItem('sort', values.sort);
            localStorage.setItem('finish', 'yes');
            window.location.reload();
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
               <div className="search-keywordrequired"><ErrorMessage name="keyword" /></div>
               <div className="search-sortrequired"><ErrorMessage name="sort" /></div>               
              <div className="frameSearchAndTopicSearchThread">
                <div className="searchTextSearchAndTopicSearchThread">Search :</div>
                <Field type="text" name="keyword" className="inputKeywordSearchThread" placeholder="Enter your keyword" style={{ width: "800px", height: "60px", fontSize: "30px" }} />
                
                <button disabled={isSubmitting} className="btn btn-success frameSubmitSearchThread">
                  <div className="btn textSubmitSearchThread"> Submit </div>
                </button>
                <div className="topicTextSearchThread">Topic :</div>
                <div className="needHelpFrameSearchThread">
                  <Field type="checkbox" name="tags" value="help" className="needHelpClickBoxSearchThread" />
                  <div className="needHelpTextSearchThread"> Need Help </div>
                </div>
                <div className="foodFrameSearchThread">
                  <Field type="checkbox" name="tags" value="food" className="foodClickBoxSearchThread" />
                  <div className="foodTextSearchThread">Food </div>
                </div>
                <div className="newsFrameSearchThread">
                  <Field type="checkbox" name="tags" value="news" className="newsClickBoxSearchThread" />
                  <div className="newsTextSearchThread"> News </div>
                </div>
                <button className="facultyFrameSearchThread">
                  <Dropdown>
                    <Dropdown.Toggle className="facultyTextSearchThread" variant="green">
                      <div>Faculty</div>
                    </Dropdown.Toggle>
                    <div style={{ overflow: "hidden" }}>
                      <div onClick={e => e.stopPropagation()}>
                        <Dropdown.Menu className="dropdownframef">
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="veterianry" />
                            <div className="facultySubTextSearchThread">Veterinary</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="vet-techs" />
                            <div className="facultySubTextSearchThread">Vet-techs</div> 
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="engineering" />
                            <div className="facultySubTextSearchThread">Engineering</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="agriculture" />
                            <div className="facultySubTextSearchThread">Agriculture</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="fisheries" />
                            <div className="facultySubTextSearchThread">Fisheries</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="education" />
                            <div className="facultySubTextSearchThread">Education</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="humanities" />
                            <div className="facultySubTextSearchThread"> Humanities</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="business" />
                            <div className="facultySubTextSearchThread"> Business</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="economics" />
                            <div className="facultySubTextSearchThread"> Economics</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="forestry" />
                            <div className="facultySubTextSearchThread"> Forestry</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="ag-industry" />
                            <div className="facultySubTextSearchThread"> Ag-industry</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="social" />
                            <div className="facultySubTextSearchThread"> Social</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="science" />
                            <div className="facultySubTextSearchThread"> Science</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="environment" />
                            <div className="facultySubTextSearchThread"> Enviroment</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="architecture" />
                            <div className="facultySubTextSearchThread"> Architecture</div>
                          </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                        </Dropdown.Menu>
                      </div>
                    </div>
                  </Dropdown>
                </button>
                <div className="questionFrameSearchThread">
                  <Field type="checkbox" name="tags" value="question" className="questionClickBoxSearchThread" />
                  <div className="questionTextSearchThread"> Question</div>
                </div>
                <div className="sharingFrameSearchThread">
                  <Field type="checkbox" name="tags" value="sharing" className="sharingClickBoxSearchThread" />
                  <div className="sharingTextSearchThread">Sharing</div>
                </div>
                <div className="complainFrameSearchThread">
                  <Field type="checkbox" name="tags" value="complain" className="complainClickBoxSearchThread" />
                  <div className="complainTextSearchThread">Complain</div>
                </div>
                <div className="nonsenseFrameSearchThread">
                  <Field type="checkbox" name="tags" value="nonsense" className="nonsenseClickBoxSearchThread" />
                  <div className="nonsenseTextSearchThread">Nonsense</div>
                </div>

                <button className="frameSortBySearchThread">
                  <Dropdown>

                    <Dropdown.Toggle className="sort-by" variant="dark">
                      <div >Sort By</div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdownframe dropdown-backdrop">
                      <Dropdown.Item className="sortlistframeoldest"><Field type="radio" id="increasescale" name="sort" value="oldest" /><div className="facultySubTextSearchThread"> Oldest</div></Dropdown.Item>
                      <Dropdown.Item className="sortlistframepopular"><Field type="radio" id="increasescale" name="sort" value="popular" /><div className="facultySubTextSearchThread"> Popular</div></Dropdown.Item>
                      <Dropdown.Item className="sortlistframelike"><Field type="radio" id="increasescale" name="sort" value="like" /><div className="facultySubTextSearchThread"> Like</div></Dropdown.Item>
                    </Dropdown.Menu>

                  </Dropdown>
                </button>
                
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchThreadForm;