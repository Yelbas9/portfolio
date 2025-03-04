import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm({ setView, setShowContactModal }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => {
        alert("Message envoyé avec succès !");
        setShowContactModal(false);
        setView("home");
      })
      .catch((error) => alert("Erreur lors de l'envoi : " + error));
  };

  const closeOnOutsideClick = (e) => {
    if (e.target.classList.contains("contact-form-overlay")) {
      setShowContactModal(false);
    }
  };

  return (
    <div className="contact-form-overlay" onClick={closeOnOutsideClick}>
      <div className="contact-form-container">
        <button
          className="close-button"
          onClick={() => setShowContactModal(false)}
        >
          ✖
        </button>

        <h2>Me Contacter</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
