import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";
import "./Media.css";

function Media() {
  return (
    <div className="media-combined-page">
      <div className="media-section">
        <PhotoGallery />
      </div>
      <hr className="media-divider" />
      <div className="media-section">
        <VideoGallery />
      </div>
    </div>
  );
}

export default Media;
