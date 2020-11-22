import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import '../CSSsource/Profile.css';
import AuthService from '../service/AuthService';
import { baseUrl } from '../config/constant';
import profilePic from '../Pages/image/Patrick.png'

function Profile() {
  const [user, setUser] = useState<any>([]);
  const history = useHistory();

  const fetchUser = async () => {
    const userID = AuthService.getUserID();
    await fetch(`${baseUrl}/users/${userID}`)
      .then(res => res.json())
      .then(obj => setUser(obj))
  }

  useEffect(() => {
    fetchUser();
  }, [])

  function dateCount(timeString: string) {
    const day = new Date(timeString);
    const date = String(day.getUTCDate());
    const month = String(day.getMonth());
    const year = String(day.getFullYear());
    const joinTime = date + "/" + month + "/" + year;
    return joinTime;
  }

  console.dir(user);

  return (
    <div>
      <Navigtion />
      <div className="backgroundUserProfile">
        <div className="frameWhiteUserProfile">
          <div className="frameBlackUserProfile">
            <div className="frameLeftGrayUserProfile">
              <div className="textJoinUserProfile">Join</div>
              <div className="userRankUserProfile">{user.rank}</div>
              <div className="textJoinedDateUserProfile">{dateCount(user.date_join)}</div>
              <div className="userExpUserProfile">Exp: {user.exp} / 100</div>
              <img src={profilePic} width="156" height="150" className="rounded-circle z-depth-0" alt="" />
            </div>
            <div className="textProfileUserProfile">Profile</div>
            <div style={{"color": "white"}}>{user.name}</div>
            <div className="userQuotationUserProfile">{user.quote}</div>
            <button className="frameGobackUserProfile btn btn-success" onClick={() => history.goBack()}>
              <div className="textGobackUserProfile">Go Back</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
