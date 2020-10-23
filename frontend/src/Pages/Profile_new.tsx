import React, { useEffect, useState } from 'react';
import { Userinfo } from '../interfaces/userInfoEntity';
import UserService from '../service/UserService';

const Profile_new = () => {
  const [user, setUser] = useState<Userinfo[]>([]);

  const fetchUser = () => {
    UserService.fetchUser()
      .then(obj => {
        setUser(obj);
      });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return(
    <div>
      <h6>Profile</h6>
      {  }
    </div>
  );
};

export default Profile_new;