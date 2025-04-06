import React, { useState } from 'react';
import { FaUser, FaEdit, FaBookmark, FaHeart, FaComment } from 'react-icons/fa';
import '../styles/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [userProfile] = useState({
    name: 'John Doe',
    bio: 'Passionné de technologie et d\'innovation',
    avatar: 'https://picsum.photos/id/1005/200/200',
    stats: {
      posts: 23,
      followers: 1240,
      following: 360
    }
  });

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <div className="avatar-container">
                <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
                <button className="edit-avatar-btn">
                  <FaEdit />
                </button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="d-flex align-items-center mb-3">
                <h2 className="mb-0 me-3">{userProfile.name}</h2>
                <button className="btn btn-outline-primary btn-sm">
                  <FaEdit className="me-2" />
                  Éditer le profil
                </button>
              </div>
              <p className="text-muted mb-3">{userProfile.bio}</p>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-value">{userProfile.stats.posts}</span>
                  <span className="stat-label">Articles</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{userProfile.stats.followers}</span>
                  <span className="stat-label">Abonnés</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">{userProfile.stats.following}</span>
                  <span className="stat-label">Abonnements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-4">
        <ul className="nav nav-tabs profile-tabs">
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`}
              onClick={() => setActiveTab('posts')}
            >
              Mes articles
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'saved' ? 'active' : ''}`}
              onClick={() => setActiveTab('saved')}
            >
              Sauvegardés
            </button>
          </li>
          <li className="nav-item">
            <button 
              className={`nav-link ${activeTab === 'likes' ? 'active' : ''}`}
              onClick={() => setActiveTab('likes')}
            >
              J'aime
            </button>
          </li>
        </ul>

        <div className="tab-content mt-4">
          {/* Contenu des onglets sera ajouté ici */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
