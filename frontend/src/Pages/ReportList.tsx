import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigtion from '../component/NavBar';
import AuthService from '../service/AuthService';
import ThreadService from '../service/ThreadService';
import '../CSSsource/ReportList.css';
import ReportModal from '../component/ReportModal';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ReportList() {
  const [reportThread, setReportThread] = useState<any>([[{}]]);
  const [reportThreadInfo, setReportThreadInfo] = useState<any>([[{}]]);
  const [reportComment, setReportComment] = useState<any>([[{}]]);
  const [reportCommentInfo, setReportCommentInfo] = useState<any>([[{}]]);

  const fetchReportThread = () => {
    const userID = AuthService.getUserID();
    ThreadService.fetchReportThread(userID)
      .then(obj => {
        setReportThread(obj.RTs_page);
        setReportThreadInfo(obj.pageInfo);
      });
    ThreadService.fetchReportComment(userID)
      .then(obj => {
        setReportComment(obj.RCs_page);
        setReportCommentInfo(obj.pageInfo);
      });
  };

  function dateCount(timeString: string) {
    const day = new Date(timeString);
    const date = String(day.getDay());
    const month = String(day.getMonth());
    const year = String(day.getFullYear());
    const ReportTime = date + "/" + month + "/" + year;
    return ReportTime;
  }

  useEffect(() => {
    fetchReportThread();
  }, []); console.log(reportThread) // 

  return (
    <div>
      <Navigtion />
      <div className="rpList-bigframe">

        <div className="rpList-thread-whiteframe">
          <div className="rpList-thread-report-list">Report list</div>
          <div className="rpList-thread-greenframe">
            <div className="rpList-report-thread1">Thread Report</div>
            <div className="rpList-read-round1">
              {/* Read :&nbsp; { reportThread[1] ? "Yes" : "No" } &nbsp;  */}
              <div className="rplist-read1">
                {/* <Link to={`/ReadReport/${ 'thread' }/${ reportThread[0][0].reportTID }`}>read</Link> &nbsp; */}
                {reportThread.map((item: any) => (
                  <div className="blog">
                    <button className="rpList-correct-round1 btn btn-success">Approve</button>
                    <button className="rpList-incorrect-round1 btn btn-danger">Disapprove</button>
                    <div className="rpList-read-round2">
                      <li className="reaD">
                        <ReportModal type="thread" reportID={reportThread[0][0].reportTID} />
                      </li>
                    </div>

                  </div>
                ))}
              </div>
            </div>
            {/* <div className="rpList-date1"> */}
            {reportThread.map((item: any) => (
              <div className="rpList-read-round99">
                {/* <div className="blog2"> */}
                <div className="blog2">
                  <li id="fucK">{dateCount(reportThread[0][0].date_create)}</li>
                  {/* </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* </div> */}
          <hr />
        </div>

        <div className="rpList-cm-whiteframe">
          <div className="rpList-thread-report-list">Report list</div>
          <div className="rpList-thread-greenframe">
            <div className="rpList-report-cm1">Comment Report</div>
            {/* Read :&nbsp; { reportComment[1] ? "Yes" : "No" } &nbsp; */}
            <div className="rpList-cmread-round1">
              < div className="rplist-cmread1">
                <li><ReportModal type="thread" reportID={reportThread[0][0].reportTID} /></li>
          </div>
            </div>
            <div className="rpList-cmdate-round1">
              <div className="rpList-cmdate1">
                {reportComment.map((item: any) => {
                  return <li>{dateCount(reportComment[0][0].date_create)}</li>
                })}
              </div>
            </div>
            <button>Approve</button>
            <button>Disapprove</button>
          </div>
        </div>

      </div>
    </div>
  );
}