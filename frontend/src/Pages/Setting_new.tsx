import React, { useEffect, useState } from 'react';
import { Userinfo } from '../interfaces/userInfoEntity';
import UserService from '../service/UserService';

const Setting_new = () => {
  const [user, setUser] = useState<Userinfo[]>([]);

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

  return(
    <div>
      <div style={ temp }>
        <h1>Setting</h1>
        Name : <br />
        Username : <br />
        Email : <br />
        Your Quote : 
      </div>
    </div>
  );
};

export default Setting_new;