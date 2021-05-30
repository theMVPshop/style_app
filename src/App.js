import './App.css';
import { useState } from 'react';
import MainDisplay from './components/MainDisplay';
import ThumbnailLayout from './components/ThumbnailLayout';

function App() {

  const [displayLayout, setDisplayLayout] = useState('');
  const [displayColor, setDisplayColor] = useState('');

  const displayLayoutHandler = (displayId) => {
    setDisplayLayout(displayId);
  }

  const displayColorHandler = (colorId) => {
    setDisplayColor(colorId);
  }

  return (
    <div>
      <ThumbnailLayout handleLayoutChange={displayLayoutHandler}/>
      <MainDisplay 
      displayLayoutId={displayLayout}/>
    </div>
  
  );
}

export default App;
