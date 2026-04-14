import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { centersRegions } from "../data/centersData";
import "./Navbar.css";

const LOGO_SRC = `${process.env.PUBLIC_URL}/images/logo.png`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const [mobileSubItem, setMobileSubItem] = useState(null);
  const [forceHide, setForceHide] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMobileSub(null);
    setMobileSubItem(null);
    
    // Briefly force dropdowns to hide so the :hover state doesn't persist
    setForceHide(true);
    const timer = setTimeout(() => setForceHide(false), 150);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSub(null);
    setMobileSubItem(null);
  };

  const galleryActive = location.pathname.startsWith("/gallery");

  const toggleSub = (key) => {
    setMobileSub((s) => (s === key ? null : key));
    setMobileSubItem(null); // reset inner nav on main toggle
  };

  const toggleSubItem = (key, e) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileSubItem((s) => (s === key ? null : key));
  };

  return (
    <header className="site-header">
      <div className="navbar-header-top">
        <div className="navbar-header-top-inner">
          <div className="navbar-header-brand-wrap">
            <Link to="/" className="navbar-logo" onClick={closeMenu}>
              <img
                src={LOGO_SRC}
                alt="Shivmala Foundation"
                className="navbar-logo-img"
                width={80}
                height={80}
              />
              <span className="navbar-logo-text">SHIVMALA FOUNDATION</span>
            </Link>
            <button
              type="button"
              className="navbar-burger"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="navbar-contact-panel">
            <a href="mailto:info@shivmalafoundation.org">
              <span className="navbar-topbar-icon" aria-hidden="true">
                ✉
              </span>
              info@shivmalafoundation.org
            </a>
            <span className="navbar-topbar-sep" aria-hidden="true" />
            <a href="tel:+919552406336">
              <span className="navbar-topbar-icon" aria-hidden="true">
                ☎
              </span>
              +91 9552406336
            </a>
          </div>
        </div>
      </div>

      <div className={`navbar-nav-shell ${menuOpen ? "is-open" : ""} ${forceHide ? "force-hide" : ""}`}>
        <nav
          id="primary-navigation"
          className="navbar-nav"
          aria-label="Primary"
        >
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `navbar-link${isActive ? " is-active" : ""}`
                }
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `navbar-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  About
                  <span className="navbar-caret">▾</span>
                </NavLink>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={mobileSub === "about"}
                  aria-label="About submenu"
                  onClick={() => toggleSub("about")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "about" ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/initiatives" onClick={closeMenu}>
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link to="/impact" onClick={closeMenu}>
                    Impact
                  </Link>
                </li>
                <li>
                  <Link to="/about/members" onClick={closeMenu}>
                    Members
                  </Link>
                </li>
                <li>
                  <Link to="/about/vision" onClick={closeMenu}>
                    Vision
                  </Link>
                </li>
                <li>
                  <Link to="/about/mission" onClick={closeMenu}>
                    Mission
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <span className="navbar-link" style={{ cursor: "default" }}>
                  Projects
                  <span className="navbar-caret">▾</span>
                </span>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={mobileSub === "projects"}
                  aria-label="Projects submenu"
                  onClick={() => toggleSub("projects")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "projects" ? " is-open-mobile" : ""}`}
              >
                {/* CSR Projects */}
                <li className="navbar-subitem-dropdown">
                  <div className="navbar-subdropdown-row">
                    <span className="navbar-sublink" style={{ cursor: "default" }}>
                      CSR Projects
                      <span className="navbar-subcaret">▸</span>
                      <button
                        type="button"
                        className="navbar-mobile-subitemtoggle"
                        aria-expanded={mobileSubItem === "csr"}
                        aria-label="CSR Projects submenu"
                        onClick={(e) => toggleSubItem("csr", e)}
                      >▾</button>
                    </span>
                  </div>
                  <ul className={`navbar-subdropdown${mobileSubItem === "csr" ? " is-open-mobile" : ""}`}>
                    <li><Link to="/projects/csr/blood-donation" onClick={closeMenu}>Blood Donation</Link></li>
                    <li><Link to="/projects/csr/free-medicine" onClick={closeMenu}>Free Medicine</Link></li>
                    <li><Link to="/projects/csr/tree-plantation" onClick={closeMenu}>Tree Plantation</Link></li>
                    <li><Link to="/projects/csr/tuition-underprivileged" onClick={closeMenu}>Tuition for Underprivileged</Link></li>
                  </ul>
                </li>

                {/* Government Projects */}
                <li className="navbar-subitem-dropdown">
                  <div className="navbar-subdropdown-row">
                    <span className="navbar-sublink" style={{ cursor: "default" }}>
                      Government Projects
                      <span className="navbar-subcaret">▸</span>
                      <button
                        type="button"
                        className="navbar-mobile-subitemtoggle"
                        aria-expanded={mobileSubItem === "gov"}
                        aria-label="Government Projects submenu"
                        onClick={(e) => toggleSubItem("gov", e)}
                      >▾</button>
                    </span>
                  </div>
                  <ul className={`navbar-subdropdown${mobileSubItem === "gov" ? " is-open-mobile" : ""}`}>
                    <li><Link to="/projects/government/ministry-of-minority-affairs" onClick={closeMenu}>Ministry of Minority Affairs</Link></li>
                    <li><Link to="/projects/government/ministry-of-social-justice" onClick={closeMenu}>Ministry of Social Justice</Link></li>
                    <li><Link to="/projects/government/ministry-of-culture" onClick={closeMenu}>Ministry of Culture</Link></li>
                    <li><Link to="/projects/government/ministry-of-rural-development" onClick={closeMenu}>Ministry of Rural Dev</Link></li>
                  </ul>
                </li>

                {/* Shivmala Foundation */}
                <li className="navbar-subitem-dropdown">
                  <div className="navbar-subdropdown-row">
                    <span className="navbar-sublink" style={{ cursor: "default" }}>
                      Shivmala Foundation
                      <span className="navbar-subcaret">▸</span>
                      <button
                        type="button"
                        className="navbar-mobile-subitemtoggle"
                        aria-expanded={mobileSubItem === "sf"}
                        aria-label="Shivmala Foundation submenu"
                        onClick={(e) => toggleSubItem("sf", e)}
                      >▾</button>
                    </span>
                  </div>
                  <ul className={`navbar-subdropdown${mobileSubItem === "sf" ? " is-open-mobile" : ""}`}>
                    <li><Link to="/projects/shivmala-foundation/community-rehabilitation" onClick={closeMenu}>Community Rehabilitation</Link></li>
                    <li><Link to="/projects/shivmala-foundation/job-placement" onClick={closeMenu}>Job Placement</Link></li>
                    <li><Link to="/projects/shivmala-foundation/vocational-training" onClick={closeMenu}>Vocational Training</Link></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <NavLink
                  to="/media"
                  className={({ isActive }) =>
                    `navbar-link${galleryActive || isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Media
                  <span className="navbar-caret">▾</span>
                </NavLink>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={mobileSub === "media"}
                  aria-label="Media submenu"
                  onClick={() => toggleSub("media")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "media" ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/gallery/photos/1" onClick={closeMenu}>
                    Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/gallery/videos/1" onClick={closeMenu}>
                    Video Gallery
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <span className="navbar-link" style={{ cursor: "default" }}>
                  Get Involved
                  <span className="navbar-caret">▾</span>
                </span>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={mobileSub === "involved"}
                  aria-label="Get Involved submenu"
                  onClick={() => toggleSub("involved")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "involved" ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/volunteer" onClick={closeMenu}>
                    Volunteer
                  </Link>
                </li>
                <li>
                  <Link to="/join-ngo" onClick={closeMenu}>
                    Join NGO
                  </Link>
                </li>
                <li>
                  <Link to="/corporate" onClick={closeMenu}>
                    Corporate
                  </Link>
                </li>
                <li>
                  <Link to="/individual-member" onClick={closeMenu}>
                    Individual Member
                  </Link>
                </li>
                <li>
                  <Link to="/career" onClick={closeMenu}>
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/ngo-internship" onClick={closeMenu}>
                    Ngo-Internship
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <span className="navbar-link" style={{ cursor: "default" }}>
                  Download
                  <span className="navbar-caret">▾</span>
                </span>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={mobileSub === "download"}
                  aria-label="Download submenu"
                  onClick={() => toggleSub("download")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "download" ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/download/certificates" onClick={closeMenu}>
                    Certifications
                  </Link>
                </li>
                <li>
                  <Link to="/download/brochure" onClick={closeMenu}>
                    Brochure
                  </Link>
                </li>
                <li>
                  <Link to="/download/application-forms" onClick={closeMenu}>
                    Application Forms
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <NavLink
                  to="/centers"
                  className={({ isActive }) =>
                    `navbar-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Centers
                  <span className="navbar-caret">▾</span>
                </NavLink>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={mobileSub === "centers"}
                  aria-label="Centers submenu"
                  onClick={() => toggleSub("centers")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "centers" ? " is-open-mobile" : ""}`}
              >
                {centersRegions.map((region) => (
                  <li key={region.id}>
                    <Link to={`/centers/${region.id}`} onClick={closeMenu}>
                      {region.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `navbar-link${isActive ? " is-active" : ""}`
                }
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <Link to="/donate" className="navbar-donate" onClick={closeMenu}>
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
