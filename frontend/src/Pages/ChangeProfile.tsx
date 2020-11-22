import React from 'react';
import '../CSSsource/ChangeName.css';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import ChangeProfileForm from '../component/ChangeProfileForm';

function ChangeProfile() {
  const history = useHistory();

    return (
      <div>
        <Navigtion />
        <div className="cName-bigframe">
          <button className="cName_goback_button" onClick={ history.goBack }>Go Back</button>
          <div className="cName-whiteframe">
            <div className="cName-change-name">Change Name</div>
            <div className="cName-blackframe">
              <div className="cName-new-name_">New Name :</div>
              <ChangeProfileForm />
            </div>
          </div>
        </div>  
  
      </div>
    );
  }
  
  export default ChangeProfile;
