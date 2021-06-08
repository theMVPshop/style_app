import React from 'react';
import BackgroundColorWidget from './BackgroundColorWidget';
import SecondaryColorWidget from './SecondaryColorWidget';
import FontColorWidget from './FontColorWidget';

const ColorLayoutWidgets = props => {
  return (
    <div>
        <BackgroundColorWidget handleBackgroundColorChange={props.handleBackgroundColorChange} />
        <SecondaryColorWidget handleSecondaryColorChange={props.handleSecondaryColorChange} />
        <FontColorWidget handleFontColorChange={props.handleFontColorChange} />
    </div>
  )
}

export default ColorLayoutWidgets;