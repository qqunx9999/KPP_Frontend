import React from 'react';
import { useHistory } from 'react-router';
import '../CSSsource/ReadReport.css';
import Navigtion from '../component/NavBar';
import ReadReportForm from '../component/ReadReportForm';

function ReadReport() {
  const history = useHistory();

  const temp = {
    "margin": "10px",
  };

  return (
    <div style={ temp }>
      <Navigtion />
      <div className="rReport-bigframe">
        <button className="rReport_goback_button" onClick={ history.goBack }>&lt; Go Back</button>
        <div className="rReport_whiteframe">
          <div className="rReport_report-id_">
            Report report:id
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