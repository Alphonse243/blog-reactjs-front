import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaEdit, FaBookmark, FaHeart, FaComment, FaMapMarkerAlt, FaGlobe, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');

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

  const userProfile = {
    name: 'John Doe',
    bio: 'Passionné de technologie et d\'innovation',
    avatar: 'https://picsum.photos/id/1005/200/200',
    stats: {
      posts: 23,
      followers: 1240,
      following: 360
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-cover">
          <img src="https://picsum.photos/id/1039/1920/400" alt="cover" className="cover-image" />
        </div>
        <div className="container position-relative">
          <div className="profile-info-wrapper">
            <div className="row">
              <div className="col-lg-3">
                <div className="avatar-container">
                  <img src={userProfile.avatar} alt="Profile" className="profile-avatar" />
                  <button className="edit-avatar-btn btn btn-primary btn-sm">
                    <FaEdit />
                  </button>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="profile-info">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1 className="profile-name">{userProfile.name}</h1>
                    <button className="btn btn-outline-light">
                      <FaEdit className="me-2" />
                      Éditer le profil
                    </button>
                  </div>
                  <p className="profile-bio mb-3">{userProfile.bio}</p>
                  <div className="profile-details">
                    <span><FaMapMarkerAlt /> Paris, France</span>
                    <span><FaGlobe /> www.website.com</span>
                  </div>
                  <div className="profile-social mt-3">
                    <a href="#" className="btn btn-outline-light btn-sm me-2">
                      <FaTwitter className="me-1" /> Twitter
                    </a>
                    <a href="#" className="btn btn-outline-light btn-sm">
                      <FaLinkedin className="me-1" /> LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

      <div className="container py-4">
        <div className="profile-content">
          <div className="row">
            <div className="col-lg-3">
              <div className="profile-sidebar">
                <h5 className="sidebar-title">À propos</h5>
                <div className="sidebar-content">
                  <p>Membre depuis: Janvier 2023</p>
                  <p>Articles publiés: 23</p>
                  <p>Contributions: 156</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <ul className="nav nav-tabs profile-tabs">
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'posts' ? 'active' : ''}`}
                    onClick={() => setActiveTab('posts')}
                  >
                    <FaUser className="me-2" />
                    Mes articles (23)
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'saved' ? 'active' : ''}`}
                    onClick={() => setActiveTab('saved')}
                  >
                    <FaBookmark className="me-2" />
                    Sauvegardés (15)
                  </button>
                </li>
                <li className="nav-item">
                  <button 
                    className={`nav-link ${activeTab === 'likes' ? 'active' : ''}`}
                    onClick={() => setActiveTab('likes')}
                  >
                    <FaHeart className="me-2" />
                    J'aime (45)
                  </button>
                </li>
              </ul>

              <div className="tab-content mt-4">
                <div className="row g-4">
                  {mockPosts.map(post => (
                    <div key={post.id} className="col-md-4">
                      <div className="profile-post-card">
                        <div className="post-image">
                          <img src={post.image} alt={post.title} />
                        </div>
                        <div className="post-info p-3">
                          <h3 className="post-title">{post.title}</h3>
                          <div className="post-meta">
                            <span className="date">{post.date}</span>
                            <div className="stats">
                              <span><FaHeart /> {post.likes}</span>
                              <span><FaComment /> {post.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
