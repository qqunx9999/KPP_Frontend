import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '../CSSsource/CreateReport.css';

const CreateReport = () => {
  

  return (
      <div className="createrp-bigframe">
        <div className="createrp_goback">
          <button className="createrp_goback_button">
            &lt; Go back
          </button>
        </div>

        <div className="createrp_whiteframe">
          <div className="createrp-report">
            Report
          </div>

          <div className="createrp-select-frame">
            <div className="createrp-want-to-report_">
              Want to report :
            </div>
            <div className="createrp-this-thread">
              <div className="createrp_selthread_button">
                <button className="createrp_selthread_square"></button>
                  &nbsp; This thread
              </div>
            </div>
            <div className="createrp-selcm">
              <div className="createrp_selcm_button">
                <form>
                 <button className="createrp_selcm_square"></button>                  
                &nbsp; Comment &nbsp;
                  <input placeholder="Comment NO." style={{ width:"200px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="createcm_cm_no"/>                    
                </form>
              </div>
            </div>
          </div>

          <div className="createrp-reason-frame">
            <div className="createrp-place-your-reason_">
              Place your reason :
            </div>

            <div className="createrp-greenframe">
              <div>
                <button className="createrp-bold-frame">

                </button>
              </div>

              <div>
                <button className="createrp-Italic-frame">

                </button>
              </div>

              <div className="createrp-fonts">
                <button className="createrp-fonts-frame">
                  Fonts
                </button>
              </div>

              <div className="createrp-size-frame">
                <div className="createrp-size">
                  <form>
                    Size
                    <input placeholder="" style={{ width:"75px" , height:"50px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="createrp_size_input"/>                    
                  </form>
                </div>
              </div>

              <div>
                <button className="createrp-Clipboard-frame">

                </button>
              </div>

              <div>
                <button className="createrp-Upload-frame">

                </button>
              </div>

              <div>
                <button className="createrp-Link-frame">

                </button>
              </div>

              <div>
                <button className="createrp-Image-frame">

                </button>
              </div>

              <div>
                <button className="createrp-Barchart-frame">

                </button>
              </div>

              <div className="createcm-send">
                <button className="createcm-send-frame">
                  Send
                </button>
              </div>
            </div>

            <form>                    
              <input placeholder="" style={{ width:"1140px" , height:"250px" }} onFocus= {undefined} onBlur={undefined} onChange={undefined} onSubmit={undefined} value={""}  className="createrp_reason_input"/>                    
            </form>
          </div>  

          <div className="createrp-desc-text">
            Your report will be sent to administator. We will give the consideration about your report within 2-3 days
          </div>       
        </div>
      </div>
  );
}

export default CreateReport;