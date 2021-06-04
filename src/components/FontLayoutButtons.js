import classes from './FontLayoutButtons.module.css';
import fontdata from './fonts';

const FontLayoutButtons = props => {
  
  const onFontClick = (font) => {
    props.handleFontChange(font);
  }
  
  return (
    
    <div>
      <h2>list of fonts</h2>
      <div className={classes.fontButtonsWrapper}>
        {fontdata.fonts.map((font, i) => {
            return <button style={{font: font.fontFamily}}
              onClick={() => {onFontClick(font.fontFamily)}}
              key={i}>
              {font.fontFamily}
            </button>
            })}
      </div>
    </div>
  )
};

export default FontLayoutButtons;