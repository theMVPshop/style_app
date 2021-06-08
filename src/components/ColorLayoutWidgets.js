import React from 'react';
import { ChromePicker } from 'react-color';

class ColorLayoutWidgets extends React.Component {


  state = {
    backgroundColor: '#fff'
  };

  handleChangeComplete = (color, event) => {
    this.setState({ backgroundColor: color.hex,
  }, function(){})
        this.props.handleColorChange(color.hex)

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

// const ColorLayoutButtons = (props) => {

  // const onColorClick = (color) => {
  //   props.handleColorChange(color)
  // };


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

export default ColorLayoutWidgets;