import { ChromePicker } from 'react-color';
import React from 'react';

class FontColorWidget extends React.Component {

state = {
  backgroundColor: '#fff'
};

handleChangeComplete = (color, event) => {
  this.setState({ color: color.hex,
}, function(){})
  this.props.handleFontColorChange(color.hex)
};

render() {
  return (
    <ChromePicker
      color={this.state.color}
      onChangeComplete={this.handleChangeComplete}
    />
  );
}
}

export default FontColorWidget;