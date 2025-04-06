import React, { useState } from 'react';
// Import des icônes nécessaires
import { FaUserEdit, FaMapMarkerAlt, FaLink, FaRegHeart, FaRegComment, FaRegBookmark, FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import '../styles/Profile.css';

/**
 * Composant Profile - Page de profil utilisateur
 * Affiche les informations de l'utilisateur, ses réalisations et ses compétences
 */
const Profile = () => {
  // État pour gérer l'onglet actif
  const [activeTab, setActiveTab] = useState('posts');

  // Données de démonstration pour les publications
  const mockPosts = [
    {
      id: 1,
      title: "L'avenir de l'Intelligence Artificielle",
      image: "https://picsum.photos/id/1/600/400",
      date: "20 Dec 2023",
      likes: 45,
      comments: 12
    },
    {
      id: 2,
      title: "Guide complet du développement web",
      image: "https://picsum.photos/id/2/600/400",
      date: "18 Dec 2023",
      likes: 38,
      comments: 8
    },
    {
      id: 3,
      title: "Les meilleures pratiques en cybersécurité",
      image: "https://picsum.photos/id/3/600/400",
      date: "15 Dec 2023",
      likes: 52,
      comments: 15
    }
  ];

  // Configuration des badges de réalisations
  const achievements = [
    { icon: <FaTrophy />, title: 'Top Contributeur', desc: '2023' },
    { icon: <FaMedal />, title: 'Expert Vérifié', desc: '50+ articles' },
    { icon: <FaStar />, title: 'Influence', desc: '1000+ followers' }
  ];

  // Liste des compétences de l'utilisateur
  const skills = [
    'JavaScript', 'React', 'Node.js', 'UX Design', 
    'Python', 'Data Science', 'Machine Learning'
  ];

  return (
    <div className="profile-container">
      {/* Section héro avec fond animé */}
      <div className="profile-hero">
        <div className="hero-background">
          <div className="animated-gradient"></div>
        </div>

        {/* Carte de profil avec effet de verre */}
        <div className="profile-card">
          {/* Avatar et bouton d'édition */}
          <div className="profile-avatar-container">
            <img src="https://picsum.photos/id/1005/200/200" alt="Profile" className="profile-avatar" />
            <button className="edit-avatar-button">
              <FaUserEdit />
            </button>
          </div>

          {/* Informations principales du profil */}
          <div className="profile-info">
            <h1 className="profile-name">John Doe</h1>
            <p className="profile-bio">Développeur Full Stack & Passionné de Tech</p>
            <div className="profile-details">
              <span><FaMapMarkerAlt /> Paris, France</span>
              <span><FaLink /> website.com</span>
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">1.2k</span>
                <span className="stat-label">Posts</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">15.3k</span>
                <span className="stat-label">Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">892</span>
                <span className="stat-label">Following</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Profile;
