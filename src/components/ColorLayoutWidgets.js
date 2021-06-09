import React, {useState} from 'react';
import BackgroundColorWidget from './BackgroundColorWidget';
import SecondaryColorWidget from './SecondaryColorWidget';
import FontColorWidget from './FontColorWidget';
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ColorLayoutWidgets = props => {
  const [ widget, setWidget ] = useState('background')
  const classes = useStyles();

  const bodyStyle = {
    display: "flex",
    margin: "10px",
    padding: "5px",
    flexDirection: "column",
    maxWidth: '350px'
  };

  const handleChange = (event) => {
    setWidget(event.target.value)
  }

  function ColorLoader(){
    if(widget === 'background'){
      return <BackgroundColorWidget handleBackgroundColorChange={props.handleBackgroundColorChange} />
    } else if (widget === 'secondary'){
      return <SecondaryColorWidget handleSecondaryColorChange={props.handleSecondaryColorChange} />
    } else {
      return <FontColorWidget handleFontColorChange={props.handleFontColorChange} />
    }
  }
  return (
    <div>
      <Paper style={bodyStyle} elevation={3}>
      <FormControl className={classes.formControl}>
            <InputLabel>Which Color?</InputLabel>
            <Select  onChange={handleChange}>
              
                <MenuItem  value={"background"}>background</MenuItem>
                <MenuItem  value={"secondary"}>secondary</MenuItem>
                <MenuItem  value={"font"}>font</MenuItem>
            </Select>
          </FormControl>
          <ColorLoader />
          </Paper>
    </div>
  )
}

export default ColorLayoutWidgets;