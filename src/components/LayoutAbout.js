import classes from './LayoutAbout.module.css';
import avatar from './avatar.png';
import React, { useContext } from 'react';
import { FontContext } from '../FontComponents/FontContext';

const LayoutAbout = props => {
  const { body, bodyV, title, titleV, subTitle, subV } = useContext(FontContext);
  const [bodyFont] = body;
  const [bodyVariant] = bodyV;
  const [titleFont] = title;
  const [titleVariant] = titleV;
  const [subTitleFont] = subTitle;
  const [subVariant] = subV;
  
  return (
    <div className={classes.wrapper} >
      <div className={classes.boxContainer} style={props.style}>
        <div className={classes.header}><h1 style={{ fontFamily: `${titleFont}`, fontWeight: `${titleVariant}`, color: `${props.font.color}` }}>About</h1></div>
          <div className={classes.body}>
            <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${subTitleFont}`, fontWeight: `${subVariant}`, color: `${props.font.color}` }}>Name</h2><img src={avatar} alt="avatar" className={classes.avatar} /><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p></div>
            <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${subTitleFont}`, fontWeight: `${subVariant}`, color: `${props.font.color}` }}>Name</h2><img src={avatar} alt="avatar" className={classes.avatar} /><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p></div>
            <div className={classes.box} style={props.secondary}><h2 style={{ fontFamily: `${subTitleFont}`, fontWeight: `${subVariant}`, color: `${props.font.color}` }}>Name</h2><img src={avatar} alt="avatar" className={classes.avatar} /><p style={{ fontFamily: `${bodyFont}`, fontWeight: `${bodyVariant}`, color: `${props.font.color}` }}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p></div>
          </div>
      </div>
    </div>
  );
};

export default LayoutAbout;