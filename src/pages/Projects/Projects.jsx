import React from "react";
import "./Projects.css";

function Projects({ setView }) {
  const projectsData = [
    {
      id: 1,
      title: "Projet Netflix",
      description: (
        <>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">
                Reproduction de la page d'accueil de Netflix
              </div>

              <p className="subtitle-p">
                J'ai créé une réplique de la page d'accueil de Netflix en
                utilisant React, en mettant l'accent sur une interface moderne
                et dynamique, avec des listes de films organisées par catégorie
                pour une navigation fluide et intuitive.
              </p>
            </div>
            <img
              src={`./src/assets/projet netflix-page.jpg`}
              alt="Image à gauche"
              className="image-left"
            />
          </div>
          <div className="subtitle-mid">
            <img
              src="./src/assets/step.webp"
              alt="Image à droite"
              className="image-right"
            />
            <div className="subtitle-text">
              <div className="subtitle">Démarche </div>

              <ul>
                <li>
                  <strong> Développement initial :</strong> Création d'un
                  prototype en React dans un seul fichier App.jsx pour en
                  maîtriser les bases.
                </li>
                <li>
                  <strong> Refactorisation :</strong> Réorganisation du code en
                  composants modulaires (par exemple, sections de films),
                  garantissant une meilleure maintenabilité et évolutivité.
                </li>
                <li>
                  <strong>Améliorations visuelles :</strong> Intégration
                  d'animations et d'un style inspiré de Netflix pour offrir une
                  expérience professionnelle et fluide.
                </li>
              </ul>
            </div>
          </div>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">Compétences et Résultats </div>
              <div className="ul-bouton">
                <ul>
                  <li>
                    {" "}
                    <strong>React :</strong> Création d'interfaces dynamiques et
                    modulaires.
                  </li>
                  <li>
                    <strong> Gestion des données :</strong> Manipulation de
                    données via JSON pour simuler une base de données.
                  </li>
                  <li>
                    <strong>CSS avancé :</strong> Application de styles modernes
                    incluant animations et dispositions.
                  </li>
                  <li>
                    <strong>Déploiement :</strong> Mise en ligne du projet via
                    Netlify, assurant une disponibilité rapide et stable.
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="./src/assets/resultat.webp"
              alt="Image à gauche"
              className="image-left"
            />
            <div className="visit-site-container">
              <a
                href="https://netfloux-yelbas.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-button"
              >
                Je visite le site
              </a>
            </div>
          </div>
        </>
      ),
      logo: "./src/assets/netflix.png",
      link: "https://netfloux-yelbas.netlify.app/",
    },
    {
      id: 2,
      title: "Projet Deliveroo",
      description: (
        <>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">
                Reproduction de Deliveroo – Application Full-Stack
              </div>

              <p className="subtitle-p">
                Dans le cadre de ce projet, j'ai développé une application de
                type Deliveroo en utilisant React pour le frontend et
                Node.js/Express pour le backend, permettant de récupérer et
                d'afficher dynamiquement les menus d'un restaurant via une API.
              </p>
            </div>
            <img
              src={`./src/assets/projet deliveroo-page.jpg`}
              alt="Image à gauche"
              className="image-left"
            />
          </div>
          <div className="subtitle-mid">
            <img
              src="./src/assets/step.webp"
              alt="Image à droite"
              className="image-right"
            />
            <div className="subtitle-text">
              <div className="subtitle">Démarche </div>

              <ul>
                <li>
                  <strong> Backend (Node.js/Express) :</strong> Création d'un
                  serveur Express pour gérer les requêtes et renvoyer les
                  données du restaurant (nom, adresse, menus). Le backend permet
                  de fournir les informations de manière structurée et
                  performante.
                </li>
                <li>
                  <strong> API (Intégration externe) :</strong> Intégration
                  d'une API tierce (Deliveroo) pour récupérer les menus du
                  restaurant en temps réel, avec un système d'authentification
                  via token pour sécuriser l'accès aux données.
                </li>
                <li>
                  <strong>Frontend (React) :</strong> Développement de
                  l'interface avec React, récupérant les données via Axios.
                  Gestion de l'état avec useState et des effets avec useEffect
                  pour garantir une interface réactive et dynamique.
                </li>
              </ul>
            </div>
          </div>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">Compétences et Résultats </div>
              <div className="ul-bouton">
                <ul>
                  <li>
                    {" "}
                    <strong>Node.js & Express :</strong> Création d'une API
                    backend robuste pour la gestion des données du restaurant.
                  </li>
                  <li>
                    <strong> API externe (Deliveroo) :</strong> Intégration
                    d'une API tierce pour récupérer dynamiquement les menus du
                    restaurant.
                  </li>
                  <li>
                    <strong>React & Axios :</strong> Développement d'une
                    interface dynamique et réactive avec gestion des appels API.
                  </li>
                  <li>
                    <strong>Déploiement :</strong> Hébergement du frontend sur
                    Netlify et du backend sur Northflank, assurant une
                    disponibilité et une performance optimales.
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="./src/assets/resultat.webp"
              alt="Image à gauche"
              className="image-left"
            />
            <div className="visit-site-container">
              <a
                href="https://deliveroo-yelbas.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-button"
              >
                Je visite le site
              </a>
            </div>
          </div>
        </>
      ),
      logo: "./src/assets/deliveroo.png",
      link: "https://deliveroo-yelbas.netlify.app/",
    },
    {
      id: 3,
      title: "Projet Marvel",
      description: (
        <>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">
                Développement d'une application Marvel
              </div>

              <p className="subtitle-p">
                J'ai conçu une application web permettant d'explorer l'univers
                Marvel. Grâce à une interface intuitive, les utilisateurs
                peuvent rechercher des personnages, voir les comics associés et
                enregistrer leurs favoris.
              </p>
            </div>
            <img
              src={`./src/assets/projet marvel-page.jpg`}
              alt="Image à gauche"
              className="image-left"
            />
          </div>
          <div className="subtitle-mid">
            <img
              src="./src/assets/step.webp"
              alt="Image à droite"
              className="image-right"
            />
            <div className="subtitle-text">
              <div className="subtitle">Démarche </div>

              <ul>
                <li>
                  <strong> Backend (Node.js/Express) :</strong> Développement
                  d'une API permettant la gestion des données des personnages et
                  des comics, avec MongoDB comme base de données.
                </li>
                <li>
                  <strong> Intégration API Marvel :</strong> Récupération et
                  affichage dynamique des informations grâce à l'API publique de
                  Marvel.
                </li>
                <li>
                  <strong> Frontend (React) :</strong> Interface utilisateur
                  réactive développée avec React et gestion des requêtes API
                  avec Axios.
                </li>
              </ul>
            </div>
          </div>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">Compétences et Résultats </div>
              <div className="ul-bouton">
                <ul>
                  <li>
                    <strong>React & Axios :</strong> Développement d'une
                    interface dynamique avec gestion des appels API.
                  </li>
                  <li>
                    <strong>Node.js & Express :</strong> Création d'un backend
                    robuste avec gestion des routes et des favoris.
                  </li>
                  <li>
                    <strong>MongoDB :</strong> Stockage et manipulation des
                    données des utilisateurs et des favoris.
                  </li>
                  <li>
                    <strong>Déploiement :</strong> Hébergement du frontend sur
                    Netlify et du backend sur Northflank pour une performance
                    optimale.
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="./src/assets/resultat.webp"
              alt="Image à gauche"
              className="image-left"
            />
            <div className="visit-site-container">
              <a
                href="https://marvel-appyelbas.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-button"
              >
                Je visite le site
              </a>
            </div>
          </div>
        </>
      ),
      logo: "./src/assets/marvel.png",
      link: "https://marvel-appyelbas.netlify.app/",
    },
    {
      id: 4,
      title: "Projet Vinted",
      description: (
        <>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">
                Développement d'une Marketplace – Vinted
              </div>

              <p className="subtitle-p">
                Dans le cadre de ce projet, j'ai développé le backend d'une
                application de type Vinted en utilisant Node.js et Express. Ce
                backend permet de gérer les utilisateurs, les annonces, et les
                interactions, avec un système sécurisé et performant.
              </p>
            </div>
            <img
              src={`./src/assets/projet vinted-page.jpg`}
              alt="Image à gauche"
              className="image-left"
            />
          </div>
          <div className="subtitle-mid">
            <img
              src="./src/assets/step.webp"
              alt="Image à droite"
              className="image-right"
            />
            <div className="subtitle-text">
              <div className="subtitle">Démarche</div>

              <ul>
                <li>
                  <strong>Backend (Node.js/Express) :</strong> Création d'un
                  serveur Express pour gérer les opérations principales, comme
                  l'inscription, la connexion, et la gestion des annonces. Mise
                  en place d'une architecture modulaire pour une meilleure
                  évolutivité.
                </li>
                <li>
                  <strong>Stockage d'images (Cloudinary) :</strong> Intégration
                  de Cloudinary pour l'hébergement et la gestion des images,
                  permettant le téléchargement d'images pour les annonces et les
                  profils utilisateurs.
                </li>
                <li>
                  <strong>Sécurisation des données :</strong> Mise en place de
                  middlewares pour l'authentification via tokens (JWT) et
                  validation des entrées utilisateurs, garantissant la sécurité
                  des opérations sensibles.
                </li>
                <li>
                  <strong>Gestion des annonces :</strong> Ajout de
                  fonctionnalités pour publier, modifier, supprimer, et
                  rechercher des annonces avec des filtres avancés (titre, prix,
                  pagination).
                </li>
              </ul>
            </div>
          </div>
          <div className="subtitle-block">
            <div className="subtitle-text">
              <div className="subtitle">Compétences et Résultats</div>
              <div className="ul-bouton">
                <ul>
                  <li>
                    <strong>Node.js & Express :</strong> Développement d'une API
                    backend robuste pour gérer les utilisateurs et les annonces.
                  </li>
                  <li>
                    <strong>MongoDB :</strong> Gestion efficace des données,
                    avec une modélisation adaptée pour les utilisateurs et les
                    annonces.
                  </li>
                  <li>
                    <strong>Cloudinary :</strong> Hébergement et organisation
                    des images, avec un système flexible pour gérer les
                    ressources visuelles.
                  </li>
                  <li>
                    <strong>Sécurisation :</strong> Implémentation de JWT pour
                    l'authentification des utilisateurs et vérification des
                    accès.
                  </li>
                  <li>
                    <strong>Déploiement :</strong> Hébergement du backend sur
                    Northflank, assurant une disponibilité et une performance
                    optimales.
                  </li>
                </ul>
              </div>
            </div>
            <img
              src="./src/assets/resultat.webp"
              alt="Image à gauche"
              className="image-left"
            />
            <div className="visit-site-container">
              <a
                href="https://dreamy-lokum-dff293.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="visit-site-button"
              >
                Je visite le site
              </a>
            </div>
          </div>
        </>
      ),
      logo: "./src/assets/vinted.png",
      link: "https://dreamy-lokum-dff293.netlify.app/",
    },
  ];

  return (
    <section className="projects-details">
      {projectsData.map((project) => (
        <div key={project.id} className="project-detail-block">
          <div className="logo-title-container">
            <img
              src={project.logo}
              alt={project.title}
              className="project-logo"
            />
            <h3 className="project-title">{project.title}</h3>
          </div>
          <div className="project-detail-content">
            <div className="project-description">{project.description}</div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
