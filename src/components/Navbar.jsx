import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <div className="bg-black text-white py-1">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link to="/" className="text-white text-decoration-none">
              <h1 className="h4 m-0">MonBlog</h1>
            </Link>
          </div>
          <div className="d-flex align-items-center">
            {isAuthenticated() ? (
              <div className="dropdown">
                <button className="btn btn-link text-white dropdown-toggle" type="button" data-bs-toggle="dropdown">
                  <FaUserCircle className="me-1" /> Mon Compte
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile">Profil</Link></li>
                  <li><Link className="dropdown-item" to="/settings">Paramètres</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item" onClick={handleLogout}>Déconnexion</button></li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-light btn-sm">Connexion</Link>
            )}
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <FaBars />
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/actualites">Actualités</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sport">Sport</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/culture">Culture</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technologie">Technologie</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Plus
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sante">Santé</Link></li>
                  <li><Link className="dropdown-item" to="/economie">Économie</Link></li>
                </ul>
              </li>
            </ul>
            
            <div className="d-flex align-items-center">
              <button 
                className="btn btn-link text-dark" 
                onClick={() => setShowSearch(!showSearch)}
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showSearch && (
        <div className="container-fluid bg-light py-3 border-bottom">
          <div className="container">
            <div className="input-group">
              <input 
                type="search" 
                className="form-control" 
                placeholder="Rechercher..." 
                aria-label="Rechercher"
              />
              <button className="btn btn-outline-secondary" type="button">
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
