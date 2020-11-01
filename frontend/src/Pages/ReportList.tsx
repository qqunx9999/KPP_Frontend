import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';
import AuthService from '../service/AuthService';
import ThreadService from '../service/ThreadService';

export default function ReportList() {
  const [reportThread, setReportThread] = useState<any>([[{}]]);
  const [reportThreadInfo, setReportThreadInfo] = useState<any>([[{}]]);
  const [reportComment, setReportComment] = useState<any>([[{}]]);
  const [reportCommentInfo, setReportCommentInfo] = useState<any>([[{}]]);

  const fetchReportThread = () => {
    const userID = AuthService.getUserID();
    ThreadService.fetchReportThread(userID)
      .then(obj => {
        setReportThread(obj.RTs_page);
        setReportThreadInfo(obj.pageInfo);
      });
    ThreadService.fetchReportComment(userID)
      .then(obj => {
        setReportComment(obj.RCs_page);
        setReportCommentInfo(obj.pageInfo);
      });
  };

  function dateCount(timeString: string) {
    const day = new Date(timeString);
    const date = String(day.getDay());
    const month = String(day.getMonth());
    const year = String(day.getFullYear());
    const ReportTime = date + "/" + month + "/" + year;
    return ReportTime;
  }

  useEffect(() => {
    fetchReportThread();
  }, []);

  const temp = {
    "margin": "10px"
  }

  return(
    <div>
      <Navigtion />
      <div style={ temp }>
        <h1>Report list</h1> <br />
        <h2>Thread Report</h2>
        <div>
          Read :&nbsp; { reportThread[1] ? "Yes" : "No" } &nbsp;
          <Link to={`/ReadReport/${ 'thread' }/${ reportThread[0][0].reportTID }`}>Read</Link> &nbsp;
          Report Date : &nbsp; { dateCount(reportThread[0][0].date_create) } &nbsp;
          <button>Approve</button> &nbsp; <button>Disapprove</button>
        </div>
        <hr />
        <h2>Comment Report</h2>
        <div>
          Read :&nbsp; { reportComment[1] ? "Yes" : "No" } &nbsp;
          <Link to={`/ReadReport/${ 'comment' }/${ reportComment[0][0].reportCID }`}>Read</Link> &nbsp;
          Report Date : &nbsp; { dateCount(reportComment[0][0].date_create) } &nbsp;
          <button>Approve</button> &nbsp; <button>Disapprove</button>
        </div>
      </div>
    </div>
  );
}