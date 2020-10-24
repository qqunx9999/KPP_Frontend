import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import AuthService from '../service/AuthService';

function ChangeName() {
  const [login, setLogin] = useState<boolean>(false);
  const history = useHistory();

  function fetchLogin() {
    const isLoggin = AuthService.isUserLoggedIn();
    setLogin(isLoggin);
  }

  useEffect(() => {
    fetchLogin();
  }, []);


    return (
      <div >
  
      </div>
    );
  }
  
  export default ChangeName;