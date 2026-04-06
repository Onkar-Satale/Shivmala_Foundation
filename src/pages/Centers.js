import { useState } from "react";
import { Link } from "react-router-dom";
import { centersRegions } from "../data/centersData";
import CentersStateMap from "../components/CentersStateMap";
import VolunteerPhotoCarousel from "../components/VolunteerPhotoCarousel";
import CentersReviews from "../components/CentersReviews";
import "./Centers.css";

function Centers() {
  const [volunteerSent, setVolunteerSent] = useState(false);

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
    <div className="centers-page">
      <header className="centers-hero">
        <h1>Centers</h1>
        <p className="centers-hero-sub">
          Rural empowerment through education and technology — Shivmala Foundation
        </p>
      </header>

      <section className="centers-list" aria-label="Our centers by region">
        {centersRegions.map((region) => (
          <article key={region.id} className="centers-region" id={region.id}>
            <h2 className="centers-region-title">{region.name}</h2>
            <div className="centers-region-body">
              <div className="centers-region-text">
                <p className="centers-region-desc">{region.description}</p>
                <p className="centers-region-address">{region.address}</p>
                <Link to="/contact" className="centers-readmore">
                  Read more
                </Link>
              </div>
              <CentersStateMap src={region.mapImage} alt={region.mapAlt} />
            </div>
          </article>
        ))}
      </section>

      <section className="centers-volunteer" aria-labelledby="centers-volunteer-heading">
        <header className="centers-volunteer-hero">
          <h2 id="centers-volunteer-heading">Volunteer</h2>
          <p className="centers-volunteer-sub">Volunteer with Shivmala Foundation</p>
        </header>

        <div className="centers-volunteer-layout">
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

            <h3 className="centers-volunteer-bar">Volunteer with Shivmala Foundation</h3>
            <p className="centers-volunteer-copy">
              Shivmala Foundation welcomes people who want to give time and skills to rural Maharashtra.
              Volunteers support digital literacy sessions, events, field visits, and awareness drives alongside
              our team and village partners. Your contribution helps learners, families, and communities build
              confidence and opportunity where they live.
            </p>

            <h3 className="centers-volunteer-bar">Eligibility criteria</h3>
            <ul className="centers-volunteer-list">
              <li>Age 18 years or above</li>
              <li>No criminal record; willingness to follow safeguarding guidelines</li>
              <li>Genuine interest in education, technology, or community development</li>
              <li>Ability to commit to agreed time slots (weekend or camp-based options available)</li>
              <li>Valid ID and contact details for coordination</li>
            </ul>

            <h3 className="centers-volunteer-note-title">Note</h3>
            <ul className="centers-volunteer-list">
              <li>
                Donations may qualify for tax benefits as per applicable law; retain receipts issued by the
                foundation.
              </li>
              <li>
                For donations and volunteer travel reimbursements, follow instructions shared by the office after
                registration.
              </li>
            </ul>
          </div>

          <form className="centers-volunteer-form" onSubmit={handleVolunteerSubmit}>
            {[
              ["name", "Name", "text", true],
              ["email", "Email", "email", true],
              ["phone", "Phone", "tel", true],
              ["address", "Address", "text", true],
              ["city", "City", "text", true],
              ["state", "State", "text", true],
              ["occupation", "Occupation", "text", false],
            ].map(([name, label, type, required]) => (
              <label key={name} className="centers-form-field">
                <span>
                  {label}
                  {required ? <span className="centers-form-req"> *</span> : null}
                </span>
                <input name={name} type={type} required={required} />
              </label>
            ))}

            <label className="centers-form-field">
              <span>
                Why do you want to volunteer?<span className="centers-form-req"> *</span>
              </span>
              <textarea name="motivation" rows={4} required />
            </label>

            <label className="centers-form-field">
              <span>
                Upload ID proof<span className="centers-form-req"> *</span>
              </span>
              <input name="idProof" type="file" accept="image/*,.pdf" required />
            </label>

            <label className="centers-form-field">
              <span>
                Upload photo<span className="centers-form-req"> *</span>
              </span>
              <div className="centers-form-drop">
                <input name="photo" type="file" accept="image/*" required />
                <span className="centers-form-drop-hint">Choose a clear recent photograph</span>
              </div>
            </label>

            {volunteerSent ? (
              <p className="centers-form-done" role="status">
                Thank you. This demo form does not upload files yet — our office will contact you if you also
                email info@shivmalafoundation.org.
              </p>
            ) : null}

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

        <div className="centers-photo-marquee">
          <VolunteerPhotoCarousel />
        </div>
        <div className="centers-reviews-marquee">
          <CentersReviews />
        </div>
      </section>
    </div>
  );
}

export default Centers;
