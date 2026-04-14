import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./Impact.css";

const stories = [
  {
    title: "🏆 Shivmala Foundation Digital Knowledge Test (Season 1 & 2)",
    body:
      "Prizes: E-scooters, Laptops, Bicycles, Tablets for rural talent.",
    extra:
      "Events are hosted with schools and local leaders so families see learning as a community priority.",
  },
  {
    title: "🤝 Shivmala Foundation Disaster Relief",
    body:
      "October 2025 flood aid to Chhatrapati Sambhajinagar ZP schools.",
    extra:
      "We document needs transparently and align with district relief protocols.",
  },
  {
    title: "🎤 Shivmala Foundation Awareness Tours",
    body:
      "Talegaon, Limbgaon, Hatola digital revolution programs.",
    extra:
      "Volunteers and staff travel with portable kits so sessions work even with limited connectivity.",
  },
  {
    title: "Volunteer weekends & camps",
    body:
      "Corporate and college volunteers join weekend camps: mentoring, activity design, and field visits alongside our full-time team.",
    extra:
      "Many volunteers return for repeat programmes after seeing impact in classrooms and communities.",
  },
];

function Impact() {
  return (
    <div className="impact-page">
      <SEO 
        title="Shivmala Foundation Impact | Digital Knowledge Test Winners Bardapur"
        description="Shivmala Foundation success stories - Digital Knowledge Test prizes, Flood Relief 2025, mega events in Bardapur."
      />
      <header className="impact-hero">
        <h1 className="impact-hero-title">Shivmala Foundation चा प्रभाव & Mega Events</h1>
        <p className="impact-hero-sub">
          Events, outreach, and community moments from Shivmala Foundation — powered by donors, partners, and
          volunteers across Maharashtra.
        </p>
      </header>

      <div className="impact-inner">
        <ul className="impact-list">
          {stories.map((item) => (
            <li key={item.title} className="impact-card">
              <h2 className="impact-card-title">{item.title}</h2>
              <p className="impact-card-text">{item.body}</p>
              <p className="impact-card-extra">{item.extra}</p>
            </li>
          ))}
        </ul>

        <p className="impact-cta">
          <Link to="/contact">Donate or volunteer</Link>
          <span className="impact-cta-sep" aria-hidden="true">
            ·
          </span>
          <Link to="/gallery/photos/1">See photos</Link>
        </p>
      </div>
    </div>
  );
}

export default Impact;
