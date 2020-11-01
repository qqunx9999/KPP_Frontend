import React from 'react';
import { Formik, Form, Field } from 'formik';
import '../CSSsource/ChangeName.css';
import AuthService from '../service/AuthService';
import UserService from '../service/UserService';
import { useHistory } from 'react-router';

function ChangeNameForm() {
    const history = useHistory();

    return (
        <Formik 
            initialValues={{ newName: '' }}
            onSubmit={async (values, actions) => {
                const userID = AuthService.getUserID();
                const changeOption = {
                    "name": values.newName,
                };
                const res = UserService.changeName(userID, changeOption);
                actions.setSubmitting(false);
                history.goBack();
            } }
        >
        {({ isSubmitting }) => (
        <Form>
            <Field type="input" name="newName" className="cName_newname_input" placeholder="Type your new name... (Only characters and Numbers allowed.)" style={{ width:"800px" , height:"60px" }}/>
            <button disabled={ isSubmitting }>Confirm</button>
        </Form>
        )}
        </Formik>
    );
}

export default ChangeNameForm;