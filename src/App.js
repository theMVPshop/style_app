import './App.css';
import { useState } from 'react';
import MainDisplay from './components/MainDisplay';
import ThumbnailLayout from './components/ThumbnailLayout';
import FontLayout from './components/FontLayout';
import ColorLayout from './components/ColorLayout';
import classes from './App.module.css';
import Font from './FontComponents/Font';
import {FontProvider} from './FontComponents/FontContext'

function App() {

  const [displayLayout, setDisplayLayout] = useState('');
  const [displayColor, setDisplayColor] = useState('');
  const [displayFont, setDisplayFont] = useState('');

  const displayLayoutHandler = (displayId) => {
    setDisplayLayout(displayId);
  }

  const displayColorHandler = (colorId) => {
    setDisplayColor(colorId);
    console.log(colorId)
  }

  const displayFontHandler = (fontId) => {
    setDisplayFont(fontId);
  }

  return (
    <div>
      <FontProvider>
      <ThumbnailLayout handleLayoutChange={displayLayoutHandler} />
      <div className={classes.layoutWrapper}>
        <ColorLayout handleColorChange={displayColorHandler} />
        <MainDisplay 
          displayLayoutId={displayLayout}
          displayColorId={displayColor} 
          displayFontId={displayFont}
          />
        {/* <FontLayout handleFontChange={displayFontHandler}/> */}
      <Font />
      </div>
      </FontProvider>
    </div>
  
  );
}

export default App;
