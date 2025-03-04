import React from "react";
import "./FloatingMenu.css";

function FloatingMenu() {
  return (
    <div className="floating-menu">
      <a
        href="https://www.linkedin.com/in/ibrahim-yelbas-1064bb206/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-button"
      >
        <img src="/linkedin.png" alt="LinkedIn" className="icon" />
        <span className="text">LinkedIn</span>
      </a>
      <a
        href="https://github.com/Yelbas9"
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        <img src="/github.png" alt="GitHub" className="icon" />
        <span className="text">GitHub</span>
      </a>
      <a href="mailto:i.yelbas@gmail.com" className="mail-button">
        <img src="/gmail.png" alt="Gmail" className="icon" />
        <span className="text">Gmail</span>
      </a>
    </div>
  );
}

export default FloatingMenu;
