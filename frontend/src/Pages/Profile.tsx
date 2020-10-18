import React from 'react';
import Navigtion from '../component/navBar';
import '../CSSsource/Profile.css';
import profilePic from '../Pages/image/Patrick.png'

const Profile = () => {
  return (
      <div>
        <Navigtion />
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
                  <img src={profilePic} className="rounded-circle z-depth-0" alt="avatar image" width="230" height="230"/>
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
      </div>
  );
}

export default Profile;