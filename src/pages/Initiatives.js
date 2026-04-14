import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import "./Initiatives.css";

const initiatives = [
  {
    title: "🎓 Shivmala Foundation Mission 2026 - Free Digital Literacy",
    body:
      "Computer Basics, Cyber Security, AI training for Bardapur students & farmers. Sessions run at LearnCraft Training Institute and partner schools.",
    extra:
      "Includes certificates, follow-up practice groups, and referral to advanced modules when learners are ready.",
  },
  {
    title: "🚀 Shivmala Foundation Digital Summer Camp & Agri-Tech",
    body:
      "Robotics, App Development, Drone Technology workshops for rural students during school breaks — teamwork, creativity, and confidence in technology.",
    extra:
      "Camps are designed for mixed-age groups with mentors from the foundation and visiting volunteers.",
  },
  {
    title: "🏫 Shivmala Foundation Rural School Adoption",
    body:
      "Digital tools & boards for Ambajogai, Parli Zilla Parishad schools.",
    extra:
      "We coordinate with head teachers and parent committees so equipment is used and maintained long term.",
  },
  {
    title: "🩺 Shivmala Foundation Healthcare Camps",
    body:
      "Free full-body checkups, dental/eye clinics, blood donation drives.",
    extra:
      "Focus on prevention, women’s health, and senior care awareness in communities we serve.",
  },
  {
    title: "💼 Shivmala Foundation Skill Development",
    body:
      "Sewing, beauty parlor, mobile/hardware repairing training.",
    extra:
      "Alumni can join refresher sessions and connect with CSR-supported toolkits where available.",
  },
];

function Initiatives() {
  return (
    <div className="initiatives-page">
      <SEO 
        title="Shivmala Foundation Initiatives | Free AI Training & Medical Camps Bardapur"
        description="Shivmala Foundation Mission 2026, Digital Summer Camp, Healthcare Camps, Skill Training. FREE programs in Bardapur & Ambajogai!"
      />
      <header className="initiatives-hero">
        <h1 className="initiatives-hero-title">Shivmala Foundation ची प्रमुख Initiatives</h1>
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
