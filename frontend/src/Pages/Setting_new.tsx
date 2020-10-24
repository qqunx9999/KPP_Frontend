import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Userinfo } from '../interfaces/userInfoEntity';
import UserService from '../service/UserService';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function Setting_new(props: LoginFormProps) {
  const [user, setUser] = useState<Userinfo[]>([]);
  const history = useHistory();

  const temp = {
    "margin": "10px",
  };

  const fetchUser = () => {
    UserService.fetchUser();
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log();

  return (
    <div>
      <div style={temp}>
        <button onClick={history.goBack}>Go Back</button>
        <h1>Setting</h1>
        Name: <br />
        Username: <br />
        Email: <br />
        Your Quote:
      </div>
    </div>
  );
}

export default Setting_new;