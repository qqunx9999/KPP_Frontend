import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../service/AuthService';
import { NavDropdown } from 'react-bootstrap';
import logoPic from '../Pages/image/kuppl2.png'
import searchBlog from '../Pages/image/createSearchSymbol.png'
import createBlog from '../Pages/image/createBlogSymbol.png'
import profilePic from '../Pages/image/Patrick.png'
import notiButton from '../Pages/image/Notify-button.png'
import reportButton from '../Pages/image/Report-button.png'
import '../CSSsource/NavBar.css';
import UserService from '../service/UserService';
import Notifications from './Notifications';

const Navigtion = () => {
  const [user, setUser] = useState<any>({});
  const [notification, setNotificaiton] = useState<any>([]);

  const logOut = () => {
    AuthService.logOutUser();
  };

  const fetchUser = () => {
    const userID = AuthService.getUserID();
    AuthService.fetchUser(userID)
      .then(obj => setUser(obj));
  };

  const fetchNotification = () => {
    const userID = AuthService.getUserID();
    UserService.notification(userID)
      .then(obj => setNotificaiton(obj));
    // console.log(notification);
  }

  useEffect(() => {
    fetchUser();
    fetchNotification();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-color" id="mycustomize" style={{"width":"100%","position":"fixed"}} >
      <Link to={`/Home`}>
        <div className="logoCSS">
          <img src={logoPic} width="220" height="46.2" alt="" />
        </div>
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav ml-auto">
          <div className="container">

            <li key="report & notification">
              {user.isAdmin ?
                <Link to="/ReportList"><div className="frame-notification">
                  <img src={reportButton} width="52" height="50" title="ReportList" alt="" />
                </div></Link> : <div className="frame-notification">
                  <li className="nav-item dropdown active ml-1">
                    <NavDropdown title={
                      <img src={notiButton} width="52" height="50" className="rounded-circle z-depth-0" alt="" />}
                      id="collasible-nav-dropdown">
                      <NavDropdown.Item ><Notifications /></NavDropdown.Item>
                    </NavDropdown>
                  </li>
                </div>}
            </li>

            <li className="nav-item active">
              <Link to={`/SearchThread`}>
                <div className="searchCSS">
                  <img src={searchBlog} width="52" height="50" title="Search" alt="" />
                </div>
              </Link>
            </li>
            <li className="nav-item active px-2">

              <div className="searchCSS">
                <Link to={`/CreateThread`}>
                  <img src={createBlog} width="57" height="57" title="Create Thread" alt="" />
                </Link>
              </div>
            </li>


            <li className="nav-item dropdown active ml-1">
              <NavDropdown title={
                <img src={profilePic} width="52" height="50" className="rounded-circle z-depth-0" alt="" />}
                id="collasible-nav-dropdown">
                <NavDropdown.Item ><Link to={`/Profile`}><div className="dropdown-item" key="profile" >Profile</div></Link> </NavDropdown.Item>
                <NavDropdown.Item ><Link to={`/Setting`}><div className="dropdown-item" key="setting" >Setting</div></Link></NavDropdown.Item>
                <NavDropdown.Item><Link to={`/AuthenLogout`}> <div className="dropdown-item" key="log out" onClick={logOut}>Log out</div></Link></NavDropdown.Item>
              </NavDropdown>
            </li>
          </div>

        </ul>
      </div>
    </nav>

  );
};

export default Navigtion;
