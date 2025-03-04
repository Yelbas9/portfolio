import React from "react";
import "./Competences.css";

function Competences({ setView, setCompetencesDetailedView }) {
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

  const groupedSkills = [
    {
      title: "Développement Frontend",
      description:
        "J'ai acquis une expertise dans la création d'interfaces web modernes en combinant HTML5, CSS3, et JavaScript pour structurer, styliser et dynamiser les pages. Avec React, j'ai conçu des composants réactifs et réutilisables, comme lors du développement d'applications complexes telles que celles inspirées de Netflix et Deliveroo.",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
      logos: ["/html.png", "/css.png", "/javascript.png", "/react.png"],
    },
    {
      title: "Développement Backend",
      description:
        "Mon expérience inclut la conception de systèmes backend robustes en utilisant Node.js et Express. Ces outils m'ont permis de structurer des API performantes, par exemple pour gérer les commandes et les utilisateurs dans une application type Deliveroo.",
      skills: ["Node.js", "Express"],
      logos: ["/node-express.png"],
    },
    {
      title: "Bases de données",
      description:
        "Je maîtrise MongoDB pour organiser des bases de données structurées ou flexibles, adaptées aux besoins des applications modernes. En parallèle, j'utilise Postman pour tester les API et garantir une communication fluide entre le frontend et le backend.",
      skills: ["MongoDB", "Postman"],
      logos: ["/mongodb.png", "/postman.png"],
    },
    {
      title: "Outils de conception",
      description:
        "J'utilise Git pour coordonner efficacement le travail en équipe et assurer le suivi des versions de code. Avec Figma, je conçois des interfaces centrées sur l'utilisateur, en créant des prototypes fonctionnels pour aligner le design avec les objectifs du projet.",
      skills: ["Figma", "Git"],
      logos: ["/figma.png", "/git.png"],
    },
  ];

  const handleDiscover = () => {
    setCompetencesDetailedView(true);
    setView("competences");
  };

  return (
    <section className="competences-details">
      <div className="competence-group">
        <div className="competence-detail-block">
          <h3 className="competence-group-title">{groupedSkills[0].title}</h3>
          <p className="competence-group-description">
            {groupedSkills[0].description}
          </p>
          <div className="competence-logos">
            {groupedSkills[0].logos.map((logo, logoIndex) => (
              <img
                key={logoIndex}
                src={logo}
                alt={groupedSkills[0].skills[logoIndex]}
                className="competence-logo"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="competence-row">
        {groupedSkills.slice(1).map((group, index) => (
          <div key={index} className="competence-column">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <div className="competence-logos">
              {group.logos.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={logo}
                  alt={group.skills[logoIndex]}
                  className="competence-logo"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;
