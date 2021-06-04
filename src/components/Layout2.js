import classes from './Layout2.module.css';

const Layout2 = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.boxContainer}  style={props.style}>
        <div className={classes.column1}>
          <h1>Title</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={classes.column2}>
          <h1>Title</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
        <div className={classes.column3}>
          <h1>Title</h1>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        </div>
      </div>
    </div>
  )
};

export default Layout2;


