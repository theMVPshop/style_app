import './App.css';
import { useState } from 'react';
import MainDisplay from './components/MainDisplay';
import ThumbnailLayout from './components/ThumbnailLayout';
import ColorLayout from './components/ColorLayout';
import classes from './App.module.css';

function App() {

  const [displayLayout, setDisplayLayout] = useState('');
  const [displayBackgroundColor, setDisplayBackgroundColor] = useState('');
  const [displaySecondaryColor, setDisplaySecondaryColor] = useState('');
  const [displayFontColor, setDisplayFontColor] = useState('');

  const displayLayoutHandler = (displayId) => {
    setDisplayLayout(displayId);
  }

  const displayBackgroundColorHandler = (backgroundColorId) => {
    setDisplayBackgroundColor(backgroundColorId);
  }

  const displaySecondaryColorHandler = (secondaryColorId) => {
    setDisplaySecondaryColor(secondaryColorId);
  }

  const displayFontColorHandler = (fontColorId) => {
    setDisplayFontColor(fontColorId);
  }

  return (
    <div>
      <ThumbnailLayout handleLayoutChange={displayLayoutHandler} />
      <div className={classes.layoutWrapper}>
        <ColorLayout 
          handleBackgroundColorChange={displayBackgroundColorHandler} 
          handleSecondaryColorChange={displaySecondaryColorHandler}
          handleFontColorChange={displayFontColorHandler}
          />
        <MainDisplay 
          displayLayoutId={displayLayout}
          displayBackgroundColorId={displayBackgroundColor}
          displaySecondaryColorId={displaySecondaryColor}
          displayFontColorId={displayFontColor}
          />
        {/* <FontLayout handleFontChange={displayFontHandler}/> */}
      </div>
    </div>
  
  );
}

export default App;
