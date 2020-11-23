import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import UserService from '../service/UserService';
import '../CSSsource/Setting.css';
import { Link } from 'react-router-dom';

function Setting() {
  const [user, setUser] = useState<any>({});
  const history = useHistory();

  const fetchUser = () => {
    UserService.fetchUser()
      .then(obj => setUser(obj))
  };

  useEffect(() => {
    fetchUser();
  }, []);
  // console.dir(user.quote)
  return (
    <div>
      <Navigtion />
      <div className="backgroundUserSetting">
        <div className="frameWhiteUserSetting">
          <button className="frameGoBackUserProfile btn btn-success" onClick={history.goBack}>
            <div className="textGoBackUserProfile"> Go Back</div>
          </button>
          <div className="textSettingUserSetting">Setting</div>
          <div className="frameBlackUserSetting">
            <div className="textNameUserProfile">
              Name : 
              <div className="nameUserProfile">
                {user.name}
              </div>
            </div>
            <div className="textUsernameUserProfile"> 
              Username : 
              <div className="usernameUserProfile">
                {user.username}
              </div>
            </div>
            <div className="textEmailUserProfile"> 
              Email: 
              <div className="emailUserProfile">  
                {user.email}
              </div>
            </div>
            <div className="textYourquoteUserProfile"> 
              Your Quote: 
              <div className="userquoteUserProfile">
                {/* {console.log(user.description)} */}
                {user.quote === "" ? <i>Not have any quote</i> : user.quote}
              </div>
            </div>
          
          </div>
          <Link to="/Setting/ChangeProfile">
            <div className="frameChangePasswordUserProfile btn btn-success">
              <div className="textChangePasswordUserProfile">
                Edit profile
            </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Setting;
