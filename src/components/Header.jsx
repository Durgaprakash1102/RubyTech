import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import "../css/Header.css";
import rubyLogo from "../images/rubylogo.jpg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const newState = !menuOpen;
    setMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [menuOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target) && menuOpen) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="rt-header" ref={headerRef}>
      <div className="rt-header-inner">

        {/* Logo */}
        <Link to="/" className="rt-brand" onClick={closeMenu}>
          <div className="rt-logo">
            <img 
              src={rubyLogo} 
              alt="Ruby Tech LLC" 
              width="158" 
              height="70" 
              loading="eager"
            />
          </div>
          <span className="rt-brand-line" />
        </Link>

        {/* Navigation */}
        <nav
          className={`rt-navigation ${menuOpen ? "open" : ""}`}
          aria-label="Main navigation"
          role="navigation"
        >
          <NavLink 
            to="/" 
            end 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            About
          </NavLink>

          <NavLink 
            to="/services" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Services
          </NavLink>

          <NavLink 
            to="/careers" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Careers
          </NavLink>

          <NavLink 
            to="/contact" 
            onClick={closeMenu}
            className={({ isActive }) => isActive ? "active" : ""}
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA */}
      <Link to="/contact" className="rt-cta">
  <span>Get In Touch</span>
  <span className="rt-cta-icon">
    <i className="fa-solid fa-phone"></i>
  </span>
</Link>

        {/* Mobile menu button */}
        <button
          type="button"
          className={`rt-menu ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="navigation"
        >
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Header;