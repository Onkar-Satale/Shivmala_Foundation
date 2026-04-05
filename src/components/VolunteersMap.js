import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import VolunteerPhotoCarousel from "./VolunteerPhotoCarousel";
import { VOLUNTEER_WORLD_MAP } from "../data/volunteersCarousel";
import "./VolunteersMap.css";

const volunteers = [
  {
    top: "20%",
    left: "16%",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "42%",
    left: "22%",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "28%",
    left: "44%",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "48%",
    left: "52%",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "24%",
    left: "68%",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "38%",
    left: "78%",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "58%",
    left: "30%",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "62%",
    left: "58%",
    src: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "52%",
    left: "88%",
    src: "https://images.unsplash.com/photo-1539578706168-27529a212cc1?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
];

function VolunteersMap() {
  return (
    <section className="volunteers-section" aria-labelledby="volunteers-heading">
      <div className="volunteers-inner">
        <SectionHeading
          title="Volunteers Around the World"
          titleId="volunteers-heading"
          kickerTone="magenta"
          kickerTo="/contact"
        />
        <div
          className="volunteers-map"
          role="img"
          aria-label="World map with volunteer portraits placed across regions"
        >
          <img
            className="volunteers-world-map-img"
            src={VOLUNTEER_WORLD_MAP}
            alt=""
            width={1280}
            height={650}
            loading="lazy"
          />
          <div className="volunteers-map-dots" aria-hidden="true" />
          {volunteers.map((p, i) => (
            <div
              key={i}
              className="volunteers-pin"
              style={{ top: p.top, left: p.left }}
            >
              <img src={p.src} alt={p.alt} width={88} height={88} loading="lazy" />
            </div>
          ))}
        </div>
        <p className="volunteers-cta">
          <Link to="/impact">Join our volunteer network</Link>
        </p>
        <VolunteerPhotoCarousel />
      </div>
    </section>
  );
}

export default VolunteersMap;
