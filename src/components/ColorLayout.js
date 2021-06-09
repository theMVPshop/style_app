
import ColorLayoutWidgets from "./ColorLayoutWidgets";
import classes from "./ColorLayout.module.css";


const ColorLayout = (props) => {

  return (
    <div >
      <ColorLayoutWidgets 
        handleBackgroundColorChange={props.handleBackgroundColorChange}
        handleSecondaryColorChange={props.handleSecondaryColorChange}
        handleFontColorChange={props.handleFontColorChange}
      />
    </div>
  );

};
    

export default ColorLayout;