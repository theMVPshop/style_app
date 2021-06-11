import React, { useState, useContext } from "react";
import { FontContext } from "./FontContext";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

export default function Suggestions() {
  const { title } = useContext(FontContext);
  const [, setTitleFont] = title;
  const { titleV } = useContext(FontContext);
  const [, setTitleVariant] = titleV;
  const { body } = useContext(FontContext);
  const [, setBodyFont] = body;
  const { bodyV } = useContext(FontContext);
  const [, setBodyVariant] = bodyV;
  const { subTitle } = useContext(FontContext);
  const [, setSubTitleFont] = subTitle;
  const { subV } = useContext(FontContext);
  const [, setSubVariant] = subV;

  const bodyStyle = {
    display: "flex",
    margin: "5px",
    height: "40px",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "5px",
    flexDirection: "row",
  };
  const buttonStyle = {
    margin: "5px",
  };

  const suggestionsArr = [
    {
      title: "Open Sans",
      titleVariant: "regular",
      subtitle: "Open Sans",
      subVariant: "regular",
      body: "Roboto",
      bodyVariant: "regular",
    },
    {
      title: "Playfair Display",
      titleVariant: "regular",
      subtitle: "Playfair Display",
      subVariant: "regular",
      body: "Montserrat",
      bodyVariant: "300",
    },
    {
      title: "Merriweather",
      titleVariant: "regular",
      subtitle: "Merriweather",
      subVariant: "regular",
      body: "Lato",
      bodyVariant: "regular",
    },
    {
      title: "PT Sans Narrow",
      titleVariant: "700",
      subtitle: "PT Sans Narrow",
      subVariant: "700",
      body: "PT Sans",
      bodyVariant: "regular",
    },
    {
      title: "Lora",
      titleVariant: "regular",
      subtitle: "Lora",
      subVariant: "regular",
      body: "Lato",
      bodyVariant: "regular",
    },
    {
      title: "Fira Sans",
      titleVariant: "500",
      subtitle: "Fira Sans",
      subVariant: "500",
      body: "Merriweather",
      bodyVariant: "regular",
    },
  ];

  const [count, setCount] = useState(
    Math.floor(Math.random() * suggestionsArr.length)
  );
  const handleChange = () => {
    setCount(Math.floor(Math.random() * suggestionsArr.length));
    setTitleFont(suggestionsArr[count].title);
    setTitleVariant(suggestionsArr[count].titleVariant);
    setBodyFont(suggestionsArr[count].body);
    setBodyVariant(suggestionsArr[count].bodyVariant);
    setSubTitleFont(suggestionsArr[count].subtitle);
    setSubVariant(suggestionsArr[count].subVariant);
  };
  return (
    <div>
      <Card style={{ maxWidth: "450px", margin: "3px" }}>
        <div style={bodyStyle}>
          <h4>
            {" "}
            Would you like to start with a
            <Button
              size="small"
              variant="contained"
              style={buttonStyle}
              onClick={() => handleChange()}
            >
              Suggested Font Pairing?
            </Button>
          </h4>
        </div>
      </Card>
    </div>
  );
}
