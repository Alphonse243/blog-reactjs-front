import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="jumbotron">
        <h1 className="display-4">Bienvenue sur notre site</h1>
        <p className="lead">Découvrez nos services et fonctionnalités.</p>
        <hr className="my-4" />
        <p>Connectez-vous pour accéder à toutes les fonctionnalités.</p>
        <Link to="/login" className="btn btn-primary btn-lg">Se connecter</Link>
      </div>
    </div>
  );
};

export default Home;
