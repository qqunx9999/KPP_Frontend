import React from 'react';
import { Link } from "react-router-dom";
import '../CSSsource/TermOfUse.css';

const TermOfUse = () => {
  

  return (
    <div className="backgroundTermOfUse">
        <div className="frameTermOfUse">
          
          <div className="KUpeopleTermOfUse">
            KU People
          </div>
          <div className="textTermOfUse">
            Term Of Use Agreement.
          </div>
          <div className="frameDetailTermOfUse">
              <p className="detailTermOfUse">
                &nbsp;&nbsp;This website is owned and operated by KU the WEEB team, user must acceptterms and conditions below before usethis website.
                <br/>
                <br/>
                &nbsp;&nbsp;1. Do not against Term Of Use Agreement,if you do, we will prohibit you from using this website
                <br/>
                <br/>
                &nbsp;&nbsp;2. Any action which illegal is prohibited fromthis website.
                <br/>
                <br/>
                &nbsp;&nbsp;3. We have no responsible about any actionyou did in this website so, be careful to any action you perform.
                <br/>
                <br/>
                &nbsp;&nbsp;4. Admins and Devs have the most right, any decision of them are absolutely.
                <br/>
                <br/>
                &nbsp;&nbsp;5. The Site and its original content, features, and functionality are owned by KU the WEEB team and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                <br/>
                <br/>
                &nbsp;&nbsp;6. We may modify these Terms from time to time. If we do we will notify you by email to the email address you have provided us with. It is therefore important that you review these terms regularly to ensure you are updated as to any changes.
              </p>
          </div>
          <Link to="/SignUp" className="frameGoBackTermOfUse">
            <div className="GoBackButtonTermOfUse">
            &lt; Go Back
            </div>
            
          </Link>
        
        
      </div>
    </div>
  );
}

export default TermOfUse;
