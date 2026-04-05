import { Link } from "react-router-dom";
import "./HomeGalleryStrip.css";

const shots = [
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600&q=80",
];

function HomeGalleryStrip() {
  return (
    <section className="home-gallery-strip" aria-labelledby="gallery-strip-heading">
      <div className="home-gallery-banner">
        <h2 id="gallery-strip-heading">Check our gallery</h2>
        <p>Shivmala Foundation</p>
      </div>
      <div className="home-gallery-photos">
        {shots.map((src, i) => (
          <div key={i} className="home-gallery-photo-wrap">
            <img src={src} alt="" width={360} height={360} loading="lazy" />
          </div>
        ))}
      </div>
      <div className="home-gallery-cta-wrap">
        <Link to="/gallery/photos/1" className="home-gallery-cta">
          View all
        </Link>
      </div>
    </section>
  );
}

export default HomeGalleryStrip;
