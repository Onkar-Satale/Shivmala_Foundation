import { useState } from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import { homeEventVideos } from "../data/homeEventVideos";
import "./EventsSection.css";

function EventsSection() {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section className="events-section" aria-labelledby="events-heading">
      <div className="events-inner">
        <SectionHeading title="Events" titleId="events-heading" />
        <ul className="events-video-grid">
          {homeEventVideos.map((v) => (
            <li key={v.id} className="events-video-item">
              {playingId === v.id ? (
                <div className="events-video-player">
                  <iframe
                    title={v.title}
                    className="events-video-iframe"
                    src={`https://www.youtube.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    type="button"
                    className="events-video-close"
                    onClick={() => setPlayingId(null)}
                  >
                    Close video
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="events-video-thumb"
                  onClick={() => setPlayingId(v.id)}
                >
                  <img
                    src={
                      v.poster ||
                      `https://img.youtube.com/vi/${v.youtubeId}/hqdefault.jpg`
                    }
                    alt=""
                    width={640}
                    height={360}
                    loading="lazy"
                  />
                  <span className="events-video-caption">{v.title}</span>
                </button>
              )}
            </li>
          ))}
        </ul>
        <p className="events-more">
          <Link to="/gallery/videos/1">View all videos</Link>
        </p>
      </div>
    </section>
  );
}

export default EventsSection;
