import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/animations.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-light min-vh-100">
      <div className="bg-primary bg-gradient text-white py-5 mb-5">
        <div className="container text-center fade-in">
          <h1 className="display-4 fw-bold mb-3">Contactez-nous</h1>
          <p className="lead mb-0">Nous sommes là pour vous aider</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="row g-4 mb-5">
          {/* Informations de contact avec animations */}
          <div className="col-md-4 slide-in-right delay-1">
            <div className="card border-0 shadow-sm h-100 hover-lift">
              <div className="card-body text-center">
                <FaEnvelope className="text-primary fs-1 mb-3" />
                <h3 className="h5 mb-2">Email</h3>
                <p className="text-muted mb-0">contact@monblog.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 slide-in-right delay-2">
            <div className="card border-0 shadow-sm h-100 hover-lift">
              <div className="card-body text-center">
                <FaPhone className="text-primary fs-1 mb-3" />
                <h3 className="h5 mb-2">Téléphone</h3>
                <p className="text-muted mb-0">+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 slide-in-right delay-3">
            <div className="card border-0 shadow-sm h-100 hover-lift">
              <div className="card-body text-center">
                <FaMapMarkerAlt className="text-primary fs-1 mb-3" />
                <h3 className="h5 mb-2">Adresse</h3>
                <p className="text-muted mb-0">123 Rue du Blog, Paris</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de contact avec animation */}
        <div className="row justify-content-center reveal">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm scale-in">
              <div className="card-body p-4">
                <h2 className="h4 mb-4">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nom complet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Sujet</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <FaPaperPlane className="me-2" />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
