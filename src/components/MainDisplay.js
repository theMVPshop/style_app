
import classes from './MainDisplay.module.css';
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';
import Layout4 from './Layout4';
import LayoutAbout from './LayoutAbout';
import ColorLayout from './ColorLayout';
import FontLayout from './FontLayout';

const MainDisplay = props => {

  console.log(props.displayLayoutId)

  const layoutComponent = (displayId) => {
    switch (displayId) {
      case "About":
        return (<LayoutAbout />)
      case "Display1":
        return (<Layout1 />)
      case "Display2":
        return (<Layout2 />)
      case "Display3":
        return (<Layout3 />)
      case "Display4":
        return (<Layout4 />)
      default: 
        return (<LayoutAbout />)
    }
  }

  return (

    
    <div className={classes.mainContainer}>
      <ColorLayout />
      {layoutComponent(props.displayLayoutId)}
      <FontLayout />
    </div>

  )
};

export default MainDisplay;