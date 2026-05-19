import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/AboutMembers.css'; // Reuse bottom section styles
import './PolicyLayout.css';

function PolicyLayout({ title, subtitle, children }) {
  return (
    <div className="policy-page-container">
      {/* Header Section */}
      <section className="members-header-section" style={{ paddingBottom: '40px', backgroundColor: '#fafafa' }}>
        <h1 className="members-main-title">{title}</h1>
        <p className="members-sub-title">"{subtitle}"</p>
      </section>

      {/* Main Content */}
      <section className="policy-content-section">
        {children}
      </section>

      {/* We Believe Section */}
      <section className="we-believe-section">
        <h2 className="believe-title">We Believe that We can Save More Lifes with you</h2>
        <div className="believe-values">
          <div className="value-card">
            <div className="value-icon sustainability"></div>
            <h3>Sustainability</h3>
            <p>environmental conservation</p>
          </div>
          <div className="value-card">
            <div className="value-icon community"></div>
            <h3>Community</h3>
            <p>Community empowerment</p>
          </div>
          <div className="value-card">
            <div className="value-icon equality"></div>
            <h3>Equality</h3>
            <p>Advocating for equal</p>
          </div>
          <div className="value-card">
            <div className="value-icon healthcare"></div>
            <h3>Healthcare</h3>
            <p>Improving access</p>
          </div>
        </div>
        <Link to="/donate">
          <button className="donation-btn">DONATE NOW</button>
        </Link>
      </section>

      {/* Dark Banner */}
      <section className="fingerprints-banner" style={{ backgroundColor: '#2d3e50', padding: '80px 20px', marginBottom: 0 }}>
        <h2 style={{ color: '#fff' }}>Our fingerprints on the lives we touch<br/>never fade</h2>
      </section>

      {/* Donors */}
      <section className="donors-section" style={{ paddingTop: '50px' }}>
        <h2>Our Donors</h2>
        <div className="donors-logos">
           <img src="/images/logo.png" alt="Donor" />
           <img src="/images/logo.png" alt="Donor" />
           <img src="/images/logo.png" alt="Donor" />
           <img src="/images/logo.png" alt="Donor" />
        </div>
      </section>
    </div>
  );
}

export default PolicyLayout;
