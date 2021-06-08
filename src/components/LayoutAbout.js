import classes from './LayoutAbout.module.css';
import avatar from './avatar.png';

const LayoutAbout = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.boxContainer} style={props.style}>
        <div className={classes.header}><h1>About</h1></div>
          <div className={classes.body}>
            <div className={classes.box} style={props.secondary}><h2>Name</h2><img src={avatar} alt="avatar" className={classes.avatar} /><p style={props.font}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p></div>
            <div className={classes.box} style={props.secondary}><h2>Name</h2><img src={avatar} alt="avatar" className={classes.avatar} /><p style={props.font}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p></div>
            <div className={classes.box} style={props.secondary}><h2>Name</h2><img src={avatar} alt="avatar" className={classes.avatar} /><p style={props.font}>s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p></div>
          </div>
      </div>
    </div>
  );
};

export default LayoutAbout;