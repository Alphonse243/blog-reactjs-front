import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">À propos</h5>
            <p className="text-secondary">
              Découvrez l'actualité et les dernières tendances à travers nos articles soigneusement sélectionnés.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-secondary hover-light fs-4">
                <FaFacebook />
              </a>
              <a href="#" className="text-secondary hover-light fs-4">
                <FaTwitter />
              </a>
              <a href="#" className="text-secondary hover-light fs-4">
                <FaInstagram />
              </a>
              <a href="#" className="text-secondary hover-light fs-4">
                <FaLinkedin />
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Catégories</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/actualites" className="text-secondary text-decoration-none hover-light">
                  Actualités
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/technologie" className="text-secondary text-decoration-none hover-light">
                  Technologie
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/sport" className="text-secondary text-decoration-none hover-light">
                  Sport
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/culture" className="text-secondary text-decoration-none hover-light">
                  Culture
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3">Newsletter</h5>
            <p className="text-secondary">Inscrivez-vous pour recevoir nos dernières actualités</p>
            <form className="mt-3">
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Votre email" 
                  aria-label="Votre email"
                />
                <button className="btn btn-primary" type="submit">S'inscrire</button>
              </div>
            </form>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-secondary mb-0">
              © {new Date().getFullYear()} MonBlog. Tous droits réservés.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="text-secondary mb-0">
              Fait avec <FaHeart className="text-danger mx-1" /> par notre équipe
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
