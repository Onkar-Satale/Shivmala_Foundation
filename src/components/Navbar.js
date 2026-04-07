import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { centersRegions } from "../data/centersData";
import "./Navbar.css";

const LOGO_SRC = `${process.env.PUBLIC_URL}/images/logo.png`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setMobileSub(null);
  }, [location.pathname, location.hash]);

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileSub(null);
  };

  const galleryActive = location.pathname.startsWith("/gallery");

  const toggleSub = (key) => {
    setMobileSub((s) => (s === key ? null : key));
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
                  aria-expanded={mobileSub === "about"}
                  aria-label="About submenu"
                  onClick={() => toggleSub("about")}
                />
              </div>
              <ul
                className={`navbar-dropdown${mobileSub === "about" ? " is-open-mobile" : ""}`}
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

            <li>
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

            <li>
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
            </li>

            <li>
              <a href="/#download" className="navbar-link" onClick={closeMenu}>
                Download
                <span className="navbar-caret">▾</span>
              </a>
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
          <Link to="/contact" className="navbar-donate" onClick={closeMenu}>
            Donate Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
