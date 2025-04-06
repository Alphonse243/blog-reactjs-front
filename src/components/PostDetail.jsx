import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaRegClock, FaRegHeart, FaRegComment, FaShare } from 'react-icons/fa';
import '../styles/PostDetail.css';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: id,
    title: "Les dernières avancées en Intelligence Artificielle",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    
    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
    image: `https://picsum.photos/id/${id}/1200/600`,
    author: "John Doe",
    date: "2023-12-20",
    category: "Technologie",
    likes: 156,
    comments: []
  });

  const [relatedPosts, setRelatedPosts] = useState([
    {
      id: 1,
      title: "Intelligence Artificielle et Santé",
      image: "https://picsum.photos/id/21/600/400",
      category: "Technologie"
    },
    {
      id: 2,
      title: "Le Futur des Interfaces Utilisateur",
      image: "https://picsum.photos/id/22/600/400",
      category: "Technologie"
    },
    {
      id: 3,
      title: "Cybersécurité en 2024",
      image: "https://picsum.photos/id/23/600/400",
      category: "Technologie"
    }
  ]);

  return (
    <div className="post-detail-container">
      <div className="post-hero" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="overlay">
          <div className="container">
            <span className="category-badge">{post.category}</span>
            <h1 className="post-title">{post.title}</h1>
            <div className="post-meta">
              <div className="author">
                <FaUser className="icon" />
                <span>{post.author}</span>
              </div>
              <div className="date">
                <FaRegClock className="icon" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <article className="post-content">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            <div className="post-actions">
              <button className="action-btn">
                <FaRegHeart className="icon" />
                <span>{post.likes} J'aime</span>
              </button>
              <button className="action-btn">
                <FaRegComment className="icon" />
                <span>{post.comments.length} Commentaires</span>
              </button>
              <button className="action-btn">
                <FaShare className="icon" />
                <span>Partager</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <h3 className="text-center mb-4">Articles similaires</h3>
        <div className="row">
          {relatedPosts.map(post => (
            <div key={post.id} className="col-md-4 mb-4">
              <Link to={`/post/${post.id}`} className="related-post-card">
                <div className="post-image-wrapper">
                  <img src={post.image} alt={post.title} />
                  <div className="category-badge">{post.category}</div>
                </div>
                <h4>{post.title}</h4>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
