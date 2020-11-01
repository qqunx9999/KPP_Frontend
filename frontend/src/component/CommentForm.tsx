import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useHistory, useParams } from 'react-router';
import { baseUrl } from '../config/constant';
import '../CSSsource/CreateComment.css';
import AuthService from '../service/AuthService';

function CommentForm() {
  const { ThreadID } = useParams();
  const history = useHistory();

  return (
    <Formik
      initialValues={{ reply: '', size: '', comment: '', text_type: [] }}
      onSubmit={async (values, actions) => {
        let text: any = {};
        for(let i = 0;i < values.text_type.length;i++) {
          if(values.text_type[i] === 'bold') {
            text.bold = values.text_type[i]
          } else {
            text.italic = values.text_type[i];
          };
        };
        const createOption = {
          "userID": AuthService.getUserID(),
          "content": values.comment,
          "text_type": text,
          "image_arr": [],
          "reply_to": 0,
        };
        const res = await fetch(`${ baseUrl }/threads/${ThreadID}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(createOption)
        }).then(history.goBack);
        actions.setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="createcm-repltyo-frame">
            <label>
              <div className="createcm-replyto">Reply to:</div>
              <Field type="input" id="createcm_replyto_input" name="reply" placeholder="Comment numbers" style={{ width: "250px", height: "70px" }} />
            </label>
          </div>

          <p className="createcm-leave-empty">*If you do not reply just leave it empty</p>
          <div className="createcm-cm-frame">
            <div className="createcm-placecm">Place your comment :</div>
            <div className="createcm-green-frame">
              <div className="createcm-cha">
                <div className="createcm-bold-frame">
                  <Field type="checkbox" name="text_type" value="bold" />
                <b>B</b>
                </div>
              </div>
              <div className="createcm-cha">
                <button className="createcm-Italic-frame">
                  <Field type="checkbox" name="text_type" value="italic" />
                <i>I</i>
                </button>
              </div>
              <div className="createrp-fonts">
                <button className="createrp-fonts-frame">
                  Fonts
                </button>
              </div>
              <div className="createcm-size-frame">
                <div className="createcm-size">
                  Size
                </div>
                <Field type="input" name="size" className="createcm_size_input" style={{ width: "60px", height: "40px" }} />
              </div>
              <div className="createcm-send">
                <button className="createcm-send-frame" disabled={ isSubmitting }>
                  Send
                    </button>
              </div>
            </div>
            <Field type="input" name="comment" className="createrp_reason_input" style={{ width: "1140px", height: "250px" }} />
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default CommentForm;