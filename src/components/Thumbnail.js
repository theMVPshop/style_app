import classes from './Thumbnail.module.css';

const Thumbnail = (props) => {

  const onThumbnailClick = (e) => {
    props.handleLayoutChange(props.id)
  }

  return (
      <button className={classes.thumbnailButton} onClick={onThumbnailClick}>
        <div className={classes.img}>
          <img src={props.src} alt="thumbnails"/>
        </div>
      </button>
  )
};

export default Thumbnail;