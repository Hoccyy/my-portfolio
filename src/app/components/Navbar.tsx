import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="/" className="homeLink">Hocían Wade</a>
          <a href="/" className="initials">HW</a>
        </div>
        <ul className="nav-links">
          <li><a href="/">About</a></li>
          <li><a href="/work">Projects</a></li>
          <li><a href="/contact" className="nav-cta">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

