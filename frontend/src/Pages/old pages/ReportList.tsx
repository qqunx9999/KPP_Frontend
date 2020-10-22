import React from 'react';
import { Link } from "react-router-dom";
import '../CSSsource/ReportList.css';
import Navigtion from '../../component/NavBar';
const ReportList = () => {
  

  return (
      <div>
      <Navigtion />
      <div className="rpList-bigframe">        

        <div className="rpList-thread-whiteframe">
          <div className="rpList-thread-report-list">
            Report List
          </div>
          <div className="rpList-thread-greenframe">
            <div className="rpList-report-thread1">
              Report Thread
            </div>
            <div className="rpList-read-round1">
              <div className="rplist-read1 ">
                read
              </div>
            </div>
            <div className="rpList-date-round1">
              <div className="rpList-date1">
                xx/yy/zzzz
              </div>
            </div>

            <div>
              <button className="rpList-correct-round1">

              </button>
            </div>

            <div>
              <button className="rpList-incorrect-round1">

              </button>
            </div>
          </div>

          <div>
            <button className="rpList-thread-fpre-frame">
              &lt; &lt;
            </button>
          </div>

          <div>
            <button className="rpList-thread-pre-frame">
              &lt;
            </button>
          </div>

          <button className="rpList-no1-frame"></button>
          <div className="rpList-no1"> 1 </div>

          <button className="rpList-no2-frame"></button>
          <div className="rpList-no2"> 2 </div>

          <button className="rpList-no3-frame"></button>
          <div className="rpList-no3"> 3 </div>

          <button className="rpList-no4-frame"></button>
          <div className="rpList-no4"> 4 </div>

          <button className="rpList-no5-frame"></button>
          <div className="rpList-no5"> 5 </div>

          <div>
            <button className="rpList-thread-ffw-frame">
              &gt;
            </button>
          </div>

          <div>
            <button className="rpList-thread-fw-frame">
            &gt; &gt;
            </button>
          </div>
        </div>

        <div className="rpList-cm-whiteframe">
        <div className="rpList-cm-report-list">
            Report List
          </div>
          <div className="rpList-cm-greenframe">
            <div className="rpList-report-cm1">
              Report Comment
            </div>
            <div className="rpList-cmread-round1">
              <div className="rplist-cmread1 ">
                read
              </div>
            </div>
            <div className="rpList-cmdate-round1">
              <div className="rpList-cmdate1">
                xx/yy/zzzz
              </div>
            </div>

            <div>
              <button className="rpList-cmcorrect-round1">
             
              </button>
            </div>

            <div>
              <button className="rpList-cmincorrect-round1">
               
              </button>
            </div>
          </div>

          <div>
            <button className="rpList-cm-fpre-frame">
            &lt; &lt;
            </button>
          </div>

          <div>
            <button className="rpList-cm-pre-frame">
            &lt;
            </button>
          </div>

          <button className="rpList-cmno1-frame"></button>
          <div className="rpList-cmno1"> 1 </div>
          
          <button className="rpList-cmno2-frame"></button>
          <div className="rpList-cmno2"> 2 </div>

          <button className="rpList-cmno3-frame"></button>
          <div className="rpList-cmno3"> 3 </div>

          <button className="rpList-cmno4-frame"></button>
          <div className="rpList-cmno4"> 4 </div>

          <button className="rpList-cmno5-frame"></button>
          <div className="rpList-cmno5"> 5 </div>

          <div>
            <button className="rpList-cm-ffw-frame">
            &gt;
            </button>
          </div>

          <div>
            <button className="rpList-cm-fw-frame">
            &gt; &gt;
            </button>
          </div>
        </div>

        <div className="rpList-contract">
          <button className="rpList-contact-frame">
            Contract
          </button>
        </div>
        <div className="rpList-contract-detail">
          <div className="rpList-us1">
            <button className="rpList-us1-frame">
              user1 firstnamek <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; user1 lastname
            </button>
          </div>
          <div className="rpList-us2">
            <button className="rpList-us2-frame">
              user2 firstnamek <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; user2 lastname
            </button>
          </div>
          <div className="rpList-us3">
            <button className="rpList-us3-frame">
              user3 firstnamek <br></br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; user3 lastname
            </button>
          </div>
        </div>
      </div>
      </div>
  );
}

export default ReportList;