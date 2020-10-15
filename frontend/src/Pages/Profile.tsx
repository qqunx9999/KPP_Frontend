import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/Profile.css';
const Profile = () => {
  

  return (
      <div>
        <div className="backgroundUserProfile">
          <div className="frameWhiteUserProfile">
            <div className="frameBlackUserProfile">
              
              <div className="frameLeftGrayUserProfile">
                <div className="textJoinUserProfile">
                  Join
                </div>
                <div className="textJoinedDateUserProfile">
                  JoinedDate
                </div>
                <div className="picUserProfile">
                </div>
                <div className="userRankUserProfile">
                  Beginner
                </div>
                <div className="userExpUserProfile">
                  Exp. 44/100
                </div>
              </div>

              <div className="textProfileUserProfile">
                Profile
              </div>
              <div className="usernameUserProfile">
                UsernameHere
              </div>
              <div className="userQuotationUserProfile">
                GUSHOPSHARKWOW!!!
              </div>

              <div className="favorpartUserProfile">
                Favor Part
              </div>
              <div className="textFoodUserProfile">
                Food :
              </div>
              <div className="userFoodUserProfile">
                Ice Cream
              </div>

              <div className="userHabitUserProfile">
                Habit : SHARKWOW
              </div>

              <div className="userTopicUserProfile">
                Topic : AmateurSexualContent
              </div>  

              <div className="frameUserNicknameUserProfile">
                <div className="textUserNicknameUserProfile">
                  Earth.p
                </div>
              </div>   
            </div>
          </div>

          <div className="frameGobackUserProfile">
            <div className="textGobackUserProfile">
              &lt; Go Back
            </div>
          </div>

          <div className="frameAddFriendUserProfile">
            <div className="textAddFriendUserProfile">
              Add Friend
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;