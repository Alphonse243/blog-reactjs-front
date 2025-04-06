import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: 'Accueil', path: '/', icon: 'FaHome' },
    { name: 'Actualités', path: '/actualites', icon: 'FaNewspaper' },
    { name: 'Recherche', path: '/search', icon: 'FaSearch' },
    { name: 'Contact', path: '/contact', icon: 'FaEnvelope' },
    { name: 'À propos', path: '/about', icon: 'FaInfoCircle' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="navbar-container">
      <div className={`bg-black text-white py-1 top-nav ${scrolled ? 'shadow' : ''}`}>
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
          <button 
            className="navbar-toggler border-0" 
            type="button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <div className={`navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
            <div className="mobile-header d-lg-none">
              <div className="d-flex justify-content-between align-items-center p-3">
                <h5 className="mb-0">Menu</h5>
                <button 
                  className="btn-close" 
                  onClick={closeMenu}
                  aria-label="Close menu"
                />
              </div>
              <hr className="my-0" />
            </div>

            <ul className="navbar-nav me-auto">
              {menuItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className="nav-link" 
                    onClick={() => closeMenu()}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
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
        <div className="search-container container-fluid bg-light py-3 border-bottom">
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

      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={closeMenu}
      />
    </div>
  );
};

export default Navbar;
