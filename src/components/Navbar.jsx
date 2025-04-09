import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Ajout de useNavigate
import { isAuthenticated, logout } from '../services/auth';
import { FaSearch, FaUserCircle, FaBars, FaTimes, FaCog, FaSignOutAlt, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import '../styles/Navbar.css';

/**
 * Composant Navbar - Barre de navigation principale
 * Gère la navigation, le menu mobile et la recherche
 */
const Navbar = () => {
  const navigate = useNavigate(); // Initialisation du hook
  const { darkMode, toggleDarkMode } = useTheme();

  // État pour la gestion du menu mobile et de la recherche
  const [showSearch, setShowSearch] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // Ajout d'un état pour la recherche

  /**
   * Liste des éléments du menu principal
   * Chaque élément contient un nom, un chemin et une icône
   */
  const menuItems = [
    { name: 'Accueil', path: '/', icon: 'FaHome' },
    { name: 'Actualités', path: '/actualites', icon: 'FaNewspaper' },
    { name: 'Recherche', path: '/search', icon: 'FaSearch' },
    { name: 'Contact', path: '/contact', icon: 'FaEnvelope' },
    { name: 'À propos', path: '/about', icon: 'FaInfoCircle' },
    { name: 'Profile', path: '/profile', icon: 'FaUserCircle' },
    { name: 'Admin', path: '/dashboard', icon: 'FaUserCircle' }
  ];

  const userMenuItems = [
    { name: 'Mon Profil', path: '/profile', icon: <FaUserCircle /> },
    { name: 'Paramètres', path: '/settings', icon: <FaCog /> },
  ];

  /**
   * Effet pour gérer le scroll
   * Ajoute une ombre à la navbar lors du défilement
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Gestionnaire pour le menu mobile
   * Bascule l'état du menu et bloque/débloque le scroll
   */
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

  // Fonction de gestion de la recherche
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <div className="navbar-container">
      <div className={`bg-${darkMode ? 'dark' : 'black'} text-white py-1 top-nav ${scrolled ? 'shadow' : ''}`}>
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link to="/" className="text-white text-decoration-none">
              <h1 className="h4 m-0">Blog en Reactjs</h1>
            </Link>
          </div>
          <div className="d-flex align-items-center gap-3">
            <button 
              className="btn btn-link text-white p-0" 
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            {isAuthenticated() ? (
              <div className="dropdown">
                <button 
                  className="btn btn-link text-white dropdown-toggle d-flex align-items-center" 
                  type="button" 
                  data-bs-toggle="dropdown"
                >
                  <img 
                    src="https://picsum.photos/id/1005/32/32" 
                    alt="Profile" 
                    className="rounded-circle me-2" 
                    width="32" 
                    height="32" 
                  />
                  <span>Mon Compte</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  {userMenuItems.map((item) => (
                    <li key={item.path}>
                      <Link className="dropdown-item d-flex align-items-center" to={item.path}>
                        {item.icon}
                        <span className="ms-2">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item d-flex align-items-center text-danger" 
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt />
                      <span className="ms-2">Déconnexion</span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn btn-outline-light btn-sm">Connexion</Link>
            )}
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'}`}>
        <div className="container">
          <button 
            className={`navbar-toggler border-0 ${darkMode ? 'text-light' : 'text-dark'}`}
            type="button" 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? 
              <FaTimes className={darkMode ? 'text-light' : 'text-dark'} /> : 
              <FaBars className={darkMode ? 'text-light' : 'text-dark'} />
            }
          </button>
          
          <div className={`navbar-collapse mobile-menu ${isMobileMenuOpen ? 'show' : ''} ${darkMode ? 'bg-dark' : 'bg-white'}`}>
            <div className="d-flex flex-column h-100">
              <div className={`mobile-header d-lg-none ${darkMode ? 'border-bottom border-secondary' : ''}`}>
                <div className="d-flex justify-content-between align-items-center p-3">
                  <h5 className={`mb-0 ${darkMode ? 'text-light' : ''}`}>Menu</h5>
                  <button 
                    className={`btn-close ${darkMode ? 'btn-close-white' : ''}`}
                    onClick={closeMenu}
                    aria-label="Close menu"
                  />
                </div>
              </div>

              <ul className="navbar-nav me-auto">
                {menuItems.map((item) => (
                  <li key={item.path} className="nav-item">
                    <Link 
                      to={item.path} 
                      className={`nav-link px-3 py-2 ${darkMode ? 'text-light hover-dark' : ''}`}
                      onClick={() => closeMenu()}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Nouvelle barre de recherche intégrée */}
              <form className="d-flex" onSubmit={handleSearch}>
                <div className="input-group">
                  <input 
                    type="search"
                    className={`form-control form-control-sm ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Rechercher"
                  />
                  <button 
                    className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-primary'} btn-sm`}
                    type="submit"
                  >
                    <FaSearch />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </nav>

      <div 
        className={`mobile-overlay ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={closeMenu}
        style={{ backgroundColor: darkMode ? 'rgba(0,0,0,0.7)' : 'rgba(0,0,0,0.5)' }}
      />
    </div>
  );
};

export default Navbar;
