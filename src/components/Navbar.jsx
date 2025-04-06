import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MonSite</Link>
        <div className="navbar-nav ms-auto">
          {isAuthenticated() ? (
            <>
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
              <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                Déconnexion
              </button>
            </>
          ) : (
            <Link className="nav-link" to="/login">Connexion</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
