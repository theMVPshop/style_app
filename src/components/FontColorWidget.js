import { ChromePicker } from 'react-color';
import React from 'react';
import {FontContext} from '../FontComponents/FontContext';

class FontColorWidget extends React.Component {
  static contextType = FontContext
state = {
  backgroundColor: this.context.fontColor[0]
};

handleChangeComplete = (color, event) => {
  this.setState({ color: color.hex,
})
  this.props.handleFontColorChange(color.hex)
  this.context.fontColor[1](color.hex)
  console.log(this.context.fontColor)
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