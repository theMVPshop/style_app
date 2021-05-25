import React from 'react';
import { ColorPicker, ChromePicker } from 'react-color';
import { useColor } from 'react-color-palette';
import "react-color-palette/lib/css/styles.css";
import Palette from './palette';
var hexToHsl = require('hex-to-hsl');

class ColorChooser extends React.Component {


  state = {
    backgroundColor: '#fff',
    width: '225px',
    height: '50px',
    hone: 0,
    htwo: 0,
    hthree: 0
  }

hslconv = (h) => {
    this.setState({
        hone: this.state.backgroundColor[0],
        htwo: (h + 120) % 360,
        hthree: (h + 240) % 360
    })
    console.log(this.state)
}

  handleChangeComplete = (color, event) => {
    hslconv()
    this.setState({ backgroundColor: color.hex,
      hsl: hexToHsl(color.hex)
  }, function(){
    console.log('color hex ' + this.state)
    console.log(' this.state' + this.state)
  })};
  render()

  {

  return <div>
  <Palette style={this.state}/><Palette /><Palette /><Palette />
  <ChromePicker         color={ this.state.backgroundColor }
  onChangeComplete={ this.handleChangeComplete }
  />
  </div>

  }
};

export default ColorChooser;