import { Link } from "react-router-dom";
import "./Initiatives.css";

const initiatives = [
  {
    title: "Mission 2026 — Digital literacy",
    body:
      "Computer basics, online safety, and practical digital skills for students and farmers in Bardapur and nearby villages. Sessions run at LearnCraft Training Institute and partner schools.",
    extra:
      "Includes certificates, follow-up practice groups, and referral to advanced modules when learners are ready.",
  },
  {
    title: "Digital summer camps",
    body:
      "Hands-on robotics, app ideas, and drone awareness workshops for rural students during school breaks — teamwork, creativity, and confidence in technology.",
    extra:
      "Camps are designed for mixed-age groups with mentors from the foundation and visiting volunteers.",
  },
  {
    title: "Rural school adoption",
    body:
      "Digital tools, smart boards where feasible, and teacher support for Zilla Parishad schools in Ambajogai and surrounding villages.",
    extra:
      "We coordinate with head teachers and parent committees so equipment is used and maintained long term.",
  },
  {
    title: "Healthcare camps",
    body:
      "Free health check-ups, dental and eye screening, blood donation drives, and referrals — often run with district health partners and local volunteers.",
    extra:
      "Focus on prevention, women’s health, and senior care awareness in communities we serve.",
  },
  {
    title: "Skills & livelihoods",
    body:
      "Short courses in tailoring, beauty services, mobile repair, and related trades for youth and women, linked to local demand and micro-enterprise guidance.",
    extra:
      "Alumni can join refresher sessions and connect with CSR-supported toolkits where available.",
  },
];

function Initiatives() {
  return (
    <div className="initiatives-page">
      <header className="initiatives-hero">
        <h1 className="initiatives-hero-title">Our projects</h1>
        <p className="initiatives-hero-sub">
          Shivmala Foundation programmes in education, technology, health, and livelihoods — designed with rural
          communities in Maharashtra and partner regions.
        </p>
      </header>

      <div className="initiatives-inner">
        <ul className="initiatives-list">
          {initiatives.map((item) => (
            <li key={item.title} className="initiatives-card">
              <h2 className="initiatives-card-title">{item.title}</h2>
              <p className="initiatives-card-text">{item.body}</p>
              <p className="initiatives-card-extra">{item.extra}</p>
            </li>
          ))}
        </ul>

        <p className="initiatives-cta">
          <Link to="/contact">Partner or volunteer with us</Link>
        </p>
      </div>
    </div>
  );
}

export default Initiatives;
