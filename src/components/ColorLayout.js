import classes from "./ColorLayout.module.css";


const ColorLayout = () => {

  // const onColorClick = (e) => {
  //   props.handleColorChange()
  // }

    return (
      <div className={classes.colorWrapper}>
        <h2>list of color buttons</h2>
        <div className={classes.buttonContainer}>
          <button>Green</button>
          <button>Red</button>
          <button>Blue</button>
          <button>Orange</button>
          <button>Yellow</button>
        </div>
      </div>
    )
};

export default ColorLayout;