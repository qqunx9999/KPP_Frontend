import { Formik, Form, Field } from 'formik';
import React from 'react';

const CommentForm = () => {
    

    return(
        <Formik
            initialValues={{ reply: '', size: '', comment: '' }}
            onSubmit={ async (values, actions) => {
                actions.setSubmitting(false);
            }}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="createcm-repltyo-frame">
                        <div className="createcm-replyto">Reply to:</div>
                        <Field type="input" id="createcm_replyto_input" name="reply"  placeholder="Comment numbers"  style={{ width:"250px" , height:"70px" }} />
                    </div>
                    
                    <p className="createcm-leave-empty">*If you do not reply just leave it empty</p>
                    <div className="createcm-cm-frame">
                        <div className="createcm-placecm">Place your comment :</div>
                        <div className="createcm-green-frame">
                            <div className="createcm-cha">
                                <button className="createcm-bold-frame"><b>B</b></button>
                            </div>
                            <div className="createcm-cha">
                                <button className="createcm-Italic-frame"><i>I</i></button>
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
                                <Field type="input" name="size" className="createcm_size_input" style={{ width:"60px" , height:"40px" }} />
                            </div>                            
                            <div className="createcm-send">
                                <button className="createcm-send-frame">
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

export default CommentForm;