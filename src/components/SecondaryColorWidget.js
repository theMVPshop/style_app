import { ChromePicker } from 'react-color';
import React from 'react';
import {FontContext} from '../FontComponents/FontContext';

class SecondaryColorWidget extends React.Component {

state = {
  backgroundColor: '#fff'
};

handleChangeComplete = (color, event) => {
  this.setState({ backgroundColor: color.hex,
})
  this.props.handleSecondaryColorChange(color.hex)
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