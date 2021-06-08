import React from "react";
import SimpleSelect from "./Title.jsx";
import BodyComponent from "./Body.jsx";
import Suggestions from "./Suggestions";
import FontLoader from "./FontLoader";
import SubTitleComponent from './Subtitle.jsx';
import Paper from '@material-ui/core/Paper';

function Font() {
  const bodyStyle = {
    display: "flex",
    margin: "10px",
    padding: "5px",
    flexDirection: "column",
    maxWidth: '350px'
  };

  return (
    
      <Paper style={bodyStyle} elevation={3}>
        <FontLoader/>
        <Suggestions/>
        <SimpleSelect/>
        <SubTitleComponent/>
        <BodyComponent/>
       
      </Paper>
     
   
  );
}

export default Font;
