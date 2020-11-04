import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

type myProps = {  }
type myState = { content: any }
let message = '';

export default class TextEditor extends React.Component<myProps, myState> {
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