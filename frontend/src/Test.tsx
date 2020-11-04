import React from "react";
// import ImageUploader from "react-images-upload";

// const Test = (props: any) => {
//   const [pictures, setPictures] = useState<any[]>([[[]]]);

//   const onDrop = (picture: any) => {
//     setPictures([picture]);
//     localStorage.setItem("image", picture[0][0])
//   };
//   return (
//     <div>
//       <ImageUploader
//         {...props}
//         withIcon={true}
//         onChange={onDrop}
//         imgExtension={[".jpg", ".gif", ".png", ".gif"]}
//         maxFileSize={5242880}
//       />
//       {console.log(pictures[0][0], localStorage.image)}
//     </div>
//   );
// };

// export default Test;

// type myProps = {  };
// type myState = { file: any }

// export default class Test extends React.Component<myProps, myState> {
//   constructor(props: any){
//     super(props)
//     this.state = {
//       file: ''
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }
//   handleChange(event: any) {
//     this.setState({
//       file: URL.createObjectURL(event.target.files[0])
//     })
//   }
//   render() {
//     localStorage.setItem("objUrl", this.state.file);
//     console.log(localStorage.objUrl);
//     return (
//       <div>
//         <input type="file" onChange={this.handleChange}/>
//         <img src={this.state.file}/>
//         <p>{ this.state.file }</p>
//         <a href={ this.state.file }>pic</a>
//       </div>
//     );
//   }
// }

import { Editor } from '@tinymce/tinymce-react';

type myProps = {  }
type myState = { content: any }
let message = '';

export default class Test extends React.Component<myProps, myState> {
  constructor(props: any) {
    super(props);

    this.state = { content: '' };
    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange(content: any, editor: any) {
    this.setState({ content });
  }

  render() {
    message = this.state.content;
    console.log(message)
    return (
      <div>

        <Editor
          apiKey="mst7ooroci6ekyb714kes48cufcv5yx1nnnncjaumak2xq9w"
          value={this.state.content}
          onEditorChange={this.handleEditorChange}
        />

      </div>
    );
  }
}