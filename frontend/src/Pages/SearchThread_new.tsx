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
                  <Dropdown>
                    <Dropdown.Toggle className="foodTextSearchThread" variant="green">
                      <div>Faculty</div>
                    </Dropdown.Toggle>
                    <div style={{ overflow: "hidden" }}>
                      <div onClick={e => e.stopPropagation()}>
                        <Dropdown.Menu className="dropdownframef">
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="veterianry" /> Veterinary</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="vet-techs" /> Vet-techs</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="engineering" /> Engineering</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="agriculture" /> Agriculture</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="fisheries" /> Fisheries</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="education" /> Education</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="humanities" /> Humanities</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="business" /> Business</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="economics" /> Economics</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="forestry" /> Forestry</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="ag-industry" /> Ag-industry</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="social" /> Social</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="science" /> Science</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="environment" /> Enviroment</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
                          <Dropdown.Item className="flistframe"><Field type="checkbox" id="increasescale" name="faculty" value="architecture" /> Architecture</Dropdown.Item><div style={{ height: "10px", position: "relative" }}></div>
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
                      <Dropdown.Item className="sortlistframeoldest"><Field type="checkbox" id="increasescale" name="oldest" /><div> Oldest</div></Dropdown.Item>
                      <Dropdown.Item className="sortlistframepopular"><Field type="checkbox" id="increasescale" name="popular" /> Popular</Dropdown.Item>
                      <Dropdown.Item className="sortlistframelike"><Field type="checkbox" id="increasescale" name="like" /> Like</Dropdown.Item>
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

// import React from 'react';
// import { useFormik } from 'formik';

// export default function SearchThread_new() {
//   const formik = useFormik({
//     initialValues: {
//       search: '',
//       tags: [],
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });console.log(formik.values);

//   return(
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//        <label htmlFor="search">Search</label>
//        <input
//          id="search"
//          name="search"
//          type="text"
//          onChange={formik.handleChange}
//          value={formik.values.search}
//        /> <br />
//        <input
//          id="help"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Help</label> &nbsp;
//        <input
//          id="food"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Food</label> &nbsp;
//        <input
//          id="news"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">News</label> &nbsp;
//        <input
//          id="faculty"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Faculty</label> <br />
//        <input
//          id="question"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Question</label> &nbsp;
//        <input
//          id="sharing"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Sharing</label> &nbsp;
//        <input
//          id="complain"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Complain</label> &nbsp;
//        <input
//          id="nonsense"
//          name="tags"
//          type="checkbox"
//          onChange={formik.handleChange}
//          value={formik.values.tags}
//        />
//        <label htmlFor="tags">Nonsense</label> 
//        <button>Sort By</button>
//        <button type="submit">Submit</button>
//      </form>
//     </div>
//   );
// };