import React from "react";
import DonorsSection from "../components/DonorsSection";
import "./Certificates.css"; // Reusing the same minimalist styles

function ApplicationForms() {
  return (
    <div className="certificates-page">
      <div className="certificates-header">
        <h1>Application Forms</h1>
        <p>"BEST NGO FOR CSR IN INDIA: SHIVMALA FOUNDATION"</p>
      </div>

      <div className="certificates-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         <p style={{ color: '#666', marginBottom: '30px' }}>
          Please find the official application forms below. Print, fill out, and submit to our respective regional centers.
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="certificates-submit-btn" 
            style={{ textDecoration: 'none' }}
          >
            VOLUNTEER FORM
          </a>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="certificates-submit-btn" 
            style={{ textDecoration: 'none' }}
          >
            MEMBER FORM
          </a>
        </div>
      </div>

      <DonorsSection className="our-donors-section" />
    </div>
  );
}

export default ApplicationForms;
