import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import { Userinfo } from '../interfaces/userInfoEntity';
import UserService from '../service/UserService';
import '../CSSsource/Profile.css';

function Profile_new() {
  const [user, setUser] = useState<Userinfo[]>([]);
  const history = useHistory();

  

  const fetchUser = () => {
    UserService.fetchUser()
      .then(obj => {
        setUser(obj);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <Navigtion />
      <div className="backgroundUserProfile">
        <div className="frameWhiteUserProfile">
          <div className="frameBlackUserProfile">
            <div className="frameLeftGrayUserProfile">
              <div className="textJoinUserProfile">Join</div>
            </div>
            <div className="textProfileUserProfile">Profile</div>
            <button className="frameGobackUserProfile" onClick={history.goBack}>
              <div className="textGobackUserProfile"> Go Back</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_new;