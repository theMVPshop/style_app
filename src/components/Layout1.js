import classes from './Layout1.module.css';
import React, { useContext } from 'react';
import { FontContext } from '../FontComponents/FontContext'

const Layout1 = (props) => {
  const { body, bodyV, title, titleV } = useContext(FontContext);
  const [bodyFont] = body;
  const [bodyVariant] = bodyV;
  const [titleFont] = title;
  const [titleVariant] = titleV;

  return (
    <div className={classes.wrapper}>
      <div className={classes.boxContainer}  style={props.style}>


      <div className={classes.box1} style={props.secondary}>
        <h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, color: `${props.font.color}` }}>Title</h1>
          <p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}`}}>

            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
          </p>
      </div>

      <div className={classes.box2} style={props.secondary}>
        <h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, color: `${props.font.color}` }}>Title</h1>
        <p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
        </p>
      </div>

      </div>
    </div>

  )
};

export default Layout1;