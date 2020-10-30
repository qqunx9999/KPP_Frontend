import React from "react";
import RichTextEditor from "react-rte";


class Test extends React.Component {
  // static propTypes = {
  //   onChange: PropTypes.func
  // };

  // state = {
  //   value: RichTextEditor.createEmptyValue()
  // }

  // onChange = (value: any) => {
  //   this.setState({value});
  //   if (this.props.onChange) {
  //     this.props.onChange(
  //       value.toString('html')
  //     );
  //   }
  // };

  render () {
    return (
      <div>
        {/* <RichTextEditor
          value={this.state.value}
          onChange={this.onChange}
        /> */}
      </div>
    );
  }
}

export default Test;
