
import ColorLayoutButtons from "./ColorLayoutButtons";
import classes from "./ColorLayout.module.css";


const ColorLayout = (props) => {

  return (
    <div className={classes.colorWrapper}>
      <ColorLayoutButtons handleColorChange={props.handleColorChange}/>
    </div>
  );

};
    

export default ColorLayout;