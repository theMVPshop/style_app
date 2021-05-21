import classes from './Thumbnail.module.css';

const Thumbnail = (props) => {
  return (
    
      <div className={classes.img}>
        <img src={props.src} alt="thumbnails"/>
      </div>
    
    
  )
};

export default Thumbnail;