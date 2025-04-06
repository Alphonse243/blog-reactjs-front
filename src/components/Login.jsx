// Import des dépendances nécessaires de React et React Router
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Import des icônes de React Icons
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
// Import des services d'authentification et des styles
import { login } from '../services/auth';
import '../styles/Login.css';

// Définition du composant fonctionnel Login
const Login = () => {
  // Hook useNavigate pour la navigation programmatique
  const navigate = useNavigate();

  // State local pour gérer les données du formulaire
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  // State pour gérer les messages d'erreur
  const [error, setError] = useState('');

  // Gestionnaire de changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target; // Déstructuration de l'événement
    setCredentials(prev => ({
      ...prev,           // Spread operator pour conserver les valeurs existantes
      [name]: value     // Mise à jour dynamique de la propriété
    }));
  };

  // Gestionnaire de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du formulaire
    try {
      await login(credentials); // Appel de la fonction de connexion
      navigate('/', { replace: true }); // Redirection vers la page d'accueil
    } catch (err) {
      setError('Échec de la connexion'); // Gestion des erreurs
    }
  };

  // Rendu du composant
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-inner">
          {/* En-tête du formulaire */}
          <div className="auth-header">
            <FaUserCircle className="auth-icon" />
            <h2>Connexion</h2>
            <p className="text-muted">Connectez-vous pour accéder à votre compte</p>
          </div>

          {/* Formulaire de connexion */}
          <form onSubmit={handleSubmit}>
            {/* Affichage conditionnel du message d'erreur */}
            {error && <div className="alert alert-danger">{error}</div>}
            
            {/* Champ Email avec icône */}
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="nom@exemple.com"
                value={credentials.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">
                <FaEnvelope className="me-2" />
                Email
              </label>
            </div>

            {/* Champ Mot de passe avec icône */}
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Mot de passe"
                value={credentials.password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">
                <FaLock className="me-2" />
                Mot de passe
              </label>
            </div>

            {/* Options supplémentaires */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">
                  Se souvenir de moi
                </label>
              </div>
              <Link to="/forgot-password" className="text-primary text-decoration-none">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton de soumission */}
            <button type="submit" className="btn btn-primary w-100 py-2">
              Se connecter
            </button>

            {/* Lien vers l'inscription */}
            <p className="text-center mt-3">
              Pas encore de compte ?{' '}
              <Link to="/register" className="text-primary text-decoration-none">
                S'inscrire
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
