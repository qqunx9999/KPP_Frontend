import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from "react-router-dom";
import '../CSSsource/ReadReport.css';
import Navigtion from '../component/NavBar';
import ReadReportForm from '../component/ReadReportForm';
import AuthService from '../service/AuthService';

function ReadReport() {
  const history = useHistory();
  const [login, setLogin] = useState<boolean>(false);

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  const temp = {
    "margin": "10px",
  };

  return (
    <div style={ temp }>
      { login ? null : history.push('/') }
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