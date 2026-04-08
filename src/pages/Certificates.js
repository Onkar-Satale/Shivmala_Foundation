import React from "react";
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

      <div className="our-donors-section">
        <h2>Our Donors</h2>
        <div className="donors-logos">
          {/* Using logo placeholder since explicit donor assets aren't provided */}
          <img src="/images/logo.png" alt="Donor 1" />
          <img src="/images/logo.png" alt="Donor 2" />
          <img src="/images/logo.png" alt="Donor 3" />
          <img src="/images/logo.png" alt="Donor 4" />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
