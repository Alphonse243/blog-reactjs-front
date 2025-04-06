// Import des dépendances nécessaires
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
// Import des composants
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';
import CategoryPage from './components/CategoryPage';
import Register from './components/Register';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Help from './components/Help';
import { isAuthenticated } from './services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from './contexts/ThemeContext';

/**
 * Fonction pour charger les scripts Bootstrap dynamiquement
 * Cette fonction est appelée au montage du composant App
 */
const loadBootstrapScripts = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
  document.body.appendChild(script);
};

/**
 * Composant de route protégée
 * Vérifie si l'utilisateur est authentifié avant d'afficher le contenu
 */
const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

/**
 * Composant principal de l'application
 * Gère le routage et la structure globale de l'application
 */
const App = () => {
  // Effet pour charger Bootstrap au montage du composant
  React.useEffect(() => {
    loadBootstrapScripts();
  }, []);

  // Définition des routes de l'application
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Route de la page d'accueil */}
          <Route path="/" element={<Home />} />
          
          {/* Routes d'authentification */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Routes de contenu */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* Routes des catégories */}
          <Route path="/actualites" element={<CategoryPage />}>
            <Route path=":category" element={<CategoryPage />} />
          </Route>
          
          {/* Routes supplémentaires */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          
          {/* Page 404 pour les routes non trouvées */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
