import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

const LOGO_SRC = `${process.env.PUBLIC_URL}/images/logo.png`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setOpenMenus({});
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenMenus({});
  };

  const galleryActive = location.pathname.startsWith("/gallery");

  const toggleSub = (key) => {
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));
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
                width={60}
                height={60}
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
              +91 8421217140
            </a>
          </div>
        </div>
      </div>

      <div className={`navbar-nav-shell ${menuOpen ? "is-open" : ""}`}>
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
                  About Us
                  <span className="navbar-caret">▾</span>
                </NavLink>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={openMenus["about"]}
                  aria-label="About submenu"
                  onClick={() => toggleSub("about")}
                />
              </div>
              <ul
                className={`navbar-dropdown${openMenus["about"] ? " is-open-mobile" : ""}`}
              >
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
                <NavLink
                  to="/initiatives"
                  className={({ isActive }) =>
                    `navbar-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Projects
                  <span className="navbar-caret">▾</span>
                </NavLink>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={openMenus["projects"]}
                  aria-label="Projects submenu"
                  onClick={() => toggleSub("projects")}
                />
              </div>
              <ul
                className={`navbar-dropdown${openMenus["projects"] ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/initiatives" onClick={closeMenu}>
                    All Initiatives
                  </Link>
                </li>
                
                <li className="navbar-subitem-dropdown">
                  <div className="navbar-subdropdown-row">
                    <span className="navbar-sublink">
                      CSR Projects
                      <span className="navbar-subcaret">▸</span>
                    </span>
                    <button
                      type="button"
                      className="navbar-mobile-subitemtoggle"
                      aria-expanded={openMenus["projects-csr"]}
                      aria-label="CSR submenu"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSub("projects-csr"); }}
                    >▾</button>
                  </div>
                  <ul className={`navbar-subdropdown${openMenus["projects-csr"] ? " is-open-mobile" : ""}`}>
                    <li><Link to="/projects/csr/blood-donation" onClick={closeMenu}>Blood Donation</Link></li>
                    <li><Link to="/projects/csr/free-medicine" onClick={closeMenu}>Free Medicine</Link></li>
                    <li><Link to="/projects/csr/tree-plantation" onClick={closeMenu}>Tree Plantation</Link></li>
                    <li><Link to="/projects/csr/tuition-underprivileged" onClick={closeMenu}>Tuition for Underprivileged</Link></li>
                  </ul>
                </li>

                <li className="navbar-subitem-dropdown">
                  <div className="navbar-subdropdown-row">
                    <span className="navbar-sublink">
                      Government Projects
                      <span className="navbar-subcaret">▸</span>
                    </span>
                    <button
                      type="button"
                      className="navbar-mobile-subitemtoggle"
                      aria-expanded={openMenus["projects-gov"]}
                      aria-label="Government submenu"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSub("projects-gov"); }}
                    >▾</button>
                  </div>
                  <ul className={`navbar-subdropdown${openMenus["projects-gov"] ? " is-open-mobile" : ""}`}>
                    <li><Link to="/projects/government/ministry-of-minority-affairs" onClick={closeMenu}>Ministry of Minority Affairs</Link></li>
                    <li><Link to="/projects/government/ministry-of-social-justice" onClick={closeMenu}>Ministry of Social Justice</Link></li>
                    <li><Link to="/projects/government/ministry-of-culture" onClick={closeMenu}>Ministry of Culture</Link></li>
                    <li><Link to="/projects/government/ministry-of-rural-development" onClick={closeMenu}>Ministry of Rural Development</Link></li>
                  </ul>
                </li>

                <li className="navbar-subitem-dropdown">
                  <div className="navbar-subdropdown-row">
                    <span className="navbar-sublink">
                      Foundation Projects
                      <span className="navbar-subcaret">▸</span>
                    </span>
                    <button
                      type="button"
                      className="navbar-mobile-subitemtoggle"
                      aria-expanded={openMenus["projects-found"]}
                      aria-label="Foundation submenu"
                      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSub("projects-found"); }}
                    >▾</button>
                  </div>
                  <ul className={`navbar-subdropdown${openMenus["projects-found"] ? " is-open-mobile" : ""}`}>
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
                  to="/gallery/photos/1"
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
                  aria-expanded={openMenus["media"]}
                  aria-label="Media submenu"
                  onClick={() => toggleSub("media")}
                />
              </div>
              <ul
                className={`navbar-dropdown${openMenus["media"] ? " is-open-mobile" : ""}`}
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
                <NavLink
                  to="/impact"
                  className={({ isActive }) =>
                    `navbar-link${isActive ? " is-active" : ""}`
                  }
                  onClick={closeMenu}
                >
                  Get Involved
                  <span className="navbar-caret">▾</span>
                </NavLink>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={openMenus["involved"]}
                  aria-label="Get Involved submenu"
                  onClick={() => toggleSub("involved")}
                />
              </div>
              <ul
                className={`navbar-dropdown${openMenus["involved"] ? " is-open-mobile" : ""}`}
              >
                <li><Link to="/impact" onClick={closeMenu}>Our Impact</Link></li>
                <li><Link to="/volunteer" onClick={closeMenu}>Volunteer</Link></li>
                <li><Link to="/join-ngo" onClick={closeMenu}>Join NGO</Link></li>
                <li><Link to="/corporate" onClick={closeMenu}>Corporate CSR</Link></li>
                <li><Link to="/individual-member" onClick={closeMenu}>Individual Member</Link></li>
                <li><Link to="/career" onClick={closeMenu}>Career</Link></li>
                <li><Link to="/ngo-internship" onClick={closeMenu}>NGO Internship</Link></li>
              </ul>
            </li>

            <li className="navbar-item-dropdown">
              <div className="navbar-dropdown-row">
                <a href="#download" className="navbar-link" onClick={(e) => e.preventDefault()}>
                  Download
                  <span className="navbar-caret">▾</span>
                </a>
                <button
                  type="button"
                  className="navbar-mobile-subtoggle"
                  aria-expanded={openMenus["download"]}
                  aria-label="Download submenu"
                  onClick={() => toggleSub("download")}
                />
              </div>
              <ul
                className={`navbar-dropdown${openMenus["download"] ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/download/certificates" onClick={closeMenu}>
                    Certificates
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
                  aria-expanded={openMenus["centers"]}
                  aria-label="Centers submenu"
                  onClick={() => toggleSub("centers")}
                />
              </div>
              <ul
                className={`navbar-dropdown${openMenus["centers"] ? " is-open-mobile" : ""}`}
              >
                <li>
                  <Link to="/centers/maharashtra" onClick={closeMenu}>
                    Maharashtra 
                  </Link>
                </li>
                <li>
                  <Link to="/centers/gujarat" onClick={closeMenu}>
                    Gujarat 
                  </Link>
                </li>
                <li>
                  <Link to="/centers/delhi" onClick={closeMenu}>
                    Delhi 
                  </Link>
                </li>
                <li>
                  <Link to="/centers/haryana" onClick={closeMenu}>
                    Haryana 
                  </Link>
                </li>
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
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
