import "./AboutSubPage.css";
import "./AboutVision.css";

function AboutVision() {
  return (
    <div className="about-sub-page">
      <header className="about-sub-hero">
        <span className="about-sub-heart" aria-hidden="true">
          ♥
        </span>
        <h1>Vision</h1>
        <p className="about-sub-tagline">
          Rural empowerment through education and technology — Shivmala Foundation
        </p>
      </header>

      <div className="vision-banner">
        <img
          src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1400&q=80"
          alt="Community programme"
          width={1200}
          height={440}
          loading="lazy"
        />
      </div>

      <div className="vision-blocks" aria-hidden="true">
        <span className="vision-block vision-block--red">VISION</span>
        <span className="vision-block vision-block--blue">MISSION</span>
        <span className="vision-block vision-block--green">GOAL</span>
      </div>

      <section className="vision-copy" aria-labelledby="vision-copy-heading">
        <h2 id="vision-copy-heading" className="visually-hidden">
          Our vision
        </h2>
        <p>
          We envision a Maharashtra where every village has pathways to learning, dignified livelihoods,
          and digital confidence. Shivmala Foundation works so that geography no longer decides who can
          access quality education, mentorship, or the tools to participate fully in a changing economy.
        </p>
        <p>
          Our long-term aim is a network of community-led hubs—starting with Bardapur—that prove rural youth
          can lead innovation, stewardship, and service in their own towns, with support from partners who
          share our belief in inclusive progress.
        </p>
      </section>
    </div>
  );
}

export default AboutVision;
