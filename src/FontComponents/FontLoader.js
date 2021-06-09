import React, { useContext } from "react";
import GoogleFontLoader from "react-google-font-loader";
import { FontContext } from "./FontContext";

export default function FontLoader(){
  const { body, bodyV, title, titleV, subTitle, subV  } = useContext(FontContext);
  const [bodyFont] = body;
  const [bodyVariant] = bodyV;
  const [titleFont] = title;
  const [titleVariant] = titleV;
  const [subTitleFont] = subTitle;
  const [subVariant] = subV;

  function Loader(){
    if(titleFont === bodyFont) {
      return <GoogleFontLoader
      fonts={[
        {
          font: `${titleFont}`,
          weights: [`${titleVariant}`, `${bodyVariant}`]
        },
        {
          font: `${subTitleFont}`,
          weights: [`${subVariant}`]
        }
      ]}/>
    } else if (titleFont === subTitleFont){
      console.log("title=subtitle")
      return <GoogleFontLoader
      fonts={[
        {
          font: `${titleFont}`,
          weights: [`${titleVariant}`, `${subVariant}`]
        },
        {
          font: `${bodyFont}`,
          weights: [`${bodyVariant}`]
        }
      ]}/>
    }
    else if (bodyFont === subTitleFont){
      return <GoogleFontLoader
      fonts={[
        {
          font: `${titleFont}`,
          weights: [`${titleVariant}`, `${subVariant}`]
        },
        {
          font: `${bodyFont}`,
          weights: [`${bodyVariant}`, `${subVariant}`]
        }
      ]}/>
    } else if ((bodyFont === subTitleFont)&&(titleFont === subTitleFont)){
      return <GoogleFontLoader
      fonts={[
        {
          font: `${titleFont}`,
          weights: [`${titleVariant}`, `${subVariant}`, `${bodyVariant}`]
        },
        
      ]}/>
    } else {

      return <GoogleFontLoader
      fonts={[
        {
          font: `${titleFont}`,
          weights: [`${titleVariant}`]
        },
        {
          font: `${bodyFont}`,
          weights: [`${bodyVariant}`]
        },
        {
          font: `${subTitleFont}`,
          weights: [`${subVariant}`]
        }
      ]}/>}
  }
  return(
    <div>
      <Loader />  
    </div>
  )
}