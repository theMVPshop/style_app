import React from 'react';
import { ChromePicker } from 'react-color';

class ColorLayoutWidgets extends React.Component {


  state = {
    backgroundColor: '#fff'
  };

  handleChangeComplete = (color, event) => {
    this.setState({ backgroundColor: color.hex,
  }, function(){})
        this.props.handleBackgroundColorChange(color.hex)

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

export default ColorLayoutWidgets;