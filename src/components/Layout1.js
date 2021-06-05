import classes from './Layout1.module.css';

const Layout1 = (props) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.boxContainer}  style={props.style}>

      <div className={classes.box1} >
        <h1>Title</h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
          </p>
      </div>

      <div className={classes.box2}>
        <h1>Title</h1>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now
        </p>
      </div>

      </div>
    </div>

  )
};

export default Layout1;