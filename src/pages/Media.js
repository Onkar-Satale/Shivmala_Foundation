import PhotoGallery from "./PhotoGallery";
import VideoGallery from "./VideoGallery";
import "./Media.css";

import SEO from "../components/SEO";

function Media() {
  return (
    <div className="media-combined-page">
      <SEO 
        title="Shivmala Foundation Gallery | Events Photos Videos Bardapur"
        description="Shivmala Foundation photo gallery - AI workshops, medical camps, tree plantation, school visits in Bardapur."
      />
      <header className="media-hero" style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#0a0a0a', color: '#fff' }}>
        <h1 className="media-hero-title" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Shivmala Foundation Gallery & Media</h1>
        <p className="media-hero-sub" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
          Event Albums: Workshops, relief work, camps | Press Coverage: Newspaper clippings, news videos | Video Gallery: Digital Knowledge Test, Mission 2026
        </p>
      </header>
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
