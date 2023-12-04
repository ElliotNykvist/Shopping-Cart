import "./Video.css";
import HoverVideoPlayer from 'react-hover-video-player';

const Video = () => {
  return (  
    <HoverVideoPlayer
    videoSrc="/volvo.mp4"
    pausedOverlay={ 
      <img
        src="thumbnail-image.jpg"
        alt=""
      /> }
    />
  )
}

export default Video;