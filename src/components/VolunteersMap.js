import { Link } from "react-router-dom";
import { VOLUNTEER_WORLD_MAP } from "../data/volunteersCarousel";
import "./VolunteersMap.css";

const volunteers = [
  {
    top: "15%",
    left: "14%",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "40%",
    left: "22%",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "22%",
    left: "40%",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "44%",
    left: "46%",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "30%",
    left: "64%",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "60%",
    left: "52%",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "54%",
    left: "30%",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "50%",
    left: "70%",
    src: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "48%",
    left: "86%",
    src: "https://images.unsplash.com/photo-1539578706168-27529a212cc1?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
  {
    top: "68%",
    left: "78%",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&q=80",
    alt: "Volunteer",
  },
];

function VolunteersMap() {
  return (
    <section className="volunteers-section" aria-labelledby="volunteers-heading">
      <div className="volunteers-inner">
        <div className="volunteers-header">
          <h2 id="volunteers-heading">Volunteers Around the World</h2>
          <p className="volunteers-sub">HELP US NOW</p>
        </div>
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
      </div>
    </section>
  );
}

export default VolunteersMap;
