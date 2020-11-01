import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import UserService from '../service/UserService';
import '../CSSsource/Profile.css';
import { join } from 'path';

function Profile_new() {
  const [user, setUser] = useState<any>({});
  const history = useHistory();

  const fetchUser = () => {
    UserService.fetchUser()
      .then(obj => setUser(obj))
  };

  function dateCount(timeString: string) {
    const day = new Date(timeString);
    const date = String(day.getDay());
    const month = String(day.getMonth());
    const year = String(day.getFullYear());
    const joinTime = date + "/" + month + "/" + year;
    return joinTime;
  }

  useEffect(() => {
    fetchUser();
  }, []); console.log(user)

  return (
    <div>
      <Navigtion />
      <div className="backgroundUserProfile">
        <div className="frameWhiteUserProfile">
          <div className="frameBlackUserProfile">
            <div className="frameLeftGrayUserProfile">
              <div className="textJoinUserProfile">Join</div>
              <div className="textJoinedDateUserProfile">{dateCount(user.date_join)}</div>
              <div className="userRankUserProfile">{user.rank}</div>
              <div className="userExpUserProfile">{user.exp}</div>
            </div>
            <div className="textProfileUserProfile">Profile</div>
            <div className="usernameUserProfile">{user.name}</div>
            <div className="userQuotationUserProfile">{user.description}</div>
            <div>{user.username}</div>
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