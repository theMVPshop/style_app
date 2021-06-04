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

export default function BodyComponent() {
  const classes = useStyles();
  const [fonts, setFonts] = useState([]);
  const { body } = useContext(FontContext);
  const [bodyFont, setBodyFont] = body;
  const { bodyV } = useContext(FontContext);
  const [bodyVariant, setBodyVariant] = bodyV;
  const [variants, setVariants] = useState([]);

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
    setBodyFont(randomFont.family);
    setVariants(randomFont.variants);
    let vnum = Math.floor(Math.random() * randomFont.variants.length);
    setBodyVariant(randomFont.variants[vnum])
  };

  const handleChange = (event) => {
    setBodyFont(event.target.value);
    setVariants(
      fonts.filter((font) => font.family === event.target.value)[0].variants
    );
    setBodyVariant("regular");
  };
  const handleVariant = (event) => {
    setBodyVariant(event.target.value);
  };

  return (
    <div>
      <div className='bodyStyle'>
        <div style={{display:'flex'}}>
      <FormControl className={classes.formControl}>
        <InputLabel>Body Font</InputLabel>
        <Select value={bodyFont} onChange={handleChange}>
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
        <Select value={bodyVariant} onChange={handleVariant}>
          {variants.map((variant) => (
            <MenuItem key={variant} value={variant}>
              {variant}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
      </div>

      <Button className="button" size="small" variant="contained" onClick={() => randomize()}>
        Random Body Font?
      </Button>
      </div>
      <div className='example'>
      <p style={{ fontFamily: `${bodyFont}` }}>
        This will be your body in {bodyFont}, {bodyVariant}!
      </p>
      </div>
    </div>
  );
}
