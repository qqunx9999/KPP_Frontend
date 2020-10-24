import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import ReportForm from '../component/ReportForm';
import '../CSSsource/CreateReport.css';
import Navigtion from '../component/NavBar';
import AuthService from '../service/AuthService';

function CreateReport_new() {
  const history = useHistory();
  const { ThreadID } = useParams();
  const [login, setLogin] = useState<boolean>(false);

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

  function redirected(): void {
    history.push('/')
  }

  return (
    <div>
      { login ? null : redirected() }
      <Navigtion />
      <div className="createrp-bigframe">        
        <button className="createrp_goback_button" onClick={ history.goBack }>&lt; Go Back</button>
        <div className="createrp_whiteframe">
          <div className="createrp-report">Report</div>
          <ReportForm />
          <p className="createrp-desc-text">
            Your report will be send to administrator. We will give the consideration about your report within 2 - 3 days.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CreateReport_new;