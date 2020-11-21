import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/CreateReport.css';
import AuthService from '../service/AuthService';
import { baseUrl } from '../config/constant';
import { useHistory, useParams } from 'react-router';
import ThreadService from '../service/ThreadService';
import { resourceUsage } from 'process';

function ReportForm() {
  const [comment, setComment] = useState<any[]>([{comment:{}, userInfo:{}}]);
  const history = useHistory();
  const { ThreadID } = useParams();

  const fetchComment = () => {
    ThreadService.fetchComment({ ThreadID }.ThreadID)
      .then(obj => {
        setComment(obj);
      })
  };

  useEffect(() => {
    fetchComment();
  }, [])

  return (
    <Formik
      initialValues={{ report: '', commentNO: '', text_type: [], description: '', size: '' }}
      onSubmit={async (values, actions) => {
        let reportOption = {};
        const text = { "bold": values.text_type[0], "italic": values.text_type[1], "font": 'Arial', "size": Number(values.size) };
        if(values.report === 'thread') {
          reportOption = {
            "userID": AuthService.getUserID(),
            "description": values.description,
            "text_type": text,
            "image_arr": [],
          };

          const result = ThreadService.reportThread({ ThreadID }.ThreadID, reportOption);
          if(result) { history.goBack() }
        } else {
          reportOption = {
            "userID": AuthService.getUserID(),
            "description": values.description,
            "text_type": text,
            "image_arr": [],
            "at_comment": Number(values.commentNO)
          };
          const commentID: string = comment[Number(values.commentNO) - 1].comment.commentID;
          const result = ThreadService.reportComment({ ThreadID }.ThreadID, reportOption, commentID);
          if(result) { history.goBack() }
        }
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="createrp-select-frame">
            <div className="createrp-want-to-report_">
              Want to report :
            </div>
            <div className="createrp_selthread_button">
              <label>
                <Field type="radio" name="report" value="thread" button className="createrp_selcm_square" />
                &nbsp; This Thread
                </label>
            </div>
            <div className="createrp_selcm_button">
              <label>
                &nbsp; &nbsp; 
                <Field type="radio" name="report" value="comment" button className="createrp_selcm_square" /> &nbsp;
                Comment &nbsp; &nbsp;
                <Field type="input" name="commentNO" placeholder="Comment NO." style={{ width: "200px", height: "50px" }} /> <br />
              </label>
            </div>
          </div>
          <div className="createrp-reason-frame">
            <div className="createrp-place-your-reason_">Place your reason :</div>
            <div className="createrp-greenframe">
              <div className="createrp-cha">
                <div className="createrp-bold-frame">
                <label>
                  <Field type="checkbox" name="text_type" />
                  <b>B</b>
                </label>
                </div>
              </div>
              <div className="createrp-cha">
                <div className="createrp-Italic-frame">
                  <Field type="checkbox" name="text_type" />
                  <i>I</i>
                </div>
              </div>
              <div className="createrp-fonts">
                <button className="createrp-fonts-frame">
                  Fonts
                </button>
              </div>
              <div className="createrp-size-frame">
                <div className="createrp-size">Size</div>
                <Field type="input" name="size" className="createrp_size_input" style={{ width: "60px", height: "40px" }} />
              </div>
              <div className="createrp-send">
                <button className="createrp-send-frame" disabled={isSubmitting}>
                  Send
                </button>
              </div>

            </div>
            <Field type="text" name="comment" className="createrp_reason_input" style={{ width: "1140px", height: "250px" }} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default ReportForm;