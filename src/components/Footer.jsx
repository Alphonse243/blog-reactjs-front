import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">À propos</h5>
            <p className="text-muted">Découvrez l'actualité et les dernières tendances à travers nos articles soigneusement sélectionnés.</p>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Catégories</h5>
            <ul className="list-unstyled">
              <li><Link to="/actualites">Actualités</Link></li>
              <li><Link to="/technologie">Technologie</Link></li>
              <li><Link to="/sport">Sport</Link></li>
              <li><Link to="/culture">Culture</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 mb-4">
            <h5 className="text-white mb-3">Suivez-nous</h5>
            <div className="social-links">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-center text-muted mb-0">
            © {new Date().getFullYear()} MonBlog. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
