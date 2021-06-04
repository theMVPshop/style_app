
import classes from './FontLayout.module.css';
import FontLayoutButtons from './FontLayoutButtons';

const FontLayout = props => {
  return (
    <div className={classes.fontWrapper}>
      <FontLayoutButtons handleFontChange={props.handleFontChange}/>
    </div>
  )
};

export default FontLayout;