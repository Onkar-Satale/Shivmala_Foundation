import React, { useState } from "react";
import "./Donate.css";

function Donate() {
  const [formData, setFormData] = useState({
    amount: "0.00",
    purpose: "",
    phone: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Processing payment of ₹${formData.amount}`);
  };

  return (
    <div className="donate-page-wrapper">
      <div className="donate-card">
        {/* Left Panel - Branding */}
        <div className="donate-panel-left">
          <div className="donate-brand">
            {/* Using a text logo to mimic the payU style badge from screenshot */}
            <div className="donate-brand-logo">payU</div>
            <div className="donate-brand-name">SHIVMALA FOUNDATION</div>
          </div>
          
          <div className="donate-secure-badge">
            <svg viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            Secure Checkout
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="donate-panel-right">
          <div className="donate-form-title">PAYMENT DETAILS</div>
          
          <form onSubmit={handleSubmit}>
            <div className="donate-form-group">
              <label className="donate-form-label">Enter amount to pay</label>
              <div className="donate-input-wrapper">
                <div className="donate-input-prefix">₹</div>
                <input 
                  type="number" 
                  name="amount" 
                  className="donate-form-input" 
                  value={formData.amount}
                  onChange={handleChange}
                  step="0.01"
                  min="1"
                  required 
                />
              </div>
            </div>

            <div className="donate-form-group">
              <label className="donate-form-label">
                Purpose of Payment <span>(optional)</span>
              </label>
              <textarea 
                name="purpose"
                className="donate-form-textarea"
                placeholder="Tell us the purpose behind this payment"
                rows="2"
                value={formData.purpose}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="donate-form-group">
              <label className="donate-form-label">Customer Phone</label>
              <div className="donate-input-wrapper">
                <div className="donate-input-prefix">+91</div>
                <input 
                  type="tel" 
                  name="phone"
                  className="donate-form-input" 
                  placeholder="Enter Customer Phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="donate-form-group">
              <label className="donate-form-label">Customer Email</label>
              <input 
                type="email" 
                name="email"
                className="donate-form-input" 
                style={{ border: '1px solid #ccc', borderRadius: '4px' }}
                placeholder="Enter your email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <button type="submit" className="donate-submit-btn">
              MAKE PAYMENT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Donate;
