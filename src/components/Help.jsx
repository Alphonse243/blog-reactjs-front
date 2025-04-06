import React from 'react';
import { FaQuestionCircle, FaSearch } from 'react-icons/fa';
import '../styles/animations.css';

const Help = () => {
  const faqs = [
    {
      question: "Comment créer un compte ?",
      answer: "Pour créer un compte, cliquez sur le bouton 'Connexion' en haut à droite, puis sur 'S'inscrire'..."
    },
    {
      question: "Comment publier un article ?",
      answer: "Une fois connecté, rendez-vous sur votre tableau de bord et cliquez sur 'Nouvel article'..."
    },
    {
      question: "Comment modifier mon profil ?",
      answer: "Accédez à votre profil en cliquant sur votre avatar, puis sur 'Modifier le profil'..."
    }
  ];

  return (
    <div className="bg-light min-vh-100">
      <div className="bg-primary bg-gradient text-white py-5 mb-5">
        <div className="container text-center fade-in">
          <h1 className="display-4 fw-bold mb-3">Centre d'aide</h1>
          <p className="lead mb-4">Comment pouvons-nous vous aider ?</p>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control form-control-lg" 
                  placeholder="Rechercher une réponse..."
                />
                <button className="btn btn-light">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        {/* FAQ Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <h2 className="h4 mb-4 slide-in-right">Questions fréquentes</h2>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div 
                  className={`accordion-item border-0 mb-3 shadow-sm reveal delay-${index + 1} hover-lift`} 
                  key={index}
                >
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target={`#faq${index}`}
                    >
                      <FaQuestionCircle className="text-primary me-2" />
                      {faq.question}
                    </button>
                  </h3>
                  <div
                    id={`faq${index}`}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body text-secondary">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Support Section */}
        <div className="row justify-content-center text-center reveal">
          <div className="col-lg-6">
            <h2 className="h4 mb-4">Besoin de plus d'aide ?</h2>
            <p className="text-secondary mb-4">
              Notre équipe de support est disponible 24/7 pour vous aider
            </p>
            <a href="/contact" className="btn btn-primary">
              Contacter le support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
