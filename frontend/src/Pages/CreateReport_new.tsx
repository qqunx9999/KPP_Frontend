import React from 'react';
import { useHistory, useParams } from 'react-router';
import ReportForm from '../component/ReportForm';

function CreateReport_new() {
  const history = useHistory();
  const { ThreadID } = useParams();

  const temp = {
    "margin": "10px",
  };

  return (
    <div style={temp}>
      <h1>Report</h1>
      <button onClick={history.goBack}>Go Back</button>
      <ReportForm />
      <p>Your report will b send to administrator. We will give the consideration about your report within 2 - 3 days.</p>
    </div>
  );
}

export default CreateReport_new;