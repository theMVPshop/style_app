import classes from './Layout1.module.css';

const Layout1 = () => {
  return (
    <div className={classes.wrapper}>
  <div className={classes.boxContainer}>
    <div class={classes.header}>
      <h1>Cool Title</h1>
      <div className={classes.text1}> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no
      </div>
    </div>
    <div className={classes.body}>
      <div class={classes.box}><h2>Cool Title</h2><p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div class={classes.box}><h2>Cool Title</h2><p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div class={classes.box}><h2>Cool Title</h2><p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div class={classes.box}><h2>Cool Title</h2><p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div class={classes.box}><h2>Cool Title</h2><p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
      <div class={classes.box}><h2>Cool Title</h2><p>as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors no</p></div>
    </div>
  </div>
 </div>
  )
};

export default Layout1;