import React, { useEffect } from 'react';
import { FaUsers, FaNewspaper, FaCode } from 'react-icons/fa';
import '../styles/animations.css';

const About = () => {
  const stats = [
    { number: "10K+", label: "Lecteurs", icon: <FaUsers /> },
    { number: "500+", label: "Articles", icon: <FaNewspaper /> },
    { number: "50+", label: "Contributeurs", icon: <FaCode /> },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-light min-vh-100 ">
      {/* Hero Section */}
      <div className="bg-primary bg-gradient text-white py-5 mb-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3 fade-in">À propos de nous</h1>
          <p className="lead mb-0 fade-in delay-1 typing-text">
            Découvrez notre histoire et notre mission
          </p>
        </div>
      </div>

      <div className="container py-5">
        {/* Notre Histoire */}
        <div className="row mb-5 reveal">
          <div className="col-lg-6">
            <h2 className="h3 mb-4">Notre Histoire</h2>
            <p className="lead text-secondary">
              Fondé en 2024, MonBlog est né de la passion pour le partage de connaissances et d'expériences.
            </p>
            <p className="text-secondary">
              Notre mission est de fournir un contenu de qualité et accessible à tous dans divers domaines.
            </p>
          </div>
          <div className="col-lg-6">
            <img 
              src="https://picsum.photos/id/1/600/400" 
              alt="Notre équipe" 
              className="img-fluid rounded shadow-sm"
            />
          </div>
        </div>

        {/* Statistiques */}
        <div className="row g-4 py-5">
          {stats.map((stat, index) => (
            <div key={index} className={`col-md-4 text-center reveal delay-${index + 1}`}>
              <div className="p-4 bg-white rounded shadow-sm">
                <div className="display-4 text-primary mb-3">{stat.icon}</div>
                <h3 className="h2 mb-2">{stat.number}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Notre Équipe */}
        <div className="text-center mt-5">
          <h2 className="h3 mb-4 reveal">Notre Équipe</h2>
          <div className="row g-4">
            {[1, 2, 3].map((member, index) => (
              <div key={member} className={`col-lg-4 reveal delay-${index + 1}`}>
                <div className="card border-0 shadow-sm hover-lift">
                  <img 
                    src={`https://picsum.photos/id/${member + 10}/300/300`} 
                    className="card-img-top"
                    alt="Team member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Membre de l'équipe {member}</h5>
                    <p className="card-text text-muted">Position</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
