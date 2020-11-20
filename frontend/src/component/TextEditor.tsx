import React, { Component } from 'react';

class TextEditor extends Component {
  constructor(props: any) {
    super(props)
    this.onChangeEditorStyle = this.onChangeEditorStyle.bind(this);
  }

  onChangeEditorStyle(e: any, command: any) {
    document.execCommand(command, false)
  }

  render() {
    return (
      <div className="App">
      
        <div className="toolbar">
          <a href="#" className="toolbar-item" onClick={(e) => this.onChangeEditorStyle(e, 'bold')}>Bold</a>
          <a href="#" className="toolbar-item" onClick={(e) => this.onChangeEditorStyle(e, 'italic')}>Italic</a>
          <a href="#" className="toolbar-item" onClick={(e) => this.onChangeEditorStyle(e, 'underline')}>Underline</a>
        </div>
        <div className="my-rich-editor" contentEditable="true">
            <p> Hello World.</p>
        </div>
        <style>{`
          .my-rich-editor {
            text-align: left;
            width: 500px;
            margin: 0 auto;
            border: 1px solid #ddd;
            border-radius: 9px;
            padding: 1em;
          }
          .toolbar {
            margin-top: 32px;
            margin-bottom: 8px;
          }
          .toolbar-item {
            margin-right: 7px;
            text-decoration: none;
            color: #000;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding: 4px;
          }
          .toolbar-item:hover {
            background-color: #f5f5f5;
          }
        `}
        </style>
      </div>
    );
  }
};

export default TextEditor;