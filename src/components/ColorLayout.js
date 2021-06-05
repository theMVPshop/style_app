
import ColorLayoutWidgets from "./ColorLayoutWidgets";
import classes from "./ColorLayout.module.css";


const ColorLayout = (props) => {

  return (
    <div className={classes.colorWrapper}>
      <ColorLayoutWidgets handleColorChange={props.handleColorChange}/>
    </div>
  );

};
    

export default ColorLayout;