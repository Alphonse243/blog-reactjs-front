import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">Page non trouvée</h2>
        <p className="error-message">
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="action-buttons">
          <Link to="/" className="btn btn-primary btn-lg me-3">
            <FaHome className="me-2" />
            Retour à l'accueil
          </Link>
          <button 
            className="btn btn-outline-primary  btn-lg"
            onClick={() => window.history.back()}
          >
            <FaSearch className="me-2" />
            Page précédente
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
