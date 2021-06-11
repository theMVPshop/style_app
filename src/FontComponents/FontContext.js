import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const FontContext = createContext();

export function FontProvider(props) {
  const [titleFont, setTitleFont] = useState("Roboto");
  const [titleVariant, setTitleVariant] = useState("regular");
  const [bodyFont, setBodyFont] = useState("Roboto");
  const [bodyVariant, setBodyVariant] = useState("regular");
  const [subTitleFont, setSubTitleFont] = useState("Roboto");
  const [subVariant, setSubVariant] = useState("regular");
  const [fonts, setFonts] = useState([]);
  const [background, setBackground] = useState("#721659");
  const [secondary, setSecondary] = useState('#ffff');
  const [fontColor, setFontColor] = useState('#ffff')

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
        fontColor: [fontColor, setFontColor]
      }}
    >
      {props.children}
    </FontContext.Provider>
  );
}
