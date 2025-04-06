import React, { useState } from 'react';
import { FaUser, FaEdit, FaBookmark, FaHeart, FaComment } from 'react-icons/fa';
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
  );
};

export default Profile;
