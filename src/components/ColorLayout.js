
import ColorLayoutWidgets from "./ColorLayoutWidgets";
import classes from "./ColorLayout.module.css";


const ColorLayout = (props) => {

  return (
    <div className={classes.colorWrapper}>
      <ColorLayoutWidgets 
        handleBackgroundColorChange={props.handleBackgroundColorChange}
        handleSecondaryColorChange={props.handleSecondaryColorChange}
        handleFontColorChange={props.handleFontColorChange}
      />
    </div>
  );

};
    

export default ColorLayout;