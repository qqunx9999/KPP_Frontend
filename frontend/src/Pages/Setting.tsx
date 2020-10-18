import React from 'react';
import '../CSSsource/Setting.css';
const Setting = () => {
  

  return (
      <div>
        <div className="backgroundUserSetting">
          <div className="frameWhiteUserSetting">
            <div className="textSettingUserSetting">
              Setting
            </div>
            <div className="frameBlackUserSetting">
              <div className="textNameUserProfile">
                Name :
              </div>
              <div className="nameUserProfile">
                PatrickStar
              </div>
              
              <div className="textUsernameUserProfile">
                Username :
              </div>
              <div className="usernameUserProfile">
                Earth.p
              </div>

              <div className="textEmailUserProfile">
                Email :
              </div>
              <div className="emailUserProfile">
                Patrick.s@ku.th
              </div>

              <div className="textYourquoteUserProfile">
                Your Quote :
              </div>
              <div className="userquoteUserProfile">
                GUSHOPSHARKWOW!!!
              </div>
            </div>

            <div className="frameGoBackUserProfile">
              <div className="textGoBackUserProfile">
                &lt; Go Back
              </div>
            </div>

            <div className="frameChangePasswordUserProfile">
              <div className="textChangePasswordUserProfile">
                Change Password
              </div>  
            </div>
          </div>
        </div>
      </div>
  );
}

export default Setting;