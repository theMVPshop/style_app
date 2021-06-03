import './App.css';
import { useState } from 'react';
import MainDisplay from './components/MainDisplay';
import ThumbnailLayout from './components/ThumbnailLayout';
import FontLayout from './components/FontLayout';
import ColorLayout from './components/ColorLayout';
import classes from './App.module.css';

function App() {

  const [displayLayout, setDisplayLayout] = useState('');
  // const [displayColor, setDisplayColor] = useState('');

  const displayLayoutHandler = (displayId) => {
    setDisplayLayout(displayId);
  }

  // const displayColorHandler = (color) => {
  //   setDisplayColor(color);
  // }

  return (
    <div>
      <ThumbnailLayout handleLayoutChange={displayLayoutHandler} />
      <div className={classes.layoutWrapper}>
        <ColorLayout />
        <MainDisplay 
          displayLayoutId={displayLayout} />
        <FontLayout />
      </div>
    </div>
  
  );
}

export default App;
