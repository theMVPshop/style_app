import { ChromePicker } from 'react-color';
import React from 'react';
import {FontContext} from '../FontComponents/FontContext';

class BackgroundColorWidget extends React.Component {
  static contextType = FontContext
  
state = {
  backgroundColor: this.context.background[0],
};

handleChangeComplete = (color, event) => {
  this.setState({ backgroundColor: color.hex,
}, function(){})
  this.props.handleBackgroundColorChange(color.hex)
  this.context.background[1](color.hex)
  
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

export default BackgroundColorWidget;