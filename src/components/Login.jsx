import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
import { login } from '../services/auth';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate('/', { replace: true });
    } catch (err) {
      setError('Échec de la connexion');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div className="auth-header">
            <FaUserCircle className="auth-icon" />
            <h2>Connexion</h2>
            <p className="text-muted">Connectez-vous pour accéder à votre compte</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <div className="alert alert-danger">{error}</div>}
            
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

            <button type="submit" className="btn btn-primary w-100 py-2">
              Se connecter
            </button>

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
