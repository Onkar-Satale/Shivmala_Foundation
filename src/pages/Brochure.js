import React from "react";
import DonorsSection from "../components/DonorsSection";
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

      <DonorsSection className="our-donors-section" />
    </div>
  );
}

export default Brochure;
