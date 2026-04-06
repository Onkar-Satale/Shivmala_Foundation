import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const LOGO_SRC = `${process.env.PUBLIC_URL}/images/logo.png`;

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <div className="site-footer-grid">
          <div className="site-footer-col">
            <Link to="/" className="site-footer-logo">
              <img
                src={LOGO_SRC}
                alt=""
                className="site-footer-logo-img"
                width={48}
                height={48}
              />
              <span className="site-footer-name">SHIVMALA FOUNDATION</span>
            </Link>
            <p className="site-footer-about">
              Shivmala Foundation is a community-led organisation serving rural Maharashtra.
              Together with LearnCraft Training Institute, we focus on education, digital skills,
              and inclusive development for villages and small towns.
            </p>
            <div className="site-footer-social" aria-label="Social links">
              <a href="https://www.facebook.com/profile.php?id=61581168451292&rdid=7vAf3DWzldTlg9bJ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BAozBTBKp%2F#" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaXTwitter /></a>
              <a href="https://www.instagram.com/shivmalafoundationngo?igsh=ODJkMGIyaWVlZDd0" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/@shivmalafoundationngo" target="_blank" rel="noopener noreferrer" aria-label="Youtube"><FaYoutube /></a>
            </div>
          </div>

          <div className="site-footer-col" id="footer-centers">
            <h3 className="site-footer-heading">Centers</h3>
            <ul className="site-footer-list">
              <li>
                <Link to="/centers">All centers</Link>
              </li>
              <li>Bardapur (head office)</li>
              <li>Jalna district programmes</li>
              <li>Mobile learning camps</li>
              <li>Partner schools — Maharashtra</li>
              <li>Online learner network</li>
            </ul>
          </div>

          <div className="site-footer-col">
            <h3 className="site-footer-heading">Get involved</h3>
            <ul className="site-footer-links">
              <li><Link to="/impact">Volunteer</Link></li>
              <li><Link to="/contact">Join as member</Link></li>
              <li><Link to="/contact">Corporate CSR</Link></li>
              <li><Link to="/about">Individual support</Link></li>
              <li><Link to="/contact">Careers &amp; internship</Link></li>
            </ul>
          </div>

          <div className="site-footer-col">
            <h3 className="site-footer-heading">Follow us on</h3>
            <ul className="site-footer-contact">
              <li>
                <span className="site-footer-contact-icon" aria-hidden="true">☎</span>
                <a href="tel:+919552406336">+91 9552406336</a>
              </li>
              <li>
                <span className="site-footer-contact-icon" aria-hidden="true">✉</span>
                <a href="mailto:info@shivmalafoundation.org">info@shivmalafoundation.org</a>
              </li>
              <li>
                <span className="site-footer-contact-icon" aria-hidden="true">⌖</span>
                <span>
                  Chhatrapati Shivaji Maharaj Chowk, Near MSEB Substation, Main Road, Bardapur, Maharashtra
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer-bar" id="download">
        <div className="site-footer-bar-inner">
          <p>© {new Date().getFullYear()} Shivmala Foundation. All rights reserved.</p>
          <nav className="site-footer-legal" aria-label="Legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms &amp; Conditions</a>
            <a href="#refund">Refund Policy</a>
            <Link to="/contact">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
