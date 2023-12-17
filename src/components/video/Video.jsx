import "./Video.css";
import HoverVideoPlayer from 'react-hover-video-player';
import { Link } from "react-router-dom";

const Video = () => {
  return ( 
    <container>
      <HoverVideoPlayer className="video"
      videoSrc="/volvo.mp4"
      pausedOverlay={ 
        <img
          src="thumbnail-image.jpg"
          alt=""
        /> }
      />
      <div className="text">
        <h1>Combine & save with <br></br>Volvo Offers</h1>
        <p>Maximise your savings now by combining your exclusive offers.</p>
        <Link to='/Shop'><button>View Offers</button></Link> 
      </div>
    </container>
  )
}

export default Video;