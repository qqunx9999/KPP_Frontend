import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Navigtion from '../component/NavBar';
import ThreadForm from '../component/ThreadForm';
import AuthService from '../service/AuthService';

function CreateThread_new() {
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

  return (
    <div>
      { login ? null : history.push('/') }
      <Navigtion />
      <div style={temp}>
        <button onClick={history.goBack}>Go back</button>
        <h1>Create Thread</h1>
        <ThreadForm />
      </div>
    </div>
  );
}

export default CreateThread_new;