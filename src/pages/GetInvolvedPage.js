import React, { useState } from "react";
import "./GetInvolvedPage.css";

function GetInvolvedPage({ data }) {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    occupation: "",
    briefProfile: "",
  });

  const [photo, setPhoto] = useState(null);
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

  const handleResumeUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you would submit to an API here
  };

  return (
    <div className="get-involved-page">
      <header className="get-involved-hero">
        <h1 className="get-involved-title">{data.title}</h1>
        <p className="get-involved-subtitle">{data.subtitle}</p>
      </header>

      <div className="get-involved-container">
        <div className="get-involved-content">
          <div className="get-involved-image">
            <img src={data.image} alt={data.title} />
          </div>

          <div className="info-block">
            <h3>{data.title} of Shivmala Foundation :</h3>
            <p>{data.content}</p>
          </div>

          <div className="info-block eligibility-block">
            <h3>Eligibility criteria for {data.title.toLowerCase()}s of the Shivmala Foundation:</h3>
            <ul>
              {data.eligibility.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="info-block note-block">
            <h3>Note:</h3>
            <ol>
              {data.note.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>

          <div className="vision-mission-cards">
            <div className="vm-card">
              <h4>Vision</h4>
              <p>{data.vision}</p>
            </div>
            <div className="vm-card dark">
              <h4>Mission</h4>
              <p>{data.mission}</p>
            </div>
          </div>
        </div>

        <div className="get-involved-form-wrapper">
          <form className="get-involved-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label>Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Company Name *</label>
              <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Phone *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Mobile *</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Address *</label>
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </div>
            
            <div className="form-group">
              <label>City *</label>
              <input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>State *</label>
              <input type="text" name="state" value={formData.state} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Country *</label>
              <input type="text" name="country" value={formData.country} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Zip Code *</label>
              <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} required />
            </div>

            <div className="form-group">
              <label>Occupation *</label>
              <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
            </div>

            <div className="form-group file-group">
              <label>Photo *</label>
              <div className="file-drop-area">
                <span>Drag & Drop Files Here</span>
                <span>or</span>
                <input type="file" accept="image/*" onChange={handlePhotoUpload} required />
                <span className="file-name">{photo ? photo.name : "Browse Files"}</span>
              </div>
            </div>

            <div className="form-group">
              <label>Brief Profile *</label>
              <textarea name="briefProfile" value={formData.briefProfile} onChange={handleChange} rows="4" required></textarea>
            </div>

            <div className="form-group resume-group">
              <label>Resume *</label>
              <input type="file" accept=".pdf,.doc,.docx" onChange={handleResumeUpload} required />
            </div>

            {submitted && <p className="success-msg">Thank you for your submission. We will get back to you soon.</p>}

            <div className="form-actions">
              <button type="reset" className="btn-reset" onClick={() => { setFormData({}); setPhoto(null); setResume(null); setSubmitted(false); }}>RESET</button>
              <button type="submit" className="btn-submit">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetInvolvedPage;
