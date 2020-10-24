import React from 'react';
import '../CSSsource/ChangeName.css';
import { useHistory, useParams } from 'react-router';
import Navigtion from '../component/NavBar';
import { Formik, Form, Field } from 'formik';
import ChangeNameForm from '../component/ChangeNameForm';

function ChangeName() {

    const history = useHistory();
    const temp = {
      "margin": "10px",
    };

    return (
      <div style={ temp }>
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