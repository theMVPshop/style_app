import React from 'react';
import { SketchPicker } from 'react-color';

class ColorLayoutButtons extends React.Component {

  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    this.setState({ background: color.hex });
  };

  render() {
    return (
      <SketchPicker
        color={ this.state.background }
        onChangeComplete={ this.handleChangeComplete }
      />
    );
  }
}

// const ColorLayoutButtons = (props) => {

//   const onColorClick = (color) => {
//     props.handleColorChange(color)
//   };


//     return (
//       <div>
//         <h2>list of color buttons</h2>
//       <div/>
      
//       <div className={classes.colorButtonWrapper}>
//         {colordata.colors.map((color, i) => {
//           return <button style={{backgroundColor: color.hex}} 
//             onClick={() => {onColorClick(color.hex)}}
//             key={i}>
//             {color.colorName}
//           </button>
//           })}
//       </div>

//       {/* <div>
//         <ChromePicker/>
//       </div> */}

//     </div>
//   )
// }

export default ColorLayoutButtons;