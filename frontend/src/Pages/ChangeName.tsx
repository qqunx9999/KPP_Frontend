import React, { useEffect, useState } from 'react';
import '../CSSsource/ChangeName.css';
import { useHistory, useParams } from 'react-router';
import Navigtion from '../component/NavBar';
import { Formik, Form, Field } from 'formik';
import ChangeNameForm from '../component/ChangeNameForm';
import AuthService from '../service/AuthService';

function ChangeName() {
  const [login, setLogin] = useState<boolean>(false);
  const history = useHistory();

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
        <div className="cName-bigframe">
          <button className="cName_goback_button" onClick={ history.goBack }>&lt; Go Back</button>
          <div className="cName-whiteframe">
            <div className="cName-change-name">Change Name</div>
            <div className="cName-blackframe">
              <div className="cName-new-name_">New Name :</div>
              <ChangeNameForm />
            </div>
            <button className="cName-confirmbutton" onClick={ history.goBack }>&lt; Confirm</button>

          </div>
        </div>  
  
      </div>
    );
  }
  
  export default ChangeName;