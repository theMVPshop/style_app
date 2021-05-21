import Thumbnail from './Thumbnail';
import thumbnaildata from './thumbnaildata';
import classes from './ThumbnailLayout.module.css';


const ThumbnailLayout = () => {

  return (
    
      <div className={classes.sidebarwrapper}>
          <div className={classes.sidebar}>
            {thumbnaildata.thumbnails.map((thumbnail) => {
            return <Thumbnail {...thumbnail}/>
            })}
          </div>
      </div>
  
    // <div>
    

    // <div styles="cursor: pointer;">
    //   <img src="Images/Thumbnail1.svg" draggable="false" />
    // </div>

    // </div>
  )
};

export default ThumbnailLayout;