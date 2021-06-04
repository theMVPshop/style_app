import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { FontContext } from "./FontContext";
import "./Picker.css";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const { title, titleV, loadFonts } = useContext(FontContext);
  const [fonts] = loadFonts;
  const [titleFont, setTitleFont] = title;
  const [titleVariant, setTitleVariant] = titleV;
  const [variants, setVariants] = useState([]);

  const bodyStyle = {
    display: "flex",
    margin: "5px",
    height: "45px",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5px",
    flexDirection: "row",
  };

  const randomize = () => {
    let num = Math.floor(Math.random() * fonts.length);
    let randomFont = fonts[num];
    setTitleFont(randomFont.family);
    setVariants(randomFont.variants);
    let vnum = Math.floor(Math.random() * randomFont.variants.length);
    setTitleVariant(randomFont.variants[vnum]);
  };

  const handleChange = (event) => {
    setTitleFont(event.target.value);
    setVariants(
      fonts.filter((font) => font.family === event.target.value)[0].variants
    );
    setTitleVariant("regular");
  };
  const handleVariant = (event) => {
    setTitleVariant(event.target.value);
  };

  return (
    <div>
      <Card style={{ width: "450px", margin: "3px" }}>
        <div style={bodyStyle}>
          <FormControl className={classes.formControl}>
            <InputLabel>Title Font</InputLabel>
            <Select value={titleFont} onChange={handleChange}>
              {fonts.map((font) => (
                <MenuItem key={font.family} value={font.family}>
                  {font.family}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Variants</InputLabel>
            <Select value={titleVariant} onChange={handleVariant}>
              {variants.map((variant) => (
                <MenuItem key={variant} value={variant}>
                  {variant}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button size="small" variant="contained" onClick={() => randomize()}>
            Random Title Font?
          </Button>
        </div>
        <div style={bodyStyle}>
          <h2
            style={{
              fontFamily: `${titleFont}`,
              fontWeight: `${titleVariant}`,
            }}>
            This will be your title in {titleFont}, {titleVariant}
          </h2>
        </div>
      </Card>
    </div>
  );
}
