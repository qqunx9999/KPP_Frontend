import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Userinfo } from '../interfaces/userInfoEntity';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';

function Profile_new() {
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
    UserService.fetchUser()
      .then(obj => {
        setUser(obj);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  function redirected(): void {
    history.push('/')
  }

  return (
    <div>
      { login ? null : redirected() }
      <div style={temp}>
        <h1>Profile</h1>
        <button onClick={history.goBack}>Go Back</button>
      </div>
    </div>
  );
}

export default Profile_new;