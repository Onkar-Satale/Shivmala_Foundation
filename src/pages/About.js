import { Link } from "react-router-dom";
import BoardMembersSection from "../components/BoardMembersSection";
import SEO from "../components/SEO";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <SEO 
        title="About Shivmala Foundation | Rural Development Bardapur Maharashtra"
        description="Shivmala Foundation - Pravin More यांच्या नेतृत्वात AI training, healthcare, skill development. Bardapur social revolution!"
      />
      <header className="about-hero">
        <h1 className="about-hero-title">Shivmala Foundation बद्दल जाणून घ्या</h1>
        <p className="about-hero-sub">
          Trusted NGO for rural development and CSR partnerships: Shivmala Foundation
        </p>
        <div className="about-hero-banner">
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=80"
            alt="Volunteers at a tree plantation drive"
            width={1100}
            height={420}
            loading="lazy"
          />
        </div>
      </header>

      <section className="about-believe" aria-labelledby="believe-heading">
        <h2 id="believe-heading" className="about-believe-title">
          We believe that we can change more lives with you
        </h2>
        <p className="about-believe-kicker">HELP US NOW</p>
        <ul className="about-pillars">
          <li>
            <span className="about-pillar-icon" aria-hidden="true">
              🌱
            </span>
            <strong>Sustainability</strong>
            <span>Environment and tree plantation</span>
          </li>
          <li>
            <span className="about-pillar-icon" aria-hidden="true">
              👥
            </span>
            <strong>Community</strong>
            <span>Rural development</span>
          </li>
          <li>
            <span className="about-pillar-icon" aria-hidden="true">
              ⚖
            </span>
            <strong>Equality</strong>
            <span>Women and youth empowerment</span>
          </li>
          <li>
            <span className="about-pillar-icon" aria-hidden="true">
              ✚
            </span>
            <strong>Learning</strong>
            <span>Education and digital access</span>
          </li>
        </ul>
        <div className="about-believe-cta-wrap">
          <Link to="/contact" className="about-donate-btn">
            Donate now
          </Link>
        </div>
      </section>

      <section className="about-wide-photo" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
          alt=""
          width={1400}
          height={520}
          loading="lazy"
        />
      </section>

      <section className="about-quote-banner">
        <div className="about-quote-inner">
          <p className="about-quote-text">
            Our fingerprints on the lives we touch never fade
          </p>
          <Link to="/about/mission" className="about-readmore">
            Read more
          </Link>
        </div>
      </section>

      <BoardMembersSection />

      <section className="about-discover" aria-labelledby="discover-heading">
        <div className="about-discover-inner">
          <div className="about-discover-media">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
              alt="Community members together"
              width={520}
              height={400}
              loading="lazy"
            />
          </div>
          <div className="about-discover-copy">
            <span className="about-discover-heart" aria-hidden="true">
              ♥
            </span>
            <h2 id="discover-heading">Shivmala Foundation - Social Revolution</h2>
            <p>
              Shivmala Foundation is not just an organization; it’s a revolution! With LearnCraft Training Institute, we bring AI & Robotics to rural Bardapur, empowering farmers, women, and youth.
            </p>
            <h2 style={{ marginTop: '1.5rem', fontSize: '1.5rem' }}>Shivmala Foundation Vision</h2>
            <p>
              Transform rural Maharashtra through technology in education, agriculture, and healthcare.
            </p>
            <p className="about-discover-links">
              <Link to="/about/vision">Vision</Link>
              {" · "}
              <Link to="/about/mission">Mission</Link>
              {" · "}
              <Link to="/about/members">Members</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="about-donors" aria-labelledby="donors-heading">
        <h2 id="donors-heading" className="about-donors-title">
          Our partners and supporters
        </h2>
        <p className="about-donors-note">
          Placeholder row — add donor and government partner logos here when available.
        </p>
        <ul className="about-donors-logos">
          <li>CSR partners</li>
          <li>Local institutions</li>
          <li>Training affiliates</li>
          <li>Community networks</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
