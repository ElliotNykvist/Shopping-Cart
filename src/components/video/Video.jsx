import "./Video.css";
import HoverVideoPlayer from 'react-hover-video-player';

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
        <button>View Offers</button>
      </div>
    </container>
  )
}

export default Video;