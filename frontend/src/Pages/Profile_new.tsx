import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Userinfo } from '../interfaces/userInfoEntity';
import UserService from '../service/UserService';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function Profile_new(props: LoginFormProps) {
  const [user, setUser] = useState<Userinfo[]>([]);
  const history = useHistory();

  const temp = {
    "margin": "10px",
  };

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
      <div style={temp}>
        <h1>Profile</h1>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    </div>
  );
}

export default Profile_new;