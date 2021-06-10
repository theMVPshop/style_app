import './App.css';
import { useState } from 'react';
import MainDisplay from './components/MainDisplay';
import ThumbnailLayout from './components/ThumbnailLayout';
import ColorLayout from './components/ColorLayout';
import classes from './App.module.css';
import Font from './FontComponents/Font';
import {FontProvider} from './FontComponents/FontContext'

function App() {

  const [displayLayout, setDisplayLayout] = useState('');
  const [displayBackgroundColor, setDisplayColor] = useState('');
  const [displaySecondaryColor, setDisplaySecondaryColor] = useState('');
  const [displayFontColor, setDisplayFontColor] = useState('');

  const displayLayoutHandler = (displayId) => {
    setDisplayLayout(displayId);
  }

  const displayBackgroundColorHandler = (backgroundColorId) => {
    setDisplayColor(backgroundColorId);
    console.log(backgroundColorId)
  }

  const displaySecondaryColorHandler = (secondaryColorId) => {
    setDisplaySecondaryColor(secondaryColorId);
  }

  const displayFontColorHandler = (fontColorId) => {
    setDisplayFontColor(fontColorId);
  }

  return (
    <div>
      <FontProvider>
      <ThumbnailLayout handleLayoutChange={displayLayoutHandler} />
      <div className={classes.layoutWrapper}>
        <ColorLayout 
          handleBackgroundColorChange={displayBackgroundColorHandler}
          handleSecondaryColorChange={displaySecondaryColorHandler}
          handleFontColorChange={displayFontColorHandler} />
        <div className={classes.main}>
        <MainDisplay 
          displayLayoutId={displayLayout}
          displayBackgroundColorId={displayBackgroundColor}
          displaySecondaryColorId={displaySecondaryColor}
          displayFontColorId={displayFontColor}
          />
        </div>
        <Font />
      </div>
      </FontProvider>
    </div>
  
  );
}

export default App;
