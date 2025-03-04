import React from "react";
import { useNavigate } from "react-router-dom";
import GlowCard from "../../components/GlowCard/GlowCard";
import Marquee from "react-fast-marquee";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();

  const projectsData = [
    {
      id: 1,
      title: "Projet Netflix",
      logo: "/netflix.png",
    },
    {
      id: 2,
      title: "Projet Deliveroo",
      logo: "/deliveroo.png",
    },
    {
      id: 3,
      title: "Projet Marvel",
      logo: "/marvel.png",
    },
    {
      id: 4,
      title: "Projet Vinted",
      logo: "/vinted.png",
    },
  ];

  const skillsData = [
    {
      id: 1,
      name: "JavaScript",
      logo: "/javascript.png",
    },
    {
      id: 2,
      name: "React",
      logo: "/react.png",
    },
    {
      id: 3,
      name: "HTML5",
      logo: "/html.png",
    },
    {
      id: 4,
      name: "CSS3",
      logo: "/css.png",
    },
    {
      id: 5,
      name: "MongoDB",
      logo: "/mongodb.png",
    },
    {
      id: 6,
      name: "Postman",
      logo: "/postman.png",
    },
    {
      id: 7,
      name: "Figma",
      logo: "/figma.png",
    },
    {
      id: 8,
      name: "Git",
      logo: "/git.png",
    },
    {
      id: 9,
      name: "Node & Express",
      logo: "/node-express.png",
    },
  ];

  const handleDiscoverProjects = () => {
    navigate("/projects");
  };

  const handleDiscoverSkills = () => {
    navigate("/skills");
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <GlowCard identifier="hero">
          <div className="hero-inner-content">
            <div className="hero-image-container">
              <img src="/Hero2.png" alt="Votre nom" className="hero-image" />
            </div>
            <div className="hero-text">
              <h1>Développeur Full Stack</h1>
              <p>
                Actuellement en reconversion pour obtenir un titre RNCP 6
                (BAC+3/4). Passionné par la technologie et en quête constante
                d'apprentissage pour contribuer de manière positive au monde.
              </p>
              <div className="hero-buttons-container">
                <button
                  className="hero-button"
                  onClick={() => navigate("/about")}
                >
                  Je veux en savoir plus
                </button>
                <a
                  href="/CV-Ibrahim-Yelbas.pdf"
                  download
                  className="button-download"
                >
                  Télécharger mon CV
                </a>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>

      <div className="projects">
        <h2>Mes Derniers Projets</h2>
        <div className="projects-gallery">
          {projectsData.map((project) => (
            <div key={project.id} className="project-item">
              <img
                src={project.logo}
                alt={project.title}
                className="main-image"
              />
              <img
                src={`/${project.title.toLowerCase()}-page.jpg`}
                alt={`${project.title} Hover`}
                className="hover-image"
              />
            </div>
          ))}
        </div>
        <button className="discover-button" onClick={handleDiscoverProjects}>
          Je Découvre
        </button>
      </div>

      <div className="competences">
        <h2>Mes Compétences</h2>
        <div className="competences-gallery">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            direction="left"
          >
            {skillsData.map((skill) => (
              <div key={skill.id} className="competence-card">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="competence-icon"
                />
                <p className="competence-animation">{skill.name}</p>
              </div>
            ))}
          </Marquee>
        </div>
        <button className="decouvrir-btn" onClick={handleDiscoverSkills}>
          Je m'informe
        </button>
      </div>
    </section>
  );
}

export default Hero;
