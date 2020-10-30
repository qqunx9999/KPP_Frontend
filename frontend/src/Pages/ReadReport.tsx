import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import '../CSSsource/ReadReport.css';
import Navigtion from '../component/NavBar';
import ReadReportForm from '../component/ReadReportForm';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';

function ReadReport() {
  const history = useHistory();
  const { ThreadID } = useParams();
  const [thread, setThread] = useState<Thread[]>([]);

  const fetchThread = () => {
    ThreadService.fetchLatestThread()
      .then(obj => {
        setThread(obj);
      });
  };

  useEffect(() => {
    fetchThread();
  }, []);

  return (
    <div>
      <Navigtion />
      <div className="rReport-bigframe">
        <button className="rReport_goback_button" onClick={ history.goBack }>&lt; Go Back</button>
        <div className="rReport_whiteframe">
          <div className="rReport_report-id_">
            Report No.1
          </div>
          <ReadReportForm />
          <div className="rReport_status">
            Status : report status
          </div>
        </div>
      </div>

    </div>
  );
}

export default ReadReport;