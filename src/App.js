import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar';
import PostDetail from './components/PostDetail';
import Footer from './components/Footer';
import { isAuthenticated } from './services/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

// Ajout des scripts Bootstrap
const loadBootstrapScripts = () => {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js';
  document.body.appendChild(script);
};

const ProtectedRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
};

const App = () => {
  React.useEffect(() => {
    loadBootstrapScripts();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<div>Page protégée</div>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
