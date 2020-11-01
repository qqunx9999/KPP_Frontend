import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import UserService from '../service/UserService';
import '../CSSsource/Setting.css';
import { EmailID } from '../component/LoginForm';
import { Link } from 'react-router-dom';

function Setting_new() {
  const [user, setUser] = useState<any>({});
  const history = useHistory();

  const fetchUser = () => {
    UserService.fetchUser()
      .then(obj => setUser(obj))
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
            <div className="textNameUserProfile">Name : {user.name}</div>
            <div className="textUsernameUserProfile"> Username : {user.username}</div>
            <div className="textEmailUserProfile"> Email: {user.email}</div>
            <div className="textYourquoteUserProfile"> Your Quote: {user.description}</div>
          </div>
          <Link to="/Setting/ChangeName">
            <div className="frameChangePasswordUserProfile">
              <div className="textChangePasswordUserProfile">
                Change Password
            </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Setting_new;