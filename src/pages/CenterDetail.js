import { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { centersRegions } from "../data/centersData";
import CentersStateMap from "../components/CentersStateMap";
import VolunteerPhotoCarousel from "../components/VolunteerPhotoCarousel";
import CentersReviews from "../components/CentersReviews";
import "../pages/Centers.css"; // Reuse styling for volunteer form layout
import "./CenterDetail.css";

function CenterDetail() {
  const { id } = useParams();
  const region = centersRegions.find((r) => r.id === id);
  const [volunteerSent, setVolunteerSent] = useState(false);

  if (!region) {
    return <Navigate to="/centers" replace />;
  }

  const addressParts = region.address.split("—");

  function handleVolunteerSubmit(e) {
    e.preventDefault();
    setVolunteerSent(true);
  }

  function handleVolunteerReset(e) {
    e.preventDefault();
    const form = e.target.closest("form");
    if (form) form.reset();
    setVolunteerSent(false);
  }

  return (
    <div className="center-detail-page">
      <header className="center-detail-hero">
        <h1 className="center-detail-title">{region.name}</h1>
        <p className="center-detail-sub">
          SHIVMALA FOUNDATION OUTREACH IN {region.name.toUpperCase()}
        </p>
      </header>

      <section className="center-detail-content">
        <div className="center-detail-map-box">
          <CentersStateMap src={region.mapImage} alt={region.mapAlt} />
        </div>
        
        <div className="center-detail-info-box">
          <div className="center-detail-info-header">
            <h3>Shivmala Foundation Center in {region.name}</h3>
          </div>
          <ul className="center-detail-address-list">
            {addressParts.map((part, i) => (
              <li key={i}>
                <span className="center-detail-pin">📍</span>
                <span>{part.trim()}</span>
              </li>
            ))}
            <li>
              <span className="center-detail-pin">📍</span>
              <span>{region.description}</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="center-detail-volunteer">
        <header className="center-detail-hero">
          <h2 className="center-detail-title">Volunteer</h2>
          <p className="center-detail-sub">VOLUNTEER OF SHIVMALA FOUNDATION</p>
        </header>

        <div className="centers-volunteer-layout" style={{ maxWidth: '1100px', margin: '0 auto 60px', padding: '0 24px' }}>
          <div className="centers-volunteer-info">
            <div className="centers-volunteer-photo">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
                alt="Volunteers at a foundation programme"
                width={640}
                height={360}
                loading="lazy"
              />
            </div>
            <h3 className="centers-volunteer-bar">Volunteer Of Shivmala Foundation :</h3>
            <p className="centers-volunteer-copy">
              Shivmala Foundation, a leading NGO in India, offers numerous opportunities to those in need, supporting minorities, people facing poverty, and those seeking government scheme support. As a volunteer for Shivmala Foundation, you can help make a difference in the lives of people and communities across India. By volunteering with Shivmala Foundation, you can contribute your time and skills to a range of initiatives, including raising awareness of government schemes, assisting with applications, and providing essential aid. The foundation is committed to making a positive impact on society and welcomes individuals who share their vision to join their efforts.If you’re interested in volunteering for Shivmala Foundation, visit their website or contact them directly for further information.
            </p>

            <h3 className="centers-volunteer-bar">Eligibility criteria to Volunteer for Shivmala Foundation :</h3>
            <ul className="centers-volunteer-list">
              <li>Person 18 years and above of age.</li>
              <li>Person with no criminal records.</li>
              <li>Person interested in social work.</li>
              <li>Shivmala Foundation has the right to approve or reject volunteer applications at any time</li>
              <li>Shivmala Foundation has the right to approve or reject the Donation/donation application at any time.</li>
              <li>No person will misuse the name of the Foundation for their false intentions, in case a person is found guilty, strict action will be taken against him.</li>
            </ul>

            <h3 className="centers-volunteer-note-title">Note:</h3>
            <ul className="centers-volunteer-list">
              <li>
                Donations given to Shivmala Foundation are eligible for deduction u/s 80G of the Income Tax Act,1961.
              </li>
              <li>
                All Payments BY Cheque are to be made in favor of "SHIVMALA FOUNDATION" and an online payment facility is also available at the Shivmala Ngo.
              </li>
            </ul>
          </div>

          <form className="centers-volunteer-form" onSubmit={handleVolunteerSubmit}>
            {[
              ["name", "Name *", "text", true],
              ["companyName", "Company Name *", "text", true],
              ["email", "Email *", "email", true],
              ["phone", "Phone *", "tel", true],
              ["mobile", "Mobile *", "tel", true],
              ["address", "Address *", "text", true],
              ["city", "City *", "text", true],
              ["state", "State *", "text", true],
              ["country", "Country *", "text", true],
              ["zipCode", "Zip Code *", "text", true],
              ["briefProfile", "Brief Profile *", "text", true],
              ["occupation", "Occupation *", "text", true],
            ].map(([name, label, type, required]) => (
              <label key={name} className="centers-form-field">
                <span>{label}</span>
                <input name={name} type={type} required={required} />
              </label>
            ))}

            <label className="centers-form-field">
              <span>Upload ID Proof *</span>
              <input name="idProof" type="file" required />
            </label>

            <label className="centers-form-field">
              <span>Upload Photo *</span>
              <div className="centers-form-drop">
                <input name="photo" type="file" accept="image/*" required />
                <span className="centers-form-drop-hint">Drag &amp; Drop Files Here or Browse Files</span>
              </div>
            </label>

            {volunteerSent && (
              <p className="centers-form-done" role="status">
                Thank you! Your application has been submitted successfully.
              </p>
            )}

            <div className="centers-form-actions">
              <button type="button" className="centers-form-btn centers-form-btn--muted" onClick={handleVolunteerReset}>
                Reset
              </button>
              <button type="submit" className="centers-form-btn">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="center-detail-photo-marquee">
          <VolunteerPhotoCarousel />
        </div>
        
        <div className="center-detail-reviews-marquee">
          <CentersReviews />
        </div>
      </section>
    </div>
  );
}

export default CenterDetail;
