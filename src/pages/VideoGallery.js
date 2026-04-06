import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import {
  getVideosForPage,
  videoGalleryPageCount,
} from "../data/galleryVideos";
import Pagination from "../components/Pagination";
import "./VideoGallery.css";

function VideoGallery() {
  const { page: pageParam } = useParams();
  const page = Math.max(1, Math.min(videoGalleryPageCount, parseInt(pageParam, 10) || 1));
  const [playingId, setPlayingId] = useState(null);

  if (pageParam && parseInt(pageParam, 10) !== page) {
    return <Navigate to={`/gallery/videos/${page}`} replace />;
  }

  const videos = getVideosForPage(page);

  return (
    <div className="video-gallery-page">
      <header className="gallery-page-hero">
        <h1 className="gallery-page-title">Video Gallery</h1>
        <p className="gallery-page-sub">
          Watch our stories on the site or open them directly on YouTube
        </p>
      </header>

      <div className="gallery-page-inner">
        <ul className="video-gallery-grid">
          {videos.map((v) => (
            <li key={v.id} className="video-gallery-item">
              {playingId === v.id ? (
                <div className="video-gallery-player-wrap">
                  <iframe
                    title={v.title}
                    className="video-gallery-iframe"
                    src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <div className="video-gallery-actions">
                    <button
                      type="button"
                      className="video-gallery-collapse"
                      onClick={() => setPlayingId(null)}
                    >
                      Close player
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    className="video-gallery-thumb"
                    onClick={() => setPlayingId(v.id)}
                  >
                    <img src={v.thumb} alt="" loading="lazy" />
                    <span className="video-gallery-play" aria-hidden="true" />
                    <span className="video-gallery-thumb-title">{v.title}</span>
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        <Pagination
          basePath="/gallery/videos"
          page={page}
          totalPages={videoGalleryPageCount}
        />
      </div>
    </div>
  );
}

export default VideoGallery;
