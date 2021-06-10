import { ChromePicker } from 'react-color';
import React from 'react';
import {FontContext} from '../FontComponents/FontContext';

class SecondaryColorWidget extends React.Component {
  static contextType = FontContext
state = {
  backgroundColor: this.context.secondary[0]
};

handleChangeComplete = (color, event) => {
  this.setState({ backgroundColor: color.hex,
})
  this.props.handleSecondaryColorChange(color.hex)
  this.context.secondary[1](color.hex)
};

render() {
  return (
    <ChromePicker
      color={this.state.backgroundColor}
      onChangeComplete={this.handleChangeComplete}
    />
  );
}
}

export default SecondaryColorWidget;