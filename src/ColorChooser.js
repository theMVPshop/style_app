import React from 'react';
import { ColorPicker, ChromePicker } from 'react-color';
import { useColor } from 'react-color-palette';
import "react-color-palette/lib/css/styles.css";
import Palette from './palette';
var hexToHsl = require('hex-to-hsl');

class ColorChooser extends React.Component {
  constructor(props){
    super(props);
    this.style = {
      color: this.state.color
    }
  }


  state = {
    backgroundColor: '#fff',
    width: '225px',
    height: '50px'
  };

  handleChangeComplete = (color, event) => {
    
    this.setState({ backgroundColor: color.hex,
      hsl: hexToHsl(color.hex)
  }, function(){
    console.log('color hex ' + this.state.hsl)
  })};
  render(){

  return <div>
  <Palette style={this.state}/>
  <ChromePicker         color={ this.state.backgroundColor }
  onChangeComplete={ this.handleChangeComplete }
  />
  </div>

  }
};

export default ColorChooser;