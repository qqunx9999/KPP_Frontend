import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/ReadReport.css';

type LoginFormProps = {
  loginCallBack?: () => void,
};

function ReadReportForm(props: LoginFormProps) {
  return (
    <Formik
      initialValues={{ rReportThread: '', rReportComment: '', reason: '' }}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="rReport_sel-frame">
            <div className="rReport_report_">Report :</div>
            <div className="rReport_threadname">
              At thread : <br /> thread:name
        </div>
            <div className="rReport_selthread_button">
              &nbsp; <Field type="checkbox" name="rReportThread" button className="rReport_selthread_square" />
            &nbsp; This Thread
        </div>
            <div className="rReport_selcm_button">
              <Field type="checkbox" name="rReportComment" button className="rReport_selcm_square" />
            &nbsp;  Comment
        </div>
          </div>
          <div className="rReport_reasonframe">
            <div className="rReport_your-reason_">Your reason :</div>
            <Field type="input" name="reason" className="rReport_reason_input" style={{ width: "1140px", height: "250px" }} />
          </div>

        </Form>
      )}
    </Formik>
  );
}

export default ReadReportForm;