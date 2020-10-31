import React, { useState } from 'react';
import Navigtion from '../component/NavBar';
import ThreadService from '../service/ThreadService';

export default function ReportList(userID: string) {
  const [report, setReport] = useState<any>({});

  const fetchReport = () => {
    ThreadService.fetchReportThread()
  };

  const temp = {
    "margin": "10px"
  }

  return(
    <div>
      <Navigtion />
      <div style={ temp }>
        <h1>Report list</h1>
      </div>
    </div>
  );
}