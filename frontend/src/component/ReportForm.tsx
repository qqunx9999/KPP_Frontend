import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/CreateReport.css';

const ReportForm = () => {
  return (
    <Formik
      initialValues={{ reportThread: '', reportComment: '', commentNO: '', size: '', comment: '' }}
      onSubmit={async (values, actions) => {
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
              <Field type="checkbox" name="reportThread" button className="createrp_selcm_square"/>               
                &nbsp; This Thread               
            </div>
            <div className="createrp_selcm_button">
              &nbsp; &nbsp; <Field type="checkbox" name="reportComment" button className="createrp_selcm_square" /> &nbsp;  Comment &nbsp; &nbsp;<Field type="input" name="commentNO" placeholder="Comment NO." style={{ width:"200px" , height:"50px" }}/> <br />
            </div>
          </div>
          <div className="createrp-reason-frame">
            <div className="createrp-place-your-reason_">Place your reason :</div>
            <div className="createrp-greenframe">
              <div className="createrp-cha">
              <button className="createrp-bold-frame"><b>B</b></button>
              </div>
              <div className="createrp-cha">
                <button className="createrp-Italic-frame">                
                  <i>I</i>                
                </button>
              </div>
              <div className="createrp-fonts">
                <button className="createrp-fonts-frame">
                  Fonts
                </button>
              </div>     
              <div className="createrp-size-frame">  
                <div className="createrp-size">            
                  Size 
                </div> 
                <Field type="input" name="size" className="createrp_size_input" style={{ width:"60px" , height:"40px" }} />
              </div>  
              <div className="createrp-send">
                <button className="createrp-send-frame">
                  Send
                </button>
              </div>
              
            </div>
            <Field type="input" name="comment" className="createrp_reason_input" style={{ width:"1140px" , height:"250px" }}/>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReportForm;