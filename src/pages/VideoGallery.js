import { useState, useMemo } from "react";
import { videoCategories } from "../data/mediaData";
import Lightbox from "../components/Lightbox";
import "./VideoGallery.css";

function VideoGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
  };

  const allVideos = useMemo(() => {
    if (activeCategory === "All") {
      return videoCategories.flatMap(c => c.videos);
    }
    const cat = videoCategories.find(c => c.name === activeCategory);
    return cat ? cat.videos : [];
  }, [activeCategory]);

  const lightboxVideos = useMemo(() => {
     return allVideos.map(v => ({ ...v, type: 'video' }));
  }, [allVideos]);

  return (
    <div className="video-gallery-page">
      <header className="gallery-page-hero">
        <h1 className="gallery-page-title">Video Gallery</h1>
        <p className="gallery-page-sub">
          Watch moments from our ongoing projects and programs
        </p>
      </header>

      {/* Filter buttons similar to PhotoGallery */}
      <div className="gallery-filter-buttons">
        <button 
          className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        {videoCategories.map(cat => (
           <button 
             key={cat.name}
             className={`filter-btn ${activeCategory === cat.name ? "active" : ""}`}
             onClick={() => handleCategoryChange(cat.name)}
           >
             {cat.name}
           </button>
        ))}
      </div>

      <div className="gallery-page-inner">
        <ul className="video-gallery-grid">
          {allVideos.length === 0 ? (
            <p className="no-media-msg">No videos found for this category.</p>
          ) : (
            allVideos.map((v, i) => (
              <li key={v.id} className="video-gallery-item animation-fade-in">
                <div className="video-gallery-thumb-container">
                    <video 
                      src={v.src} 
                      className="video-gallery-thumb-bg" 
                      muted 
                      preload="metadata"
                      onMouseEnter={(e) => e.target.play().catch(() => {})}
                      onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
                    />
                    <button
                      type="button"
                      className="video-gallery-thumb-overlay"
                      onClick={() => setLightboxIndex(i)}
                    >
                      <div className="play-button-icon">▶</div>
                    </button>
                </div>
                <div className="video-gallery-details">
                  <h3 className="video-card-title">{v.title}</h3>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={lightboxVideos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </div>
  );
}

export default VideoGallery;
