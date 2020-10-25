import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import { Userinfo } from '../interfaces/userInfoEntity';
import UserService from '../service/UserService';
import '../CSSsource/Setting.css';

function Setting_new() {
  const [user, setUser] = useState<Userinfo[]>([]);
  const history = useHistory();

  

  const fetchUser = () => {
    UserService.fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Navigtion />
      <div className="backgroundUserSetting">
        <div className="frameWhiteUserSetting">
          <button className="frameGoBackUserProfile" onClick={history.goBack}>
            <div className="textGoBackUserProfile"> Go Back</div>
          </button>
          <div className="textSettingUserSetting">Setting</div>
          <div className="frameBlackUserSetting">
            <div className="textNameUserProfile">Name :</div>            
            <div className="textUsernameUserProfile"> Username : </div>
            <div className="textEmailUserProfile"> Email: </div>
            <div className="textYourquoteUserProfile"> Your Quote: </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setting_new;