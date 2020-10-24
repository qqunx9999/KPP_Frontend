import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import { Userinfo } from '../interfaces/userInfoEntity';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';

function Setting_new() {
  const [user, setUser] = useState<Userinfo[]>([]);
  const history = useHistory();
  const [login, setLogin] = useState<boolean>(false);

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);

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
      { !login && history.push('/') }
      <Navigtion />
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