
import classes from './MainDisplay.module.css';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';
import LayoutAbout from './LayoutAbout';

const MainDisplay = props => {

  console.log(props.displayLayoutId)
  console.log(props.displayColorId)

  const layoutComponent = (props) => {

    const backgroundHexColor = props.displayBackgroundColorId;
    const secondaryHexColor = props.displaySecondaryColorId;
    const fontHexColor = props.displayFontColorId;


    switch (props.displayLayoutId) {
      case "About":
        return (<LayoutAbout 
          style={{backgroundColor: backgroundHexColor}} 
          secondary={{backgroundColor: secondaryHexColor}} 
          font={{color: fontHexColor}}/>)
      case "Display1":
        return (<Layout1 
          style={{backgroundColor: backgroundHexColor}} 
          secondary={{backgroundColor: secondaryHexColor}} 
          font={{color: fontHexColor}}/>)
      case "Display2":
        return (<Layout2 
          style={{backgroundColor: backgroundHexColor}} 
          secondary={{backgroundColor: secondaryHexColor}} 
          font={{color: fontHexColor}}/>)
      case "Display3":
        return (<Layout3 
          style={{backgroundColor: backgroundHexColor}} 
          secondary={{backgroundColor: secondaryHexColor}} 
          font={{color: fontHexColor}}/>)
      case "Display4":
        return (<Layout4 
          style={{backgroundColor: backgroundHexColor}} 
          secondary={{backgroundColor: secondaryHexColor}} 
          font={{color: fontHexColor}}/>)
      default: 
        return (<LayoutAbout 
          style={{backgroundColor: backgroundHexColor}} 
          secondary={{backgroundColor: secondaryHexColor}} 
          font={{color: fontHexColor}}/>)
    }
  }

  return (

    
    <div className={classes.mainContainer}>
      {layoutComponent(props)}
    </div>

  )
};

export default MainDisplay;