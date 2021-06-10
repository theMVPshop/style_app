
import ColorLayoutWidgets from "./ColorLayoutWidgets";


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