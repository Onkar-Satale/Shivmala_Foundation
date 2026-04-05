import { Link } from "react-router-dom";
import "./AboutSubPage.css";
import "./AboutMission.css";

function AboutMission() {
  return (
    <div className="about-sub-page">
      <header className="about-sub-hero">
        <span className="about-sub-heart" aria-hidden="true">
          ♥
        </span>
        <h1>Mission</h1>
        <p className="about-sub-tagline">
          What we do every day — Shivmala Foundation
        </p>
      </header>

      <div className="mission-banner">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
          alt="Skills and training"
          width={1200}
          height={440}
          loading="lazy"
        />
      </div>

      <section className="mission-copy" aria-labelledby="mission-heading">
        <h2 id="mission-heading" className="visually-hidden">
          Our mission
        </h2>
        <p>
          Our mission is to deliver practical, community-rooted programmes that build skills, health
          awareness, and civic participation in rural Maharashtra. Through LearnCraft Training Institute and
          volunteer-led activities, we focus on hands-on learning—not slides alone—so outcomes are visible
          in classrooms, homes, and local institutions.
        </p>
        <p>
          We partner transparently with schools, families, CSR teams, and government schemes where
          appropriate, and we measure success by sustained engagement: learners returning to teach others,
          women leading new initiatives, and villages adopting safer, greener habits together.
        </p>
      </section>

      <section className="mission-pillars" aria-labelledby="mission-pillars-heading">
        <h2 id="mission-pillars-heading">How we work</h2>
        <ul>
          <li>
            <strong>Education</strong>
            Digital literacy, STEM exposure, and career awareness for students and out-of-school youth.
          </li>
          <li>
            <strong>Community</strong>
            Village meetings, drives, and campaigns co-designed with local leaders and women’s groups.
          </li>
          <li>
            <strong>Inclusion</strong>
            Prioritising access for girls, first-generation learners, and families with limited means.
          </li>
          <li>
            <strong>Integrity</strong>
            Clear reporting to donors and communities; responsible use of every rupee and volunteer hour.
          </li>
        </ul>
        <p className="mission-back">
          <Link to="/about">Back to About Us</Link>
        </p>
      </section>
    </div>
  );
}

export default AboutMission;
