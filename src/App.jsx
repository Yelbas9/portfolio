import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import FloatingMenu from "./components/FloatingMenu/FloatingMenu";
import Hero from "./pages/Home/Hero";
import Projects from "./pages/Projects/Projects";
import Competences from "./pages/Competences/Competences";
import AboutMe from "./pages/About/AboutMe";
import ContactForm from "./components/ContactForm/ContactForm";
import "./App.css";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <Router>
      <div className="app">
        <FloatingMenu />

        <Navbar setShowContactModal={setShowContactModal} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Competences detailedView={true} />} />
          <Route
            path="/about"
            element={<AboutMe setShowContactModal={setShowContactModal} />}
          />
          <Route
            path="/contact"
            element={<ContactForm setShowContactModal={setShowContactModal} />}
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer setShowContactModal={setShowContactModal} />

        {showContactModal && (
          <div className="contact-form-overlay">
            <ContactForm setShowContactModal={setShowContactModal} />
          </div>
        )}

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
