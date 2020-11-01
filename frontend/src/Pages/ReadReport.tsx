import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import '../CSSsource/ReadReport.css';
import Navigtion from '../component/NavBar';
import ReadReportForm from '../component/ReadReportForm';
import { Thread } from '../interfaces/threadEntity';
import ThreadService from '../service/ThreadService';

function ReadReport() {
  const history = useHistory();
  const { reportID } = useParams();
  const { type } = useParams();
  const [thread, setThread] = useState<any>([{thread:{}, userInfo:{}}]);
  const [comment, setComment] = useState<any[]>([{comment:{}, userInfo:{}}]);

  const fetching = () => {
    if({ type }.type === 'thread') {
      ThreadService.fetchOneThreadReport({ reportID }.reportID)
        .then(obj => {
          setThread(obj)
        });
    } else {
      ThreadService.fetchOneCommentReport({ reportID }.reportID)
        .then(obj => {
          setComment(obj)
        })
    }
  };

  useEffect(() => {
    fetching();
  }, []); console.log(thread[0].status)

  return (
    <div>
      <Navigtion />
      <div className="rReport-bigframe">
        <button className="rReport_goback_button" onClick={ history.goBack }>&lt; Go Back</button>
        <div className="rReport_whiteframe">
          <div className="rReport_report-id_">
            Report { { type }.type }
          </div>
          <ReadReportForm />
          <div className="rReport_status">
            Status : { thread[0].status }
          </div>
        </div>
      </div>

    </div>
  );
}

export default ReadReport;