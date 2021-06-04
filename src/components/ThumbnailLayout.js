import Thumbnail from './Thumbnail';
import thumbnaildata from './thumbnaildata';
import classes from './ThumbnailLayout.module.css';


const ThumbnailLayout = (props) => {

  return (
    
      
      <div className={classes.navbarwrapper}> 
        <div className={classes.navbar}>
          {thumbnaildata.thumbnails.map((thumbnail, i) => {
          return <Thumbnail 
            key={i}
            handleLayoutChange={props.handleLayoutChange} 
            {...thumbnail}/>
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