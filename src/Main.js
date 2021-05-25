import React from 'react';
import { ColorPicker, ChromePicker } from 'react-color';
import { useColor } from 'react-color-palette';
import "react-color-palette/lib/css/styles.css";
import ColorChooser from './ColorChooser';
import './App.css';

function App() {

 return <div className='rowC'>
   <ColorChooser />
   <ColorChooser />
   <ColorChooser />
   <ColorChooser />
   </div>
};

export default App;