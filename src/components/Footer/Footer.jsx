import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = ({ setShowContactModal }) => {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-contact">
          <h3>Contact :</h3>
          <p>
            Email : <a href="mailto:email@example.com">i.yelbas@gmail.com</a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/ibrahim-yelbas-1064bb206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </p>
          <p>
            <a
              href="https://github.com/Yelbas9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </p>
        </div>

        <div className="footer-center">
          <p>Site développé avec React, CSS, et ❤️.</p>
          <p>© 2025 Ibrahim Yelbas. Tous droits réservés.</p>
        </div>

        <div className="footer-links">
          <h3>Navigation :</h3>
          <div className="navigation-grid">
            <p>
              <Link to="/">Accueil</Link>
            </p>
            <p>
              <Link to="/projects">Projets</Link>
            </p>
            <p>
              <Link to="/skills">Compétences</Link>
            </p>
            <p>
              <Link to="/about">À propos</Link>
            </p>
            <p>
              <a onClick={() => setShowContactModal(true)}>Contact</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
