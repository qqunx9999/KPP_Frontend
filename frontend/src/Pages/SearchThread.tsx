import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigtion from '../component/NavBar';
import { useHistory } from 'react-router';
import '../CSSsource/SearchThread.css';
import ThreadService from '../service/ThreadService';
import SearchThreadForm from '../component/SearchThreadForm';

const SearchThread_new = () => {
  const history = useHistory();
  const [pageInfo, setPageInfo] = useState<any>([]);
  const [threads, setThreads] = useState<any>([{}]);

  function QueryThread() {
    if (localStorage.finish === 'yes') {
      let tags = "";
      if (localStorage.tags === "") {
        if (localStorage.faculty === "") {
          tags = '%20';
        } else {
          tags = localStorage.faculty;
        };
      } else {
        if (localStorage.faculty === "") {
          tags = localStorage.tags;
        } else {
          tags = localStorage.tags + ',' + localStorage.faculty;
        };
      };
      const keyword = localStorage.keyword;
      const sort = localStorage.sort;
      ThreadService.searchThread(keyword, tags, sort, 8, 1)
        .then(res => {
          setPageInfo(res.pageInfo);
          setThreads(res.threads);
        });
    };
  }

  useEffect(() => {
    QueryThread()
  }, []);

  console.dir(threads);

  return (
    <div>
      {/* <Navigtion /> */}
      <div className="backgroundSearchThread">
        <button className="btn btn-success sThread_goback_buttonn" onClick={history.goBack}> Go Back</button>
        <SearchThreadForm />
      </div>
      {threads.map((item: any) => {
        if (item.topic !== undefined) {
          return (
            <div>{console.log(item.topic)}
              <h1>{item.topic}</h1>
            </div>
          );
        } else {
          return (
            <div>
              Not have any thread that accept that query !
            </div>
          );
        }
      })}
    </div>
  );
};

export default SearchThread_new;