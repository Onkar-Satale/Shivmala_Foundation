import React from "react";
import DonorsSection from "../components/DonorsSection";
import "./Certificates.css";

function Certificates() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="certificates-page">
      <div className="certificates-header">
        <h1>Certificates</h1>
        <p>"BEST NGO FOR CSR IN INDIA: SHIVMALA FOUNDATION"</p>
      </div>

      <div className="certificates-content">
        <div className="certificates-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1574341951911-3047a7407bc1?auto=format&fit=crop&w=800&q=80" 
            alt="Certificate Preview" 
            onError={(e) => { e.target.src = "/images/logo.png"; }}
          />
        </div>
        
        <div className="certificates-form-wrapper">
          <form className="certificates-form" onSubmit={handleSubmit}>
            <div className="certificates-form-group">
              <input type="text" placeholder="Enrollment No.*" required />
            </div>
            <div className="certificates-form-group">
              <input type="text" placeholder="Aadhar No.*" required />
            </div>
            <button type="submit" className="certificates-submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

      <DonorsSection className="our-donors-section" />
    </div>
  );
}

export default Certificates;
