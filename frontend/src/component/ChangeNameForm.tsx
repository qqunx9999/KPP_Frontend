import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/ChangeName.css';

type LoginFormProps = {
    loginCallBack?: () => void,
  };

function ChangeNameForm(props: LoginFormProps) {
    return (
        <Formik 
            initialValues={{  }}
            onSubmit={async (values, actions) => {
            actions.setSubmitting(false);
            } }
        >
        {({ isSubmitting }) => (
        <Form>
            <Field type="input" name="newName" className="cName_newname_input" placeholder="Type your new name... (Only characters and Numbers allowed.)" style={{ width:"800px" , height:"60px" }}/>
        </Form>
        )}
        </Formik>
    );
}

export default ChangeNameForm;