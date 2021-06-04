import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { FontContext } from "./FontContext";
import './Picker.css'

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SubTitleComponent() {
  const classes = useStyles();
  const [fonts, setFonts] = useState([]);
  const { subTitle } = useContext(FontContext);
  const [subTitleFont, setSubTitleFont] = subTitle;
  const { subV } = useContext(FontContext);
  const [subVariant, setSubVariant] = subV;
  const [variants, setVariants] = useState([]);
  
  const bodyStyle = {
    display: "flex",
    margin: "5px",
    height: "40px",
    justifyContent: "flex-start",
    alignItems:"center",
    padding: "5px",
    flexDirection: "row"
  };

  useEffect(() => {
    let arr = [];
    const fetchData = async () => {
      const result = await axios(
        "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCtrYe5NA6nnIxkKEO61XM2oS-USy-BMUQ&sort=popularity"
      );
      for (let x = 0; x < 50; x++) {
        arr.push(result.data.items[x]);
      }
      setFonts(arr);
    };

    fetchData();
  }, []);

  const randomize = () => {
    let num = Math.floor(Math.random() * fonts.length);
    let randomFont = fonts[num];
    setSubTitleFont(randomFont.family);
    setVariants(randomFont.variants);
    let vnum = Math.floor(Math.random() * randomFont.variants.length);
    setSubVariant(randomFont.variants[vnum])
  };

  const handleChange = (event) => {
    setSubTitleFont(event.target.value);
    setVariants(
      fonts.filter((font) => font.family === event.target.value)[0].variants
    );
    setSubVariant("regular");
  };
  const handleVariant = (event) => {
    setSubVariant(event.target.value);
  };

  return (
    <div>
      <div style={bodyStyle}>
      <FormControl className={classes.formControl}>
        <InputLabel>Subtitle Font</InputLabel>
        <Select value={subTitleFont} onChange={handleChange}>
          {fonts.map((font) => (
            <MenuItem key={font.family} value={font.family}>
              {font.family}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Variants</InputLabel>
        <Select value={subVariant} onChange={handleVariant}>
          {variants.map((variant) => (
            <MenuItem key={variant} value={variant}>
              {variant}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      <Button size="small" variant="contained" onClick={() => randomize()}>
        Random Subitle Font?
      </Button>
      </div>
      <div style={bodyStyle}>
      <p style={{ fontFamily: `${subTitleFont}` }}>
        Your Subtitles and Captions will be in {subTitleFont}, {subVariant}!
      </p>
    </div>
    </div>
  );
}
