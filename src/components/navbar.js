import React, { useState } from "react";
import { navigate } from "gatsby";
import './navbar.css';

const Navbar = ({ scrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`top-wrapper ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>

      {/* Amae Logo (only visible when scrolled and menu is closed) */}
      {scrolled && !menuOpen && (
        <div className="top-logo" onClick={() => navigate('/')}>
          <img src="/amaeredred.png" alt="Amae" className="logo-img" />
        </div>
      )}

      {/* Burger menu (mobile only) */}
      <div className={`burger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      {/* Desktop buttons */}
      <div className="top-right-buttons">
        <button className="btn places" onClick={() => navigate('/places')}>Places</button>
        <button className="btn questions" onClick={() => navigate('/questions')}>Questions</button>
        <button className="btn contact" onClick={() => navigate('/contact')}>Contact us</button>
      </div>

      {/* Mobile Dropdown (no logo here) */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        <button className="btn places" onClick={() => { setMenuOpen(false); navigate('/places')}}>Places</button>
        <button className="btn questions" onClick={() => { setMenuOpen(false); navigate('/questions')}}>Questions</button>
        <button className="btn contact" onClick={() => { setMenuOpen(false); navigate('/contact')}}>Contact us</button>
      </div>
    </div>
  );
};

export default Navbar;
