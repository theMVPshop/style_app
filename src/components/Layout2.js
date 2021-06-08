import classes from './Layout2.module.css';
import React, { useContext } from 'react';
import { FontContext } from '../FontComponents/FontContext';

const Layout2 = props => {
  const { body, bodyV, title, titleV } = useContext(FontContext);
  const [bodyFont] = body;
  const [bodyVariant] = bodyV;
  const [titleFont] = title;
  const [titleVariant] = titleV;

  return (
    <div className={classes.wrapper}>
      <div className={classes.boxContainer}  style={props.style}>
        <div className={classes.column1}>
          <h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}` }}>Title</h1>
          <p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}` }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={classes.column2}>
          <h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}` }}>Title</h1>
          <p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}` }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={classes.column3}>
          <h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}` }}>Title</h1>
          <p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}` }}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
      </div>
    </div>
  )
};

export default Layout2;


