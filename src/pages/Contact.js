import { useState } from "react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="contact-page">
      <header className="contact-hero">
        <h1 className="contact-hero-title">Contact Us</h1>
        <p className="contact-hero-sub">
          Rural empowerment through education &amp; technology — Shivmala Foundation
        </p>
      </header>

      <div className="contact-layout">
        <section className="contact-aside" aria-labelledby="contact-aside-heading">
          <p className="contact-aside-kicker">WRITE A MESSAGE</p>
          <h2 id="contact-aside-heading" className="contact-aside-title">
            Get in touch with us
          </h2>
          <p className="contact-aside-text">
            We work with communities in Maharashtra to expand learning opportunities, digital literacy,
            and grassroots programmes. Reach out for partnerships, volunteering, CSR collaborations,
            or to visit our centre in Bardapur.
          </p>
          <div className="contact-social" aria-label="Social media">
            <a href="https://www.facebook.com/profile.php?id=61581168451292&rdid=7vAf3DWzldTlg9bJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BAozBTBKp%2F#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/@shivmalafoundationngo" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </section>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form-row">
            <label className="contact-field">
              <span>Your Name *</span>
              <input name="name" type="text" required autoComplete="name" placeholder="Full name" />
            </label>
            <label className="contact-field">
              <span>Your Email *</span>
              <input name="email" type="email" required autoComplete="email" placeholder="you@example.com" />
            </label>
          </div>
          <label className="contact-field contact-field-full">
            <span>Your Subject</span>
            <input name="subject" type="text" placeholder="How can we help?" />
          </label>
          <label className="contact-field contact-field-full">
            <span>Your message</span>
            <textarea name="message" rows={5} placeholder="Your message" />
          </label>
          {submitted ? (
            <p className="contact-form-note" role="status">
              Thank you — this demo form does not send email yet; please call or email us directly.
            </p>
          ) : null}
          <button type="submit" className="contact-send">
            Send
          </button>
        </form>
      </div>

      <div className="contact-cards">
        <div className="contact-card contact-card--red">
          <h3>Address</h3>
          <p>
            Shivmala Foundation (LearnCraft Training Institute), Chhatrapati Shivaji Maharaj Chowk,
            Near MSEB Substation, Main Road, Bardapur, Maharashtra
          </p>
        </div>
        <div className="contact-card contact-card--amber">
          <h3>Phone No</h3>
          <p>
            <a href="tel:+919552406336">+91 9552406336</a>
            <br />
            <a href="tel:+918999021576">+91 8999021576</a>
          </p>
        </div>
        <div className="contact-card contact-card--teal">
          <h3>Email id</h3>
          <p>
            <a href="mailto:info@shivmalafoundation.org">info@shivmalafoundation.org</a>
          </p>
        </div>
      </div>

      <div className="contact-map-wrap">
        <iframe
          title="Shivmala Foundation location"
          className="contact-map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Bardapur%20Jalna%20Maharashtra&output=embed"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default Contact;
