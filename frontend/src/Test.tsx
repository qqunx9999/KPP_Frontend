import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

class Test extends React.Component {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     text: "",
  //   }
  // }

  // modules = {
  //   toolbar: [
  //     [{ 'header': [1, 2, false] }],
  //     ['bold', 'italic', 'underline','strike', 'blockquote'],
  //     [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
  //     ['link', 'image'],
  //     ['clean']
  //   ],
  // }

  // formats = [
  //   'header',
  //   'bold', 'italic', 'underline', 'strike', 'blockquote',
  //   'list', 'bullet', 'indent',
  //   'link', 'image'
  // ]

  render() {
    console.log(this)
    return (
      // <div className="text-editor">
      //   <ReactQuill theme="snow"
      //               modules={this.modules}
      //               formats={this.formats} />
      // </div>
      <div></div>
    );
  }
}

export default Test;