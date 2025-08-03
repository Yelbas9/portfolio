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
          textAlign: "center",
        }}
      >
        Le site est en cours de refonte
      </h1>
      <p
        style={{
          maxWidth: 440,
          textAlign: "center",
          fontSize: "1.15rem",
          color: "#3d3d3d",
        }}
      >
        Je travaille actuellement sur une nouvelle version de mon portfolio.
        <br />
        <strong>Début des travaux :</strong> 2 août 2025
        <br />
        <strong>Fin prévue :</strong> 10 août 2025
      </p>
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
