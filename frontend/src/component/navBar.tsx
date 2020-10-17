import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthService from '../service/AuthService';

const Navigtion = () => {
  const logOut = () => {
    AuthService.logOutUser();
  };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to={ `/Home` }><a className="navbar-brand" href="#">KU People</a></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to={ `/SearchThread` }><a className="nav-link" href="#">Seacrh Thread</a></Link>
            </li>

            <li className="nav-item active">
              <Link to={ `/CreateThread` }><a className="nav-link" href="#">Create Thread</a></Link>
            </li>
            
            <li className="nav-item">
              <a className="nav-link disabled" href="#">By KU The Weeb</a>
            </li>

            <li className="nav-item active">
              <Link to={ `/Profile` }><a className="nav-link " href="#">ProfilePicHere</a></Link>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">
                Dropdown link
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link to={ `/Profile` }><a className="dropdown-item" href="#">Profile</a></Link>
                <Link to={ `/Setting` }><a className="dropdown-item" href="#">Setting</a></Link>
                <button onClick={ logOut }><a className="dropdown-item" href="#">Log out</a></button>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    );
};

export default Navigtion;