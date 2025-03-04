import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ setShowContactModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenuOutsideClick = (e) => {
    if (e.target.classList.contains("navbar-overlay")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/projects">Projets</Link>
          </li>
          <li>
            <Link to="/skills">Compétences</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li onClick={() => setShowContactModal(true)}>Contact</li>
        </ul>
      </nav>

      <div className="navbar-icons">
        <div className="navbar-hamburger" onClick={() => setIsMenuOpen(true)}>
          <i className="fas fa-bars"></i>
        </div>
        <div className="navbar-home">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div
          className="navbar-contact"
          onClick={() => setShowContactModal(true)}
        >
          <i className="fas fa-envelope"></i>
        </div>
      </div>

      {isMenuOpen && (
        <div className="navbar-overlay" onClick={closeMenuOutsideClick}>
          <div className="navbar-modal">
            <div className="navbar-close" onClick={() => setIsMenuOpen(false)}>
              <i className="fas fa-times"></i>
            </div>

            <ul className="navbar-menu-mobile">
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsMenuOpen(false)}>
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/skills" onClick={() => setIsMenuOpen(false)}>
                  Compétences
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsMenuOpen(false)}>
                  À propos
                </Link>
              </li>
              <li
                onClick={() => {
                  setIsMenuOpen(false);
                  setShowContactModal(true);
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
