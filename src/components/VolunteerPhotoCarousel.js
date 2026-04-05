import { volunteerCarouselPhotos } from "../data/volunteersCarousel";
import "./VolunteerPhotoCarousel.css";

function VolunteerPhotoCarousel() {
  const track = [...volunteerCarouselPhotos, ...volunteerCarouselPhotos];

  return (
    <div className="volunteers-carousel" aria-hidden="true">
      <div className="volunteers-carousel-track">
        {track.map((src, i) => (
          <div key={`${src}-${i}`} className="volunteers-carousel-item">
            <img src={src} alt="" width={400} height={260} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteerPhotoCarousel;
