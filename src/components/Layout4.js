import classes from './Layout4.module.css';

const Layout4 = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.boxContainer} style={props.style}>
        <div className={classes.column1}>
          <h1>Title</h1>
          <p className={classes.text1}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={classes.column2}>
          <div className={classes.box1}><h1>Title</h1><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
          <div className={classes.box2}><h1>Title</h1><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p></div>
        </div>
      </div>
    </div>
  )
};

export default Layout4;