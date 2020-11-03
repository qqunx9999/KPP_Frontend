import React, { useState } from "react";
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

export default function Test() {
  let data = new FormData();
  console.log(data);

  return(
    <div>

    </div>
  );
}