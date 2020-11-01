import React, { useEffect, useState } from 'react';
import Navigtion from '../component/NavBar';
import AuthService from '../service/AuthService';
import ThreadService from '../service/ThreadService';

export default function ReportList() {
  const [reportThread, setReportThread] = useState<any>({});
  const [reportComment, setReportComment] = useState<any>({});

  const fetchReportThread = () => {
    const userID = AuthService.getUserID();
    ThreadService.fetchReportThread(userID)
      .then(obj => setReportThread(obj));
  };

  const fetchReportComment = () => {
    const userID = AuthService.getUserID();
    ThreadService.fetchReportComment(userID)
      .then(obj => setReportComment(obj));
  };

  useEffect(() => {
    fetchReportThread();
    fetchReportComment();
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
        {  } <hr />
        <h2>Comment Report</h2>
        {  }
      </div>
    </div>
  );
}