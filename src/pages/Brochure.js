import React from "react";
import "./Certificates.css"; // Reusing the same minimalist styles

function Brochure() {
  return (
    <div className="certificates-page">
      <div className="certificates-header">
        <h1>Brochure</h1>
        <p>"BEST NGO FOR CSR IN INDIA: SHIVMALA FOUNDATION"</p>
      </div>

      <div className="certificates-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: '#666', marginBottom: '30px' }}>
          Download our comprehensive brochure to learn more about our initiatives, impact, and how you can contribute to society with the Shivmala Foundation.
        </p>
        <a 
          href="#" 
          onClick={(e) => e.preventDefault()} 
          className="certificates-submit-btn" 
          style={{ textDecoration: 'none' }}
        >
          DOWNLOAD BROCHURE (PDF)
        </a>
      </div>

      <div className="our-donors-section">
        <h2>Our Donors</h2>
        <div className="donors-logos">
          <img src="/images/logo.png" alt="Donor 1" />
          <img src="/images/logo.png" alt="Donor 2" />
          <img src="/images/logo.png" alt="Donor 3" />
          <img src="/images/logo.png" alt="Donor 4" />
        </div>
      </div>
    </div>
  );
}

export default Brochure;
