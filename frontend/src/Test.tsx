// import React, { useState } from "react";
// import { Editor } from '@tinymce/tinymce-react';

// class Test extends React.Component {
//   constructor(props: any) {
//     super(props);
//     this.state = { value: '' };
//   }

//   handleEditorChange = (content: string, editor: any) => {
//     console.log('Content was updated:', content);
//   }

//   render() {
//     return (
//       <div>
//         <Editor
//          initialValue="<p>This is the initial content of the editor</p>"
//          init={{
//            height: 500,
//            menubar: false,
//            plugins: [
//              'advlist autolink lists link image charmap print preview anchor',
//              'searchreplace visualblocks code fullscreen',
//              'insertdatetime media table paste code help wordcount'
//            ],
//            toolbar:
//              'undo redo | formatselect | bold italic backcolor | \
//              alignleft aligncenter alignright alignjustify | \
//              bullist numlist outdent indent | removeformat | help'
//          }}
//          onEditorChange={this.handleEditorChange}
//        />
//       </div>
//     );
//   }
// }

// export default Test;

import React from 'react';
import { useFormik } from 'formik';

export default function Test() {
  let data: any;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      data = values;
      alert(JSON.stringify(values));
    },
  });console.log(formik.values)

  return(
    <div>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <button type="submit">Submit</button>
       <h1>{ formik.values.firstName }</h1>
     </form>
    </div>
  );
}