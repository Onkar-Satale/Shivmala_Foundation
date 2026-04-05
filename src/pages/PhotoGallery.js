import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  getPhotosForPage,
  photoGalleryPageCount,
} from "../data/galleryPhotos";
import Pagination from "../components/Pagination";
import Lightbox from "../components/Lightbox";
import "./PhotoGallery.css";

function PhotoGallery() {
  const { page: pageParam } = useParams();
  const page = Math.max(1, Math.min(photoGalleryPageCount, parseInt(pageParam, 10) || 1));
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (pageParam && parseInt(pageParam, 10) !== page) {
    return <Navigate to={`/gallery/photos/${page}`} replace />;
  }

  const photos = getPhotosForPage(page);

  return (
    <div className="photo-gallery-page">
      <header className="gallery-page-hero">
        <h1 className="gallery-page-title">Photo Gallery</h1>
        <p className="gallery-page-sub">
          Moments from Shivmala Foundation programmes in rural Maharashtra
        </p>
      </header>

      <div className="gallery-page-inner">
        <ul className="photo-gallery-grid">
          {photos.map((ph, i) => (
            <li key={ph.id}>
              <button
                type="button"
                className="photo-gallery-tile"
                onClick={() => setLightboxIndex(i)}
              >
                <img src={ph.src} alt={ph.alt} loading="lazy" />
              </button>
            </li>
          ))}
        </ul>

        <Pagination
          basePath="/gallery/photos"
          page={page}
          totalPages={photoGalleryPageCount}
        />
      </div>

      {lightboxIndex !== null ? (
        <Lightbox
          items={photos}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </div>
  );
}

export default PhotoGallery;
