import React from "react";
import "./AboutMe.css";

function AboutMe({ setView, setShowContactModal }) {
  return (
    <div className="about-me">
      <div className="profile-section">
        <img src="./src/assets/Hero.png" alt="Votre photo" />
        <div className="text-content">
          <h2>À propos de moi</h2>
          <p>
            Actuellement en reconversion pour obtenir un titre RNCP 6 (BAC+3/4).
            Passionné par la technologie et en quête constante d'apprentissage
            pour contribuer de manière positive au monde.
          </p>
          <div className="action-buttons">
            <button
              className="contact-button"
              onClick={() => setShowContactModal(true)}
            >
              Me contacter
            </button>
            <button
              className="download-button"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "./src/assets/CV-Ibrahim-Yelbas.pdf";
                link.download = "CV-Ibrahim-Yelbas.pdf";
                link.click();
              }}
            >
              Télécharger mon CV
            </button>
          </div>
        </div>
      </div>

      <div className="additional-info">
        <div className="experience-section">
          <h2>Expériences professionnelles</h2>
          <div className="experience-cards">
            <div className="experience-card">
              <h3>ENSIO</h3>
              <div className="experience-logo">
                <img src="./src/assets/ensio.png" alt="ENSIO Logo" />
              </div>
              <h4>Responsable Commande d'Accès</h4>
              <p>
                <em>Depuis février 2021</em>
              </p>
              <p>
                Gestion de projets techniques liés aux réseaux fibre optique :
                analyse des besoins, planification, et supervision des
                installations.
              </p>
            </div>
            <div className="experience-card">
              <h3>INEO INFRACOM</h3>
              <div className="experience-logo">
                <img src="./src/assets/ineo.png" alt="INEO Logo" />
              </div>
              <h4>Technicien en Bureau d'Étude</h4>
              <p>
                <em>2020 - 2021</em>
              </p>
              <p>
                Élaboration de plans et documentation technique pour des projets
                fibre optique. Coordination avec des équipes techniques et les
                parties prenantes.
              </p>
            </div>
            <div className="experience-card">
              <h3>SOGETREL</h3>
              <div className="experience-logo">
                <img src="./src/assets/sogetrel.png" alt="SOGETREL Logo" />
              </div>
              <h4>Dessinateur-Projeteur</h4>
              <p>
                <em>2019 - 2020</em>
              </p>
              <p>
                Participation à des projets de déploiement de la fibre optique.
                Collaboration avec des équipes multidisciplinaires pour assurer
                le bon déroulement des projets.
              </p>
            </div>
          </div>
        </div>
        <div className="education-section">
          <h2>Formations</h2>

          <div className="education-card">
            <img src="./src/assets/lereacteur.png" alt="Le Reacteur Logo" />
            <div className="education-content">
              <h3>Le Reacteur</h3>
              <h4>Formation Développeur Web et Mobile</h4>
              <p>
                Apprentissage approfondi des technologies modernes telles que :
                JavaScript, React, Node.js, MongoDB, et intégration HTML/CSS.
              </p>
              <ul>
                <li>
                  Création de projets pratiques comme des clones de plateformes.
                </li>
                <li>
                  Collaboration en équipe pour résoudre des problématiques
                  techniques.
                </li>
              </ul>
            </div>
          </div>

          <div className="education-card">
            <img
              src="./src/assets/bordeaux.png"
              alt="Université Bordeaux Logo"
            />
            <div className="education-content">
              <h3>Université de Bordeaux</h3>
              <h4>Faculté d'Informatique</h4>
              <p>
                Une année d'étude en informatique avec des modules centrés sur
                les bases de la programmation, des algorithmes et de la gestion
                de bases de données.
              </p>
            </div>
          </div>

          <div className="education-card">
            <img src="./src/assets/lesiris.png" alt="Lycée Les Iris Logo" />
            <div className="education-content">
              <h3>Lycée Les Iris, Lormont</h3>
              <h4>Baccalauréat STI2D</h4>
              <p>
                Formation spécialisée dans le développement durable et
                l'innovation technologique.
              </p>
            </div>
          </div>
        </div>

        <div className="language-section">
          <h2>Langues</h2>
          <div className="language-cards">
            <div className="language-card">
              <div className="language-logo">
                <img src="./src/assets/france.png" alt="Français" />
              </div>
              <h3>Français</h3>
              <h4>Langue maternelle</h4>
            </div>
            <div className="language-card">
              <div className="language-logo">
                <img src="./src/assets/turquie.png" alt="Turc" />
              </div>
              <h3>Turc</h3>
              <h4>Courant</h4>
            </div>
            <div className="language-card">
              <div className="language-logo">
                <img src="./src/assets/anglais.png" alt="Anglais" />
              </div>
              <h3>Anglais</h3>
              <h4>Intermédiaire</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
