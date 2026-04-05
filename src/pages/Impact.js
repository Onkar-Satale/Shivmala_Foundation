import { Link } from "react-router-dom";
import "./Impact.css";

const stories = [
  {
    title: "Digital knowledge competitions",
    body:
      "Students from rural areas take part in digital knowledge tests and creative challenges. Prizes have included laptops, tablets, bicycles, and scooters — celebrating effort and curiosity.",
    extra:
      "Events are hosted with schools and local leaders so families see learning as a community priority.",
  },
  {
    title: "Disaster relief & school support",
    body:
      "During the 2025 floods in Chhatrapati Sambhajinagar, Shivmala Foundation mobilised aid for schools and families — essentials, coordination with authorities, and follow-up where we could help longest.",
    extra:
      "We document needs transparently and align with district relief protocols.",
  },
  {
    title: "Awareness tours in villages",
    body:
      "Digital literacy and safe-internet awareness programmes in Talegaon, Limbgaon, Hatola, and nearby villages — short talks, demos, and Q&A with youth and parents.",
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
      <header className="impact-hero">
        <h1 className="impact-hero-title">Get involved &amp; impact</h1>
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
