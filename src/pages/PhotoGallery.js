import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { photoCategories } from "../data/mediaData";
import Lightbox from "../components/Lightbox";
import "./PhotoGallery.css";

function PhotoGallery() {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  // Flatten for "All" and also for the lightbox ordering
  const allPhotos = useMemo(() => {
    if (activeCategory === "All") {
      return photoCategories.flatMap(c => c.photos);
    }
    const cat = photoCategories.find(c => c.name === activeCategory);
    return cat ? cat.photos : [];
  }, [activeCategory]);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(allPhotos.length / itemsPerPage);
  const visiblePhotos = allPhotos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="photo-gallery-page">
      <header className="gallery-page-hero">
        <h1 className="gallery-page-title">Photo Gallery</h1>
        <p className="gallery-page-sub">
          Moments from Shivmala Foundation programmes in rural Maharashtra
        </p>
      </header>

      <div className="gallery-filter-buttons">
        <button 
          className={`filter-btn ${activeCategory === "All" ? "active" : ""}`}
          onClick={() => handleCategoryChange("All")}
        >
          All
        </button>
        {photoCategories.map(cat => (
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
        <ul className="photo-gallery-grid">
          {visiblePhotos.map((ph, i) => (
            <li key={ph.id} className="photo-grid-item animation-fade-in">
              <button
                type="button"
                className="photo-gallery-tile"
                onClick={() => setLightboxIndex((currentPage - 1) * itemsPerPage + i)}
              >
                <img src={ph.src} alt={ph.alt} loading="lazy" />
                <div className="hover-overlay">
                  <span className="hover-text">View Larger</span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <div className="gallery-pagination">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="pagination-btn"
            >
              Prev
            </button>
            <span className="pagination-info">Page {currentPage} of {totalPages}</span>
            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="pagination-btn"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={allPhotos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </div>
  );
}

export default PhotoGallery;
