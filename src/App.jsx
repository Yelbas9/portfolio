import React from "react";
import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F9E8DF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <img
        src="/rebranding.webp"
        alt="Rebranding en cours"
        style={{
          maxWidth: 380,
          width: "100%",
          height: "400px",
          marginBottom: "2rem",
          borderRadius: "18px",
          boxShadow: "0 8px 40px #0001",
          objectFit: "cover",
        }}
      />

      <h1
        style={{
          color: "#204b67",
          marginBottom: "1rem",
        }}
      >
        Le site est en cours de refonte
      </h1>

      <p
        style={{
          maxWidth: 500,
          fontSize: "1.15rem",
          color: "#3d3d3d",
          lineHeight: "1.6",
        }}
      >
        Je travaille actuellement sur une nouvelle version de mon portfolio avec
        un rebranding complet et une amélioration de l’expérience utilisateur.
        <br />
        <br />
        <strong>Début des travaux :</strong> 19 février 2026
        <br />
        <strong>Fin prévue :</strong> 1er mars 2026
      </p>

      {/* SECTION CONTACT */}
      <div
        style={{
          marginTop: "2.5rem",
          padding: "1.5rem",
          background: "#ffffff",
          borderRadius: "14px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          maxWidth: "420px",
          width: "100%",
        }}
      >
        <h2
          style={{
            color: "#204b67",
            marginBottom: "0.5rem",
          }}
        >
          Me contacter
        </h2>

        <p
          style={{
            color: "#555",
            marginBottom: "1rem",
          }}
        >
          Pour toute demande ou opportunité, vous pouvez me contacter à
          l’adresse suivante :
        </p>

        <a
          href="mailto:i.yelbas@gmail.com"
          style={{
            color: "#204b67",
            fontWeight: "bold",
            textDecoration: "none",
            fontSize: "1.1rem",
          }}
        >
          i.yelbas@gmail.com
        </a>
      </div>

      <p
        style={{
          marginTop: "2rem",
          color: "#888",
          fontSize: "1rem",
        }}
      >
        Merci pour votre compréhension et à très bientôt !
      </p>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
// import Hero from "./pages/Home/Hero";
// import Projects from "./pages/Projects/Projects";
// import Competences from "./pages/Competences/Competences";
// import AboutMe from "./pages/About/AboutMe";
// import ContactForm from "./components/ContactForm/ContactForm";
// import "./App.css";

// function App() {
//   const [showContactModal, setShowContactModal] = useState(false);

//   return (
//     <Router>
//       <div className="app">
//         <FloatingMenu />

//         <Navbar setShowContactModal={setShowContactModal} />

//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/skills" element={<Competences detailedView={true} />} />
//           <Route
//             path="/about"
//             element={<AboutMe setShowContactModal={setShowContactModal} />}
//           />
//           <Route
//             path="/contact"
//             element={<ContactForm setShowContactModal={setShowContactModal} />}
//           />

//           <Route path="*" element={<Navigate to="/" />} />
//         </Routes>

//         <Footer setShowContactModal={setShowContactModal} />

//         {showContactModal && (
//           <div className="contact-form-overlay">
//             <ContactForm setShowContactModal={setShowContactModal} />
//           </div>
//         )}

//         <ScrollToTop />
//       </div>
//     </Router>
//   );
// }

// export default App;
