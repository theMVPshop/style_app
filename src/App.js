import './App.css';
import { useState } from 'react';
import MainDisplay from './components/MainDisplay';
import ThumbnailLayout from './components/ThumbnailLayout';

function App() {

  const [displayLayout, setDisplayLayout] = useState('');

  const displayLayoutHandler = (displayId) => {
    setDisplayLayout(displayId);
  }

  return (
    <div>
      <ThumbnailLayout handleLayoutChange={displayLayoutHandler}/>
      <MainDisplay displayId={displayLayout}/>
    </div>
  
  );
}

export default App;
