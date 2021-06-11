import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const FontContext = createContext();

export function FontProvider(props) {
  const [titleFont, setTitleFont] = useState("");
  const [titleVariant, setTitleVariant] = useState("");
  const [bodyFont, setBodyFont] = useState("");
  const [bodyVariant, setBodyVariant] = useState("");
  const [subTitleFont, setSubTitleFont] = useState("");
  const [subVariant, setSubVariant] = useState("");
  const [fonts, setFonts] = useState([]);
  const [background, setBackground] = useState("#721659");
  const [secondary, setSecondary] = useState("#ffff");
  const [fontColor, setFontColor] = useState("#ffff");

  useEffect(() => {
    let arr = [];
    const fetchData = async () => {
      const result = await axios(
        `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_API_KEY}&sort=popularity`
      );
      for (let x = 0; x < 50; x++) {
        arr.push(result.data.items[x]);
      }
      setFonts(arr);
      setTitleFont("Roboto");
      setTitleVariant("regular");
      setSubTitleFont("Roboto");
      setSubVariant("regular");
      setBodyFont("Roboto");
      setBodyVariant("regular");
    };

    fetchData();
  }, []);

  return (
    <FontContext.Provider
      value={{
        title: [titleFont, setTitleFont],
        titleV: [titleVariant, setTitleVariant],
        body: [bodyFont, setBodyFont],
        bodyV: [bodyVariant, setBodyVariant],
        subTitle: [subTitleFont, setSubTitleFont],
        subV: [subVariant, setSubVariant],
        loadFonts: [fonts, setFonts],
        background: [background, setBackground],
        secondary: [secondary, setSecondary],
        fontColor: [fontColor, setFontColor],
      }}
    >
      {props.children}
    </FontContext.Provider>
  );
}
