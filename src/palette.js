import React from 'react';
import { ColorPicker, ChromePicker } from 'react-color';
import { useColor } from 'react-color-palette';
import "react-color-palette/lib/css/styles.css";
import { Stage, Layer, Line } from 'react-konva';
import './css.css'
// let color = 'red';
class Palette extends React.Component {
    constructor(){
        super();
    }

    render(){
    // const mystyle = {
    //     color: {color},
    //     backgroundColor: "DodgerBlue",
    //     padding: "10px",
    //     fontFamily: "Arial"
    //   };
  return (<div><div style={this.props.style}>

  </div>
  <div style={this.props.style}/>

  </div>)
  };
}
export default Palette;