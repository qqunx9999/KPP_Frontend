import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Dropdown } from 'react-bootstrap';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import '../CSSsource/SearchThread.css';
import ThreadService from '../service/ThreadService';

const SearchThread_new = () => {
  const history = useHistory();  
  const [search, setSearch] = useState<any>([]);

  const searching = () => {
    ThreadService.searchThread(localStorage.keyword, localStorage.tags, localStorage.sort, 8, 1)
      .then(obj => {
        setSearch(obj)
      });
    localStorage.removeItem("keyword");
    localStorage.removeItem("tags");
    localStorage.removeItem("sort");
  }

  useEffect(() => {
    searching();
  }, []);

  return (
    <div>
      <Navigtion />
      <div className="backgroundSearchThread">
        <div className="frameResultSearchThread"></div>
        <button className="btn btn-success sThread_goback_buttonn" onClick={ history.goBack }> Go Back</button>
        <Formik
          initialValues={{ keyword: '', tags: '', sort: '', faculty: '' }}
          onSubmit={async (values, actions) => {
            localStorage.setItem("keyword", values.keyword);
            localStorage.setItem("tags", values.tags);
            localStorage.setItem("sort", values.sort);
            console.log(localStorage.tags)
            actions.setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="frameSearchAndTopicSearchThread">
                <div className="searchTextSearchAndTopicSearchThread">Search :</div>
                <Field type="input" name="keyword" className="inputKeywordSearchThread" placeholder="Enter your keyword" style={{ width: "800px", height: "60px", fontSize: "30px" }} />
                <button disabled={isSubmitting} onClick={searching} className="btn btn-success frameSubmitSearchThread">
                  <div className="btn textSubmitSearchThread"> Submit </div>
                </button>
                <div className="topicTextSearchThread">Topic :</div>
                <button className="needHelpFrameSearchThread">
                  <Field type="checkbox" name="tags" value="help" className="needHelpClickBoxSearchThread" />
                  <div className="needHelpTextSearchThread">
                    &nbsp; &nbsp; Need Help
                </div>
                </button>
                <button className="foodFrameSearchThread">
                  <Field type="checkbox" name="tags" value="food" className="foodClickBoxSearchThread" />
                  <div className="foodTextSearchThread">
                    Food
                  </div>
                </button>
                <button className="newsFrameSearchThread">
                  <Field type="checkbox" name="tags" value="news" className="newsClickBoxSearchThread" />
                  <div className="newsTextSearchThread">
                    News
                </div>
                </button>
                <button className="facultyFrameSearchThread">
                  {/* <Field type="checkbox" name="faculty" className="facultyClickBoxSearchThread" />  */}
                  <Dropdown>
                    <Dropdown.Toggle className="facultyTextSearchThread" variant="green">
                      {/* <Field type="checkbox" name="faculty" className="newsClickBoxSearchThread"/>  */}
                      <div>Faculty</div>
                    </Dropdown.Toggle>
                    <div style={{ overflow: "hidden" }}>
                      <div onClick={e => e.stopPropagation()}>
                        <Dropdown.Menu className="dropdownframef">
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="veterianry" /><div className="facultySubTextSearchThread">Veterinary</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="vet-techs" /><div className="facultySubTextSearchThread">Vet-techs</div> </Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="engineering" /><div className="facultySubTextSearchThread">Engineering</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="agriculture" /><div className="facultySubTextSearchThread">Agriculture</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="fisheries" /><div className="facultySubTextSearchThread">Fisheries</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="education" /><div className="facultySubTextSearchThread">Education</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="humanities" /><div className="facultySubTextSearchThread"> Humanities</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="business" /><div className="facultySubTextSearchThread"> Business</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="economics" /><div className="facultySubTextSearchThread"> Economics</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="forestry" /><div className="facultySubTextSearchThread"> Forestry</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="ag-industry" /><div className="facultySubTextSearchThread"> Ag-industry</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="social" /><div className="facultySubTextSearchThread"> Social</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="science" /><div className="facultySubTextSearchThread"> Science</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="environment" /><div className="facultySubTextSearchThread"> Enviroment</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="architecture" /><div className="facultySubTextSearchThread"> Architecture</div></Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                        </Dropdown.Menu>
                      </div>
                    </div>
                  </Dropdown>
                </button>
                <button className="questionFrameSearchThread">
                  <Field type="checkbox" name="tags" value="question" className="questionClickBoxSearchThread" />
                  <div className="questionTextSearchThread"> Question</div>
                </button>
                <button className="sharingFrameSearchThread">
                  <Field type="checkbox" name="tags" value="sharing" className="sharingClickBoxSearchThread" />
                  <div className="sharingTextSearchThread">Sharing</div>
                </button>
                <button className="complainFrameSearchThread">
                  <Field type="checkbox" name="tags" value="complain" className="complainClickBoxSearchThread" />
                  <div className="complainTextSearchThread">Complain</div>
                </button>
                <button className="nonsenseFrameSearchThread">
                  <Field type="checkbox" name="tags" value="nonsense" className="nonsenseClickBoxSearchThread" />
                  <div className="nonsenseTextSearchThread">Nonsense</div>
                </button>

                <button className="frameSortBySearchThread">
                  <Dropdown>

                    <Dropdown.Toggle className="sort-by" variant="dark">
                      <div >Sort By</div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdownframe">
                      <Dropdown.Item className="sortlistframeoldest"><Field type="checkbox" id="increasescale" name="oldest" /><div className="facultySubTextSearchThread"> Oldest</div></Dropdown.Item>
                      <Dropdown.Item className="sortlistframepopular"><Field type="checkbox" id="increasescale" name="popular" /><div className="facultySubTextSearchThread"> Popular</div></Dropdown.Item>
                      <Dropdown.Item className="sortlistframelike"><Field type="checkbox" id="increasescale" name="like" /><div className="facultySubTextSearchThread"> Like</div></Dropdown.Item>
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

export default SearchThread_new;