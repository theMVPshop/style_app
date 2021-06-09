import classes from './Layout3.module.css';
import React, { useContext } from 'react';
import { FontContext } from '../FontComponents/FontContext';

const Layout3 = props => {
  const { body, bodyV, title, titleV } = useContext(FontContext);
  const [bodyFont] = body;
  const [bodyVariant] = bodyV;
  const [titleFont] = title;
  const [titleVariant] = titleV;

  return (
    <div className={classes.wrapper}>
  <div className={classes.boxContainer} style={props.style}>
    <div className={classes.header} style={props.secondary} >
      <h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, color: `${props.font.color}` }}>Cool Title</h1>
      <div style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }} className={classes.text1}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no
      </div>
    </div>
    <div className={classes.body} style={props.style}>
      <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, }}>Cool Title</h2><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, }}>Cool Title</h2><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, }}>Cool Title</h2><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, }}>Cool Title</h2><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, }}>Cool Title</h2><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, }}>Cool Title</h2><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
    </div>
  </div>
 </div>
  )
};

export default Layout3;