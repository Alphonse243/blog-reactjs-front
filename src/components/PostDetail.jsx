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
    <div>
      <div className="position-relative">
        <div 
          className="bg-dark"
          style={{
            height: '60vh',
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50">
            <div className="container h-100">
              <div className="row h-100 align-items-end pb-5">
                <div className="col-lg-8">
                  <span className="badge bg-primary mb-2">{post.category}</span>
                  <h1 className="text-white display-4 fw-bold">{post.title}</h1>
                  <div className="d-flex text-white opacity-75 mt-3">
                    <div className="me-3">
                      <FaUser className="me-2" />{post.author}
                    </div>
                    <div>
                      <FaRegClock className="me-2" />{post.date}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <article className="fs-5 text-secondary lh-lg mb-5">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </article>

            <div className="d-flex gap-3 py-4 border-top">
              <button className="btn btn-outline-primary">
                <FaRegHeart className="me-2" />{post.likes} J'aime
              </button>
              <button className="btn btn-outline-secondary">
                <FaRegComment className="me-2" />{post.comments.length} Commentaires
              </button>
              <button className="btn btn-outline-success ms-auto">
                <FaShare className="me-2" />Partager
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
              <Link to={`/post/${post.id}`} className="card">
                <div className="card-img-top position-relative">
                  <img src={post.image} alt={post.title} className="img-fluid" />
                  <div className="badge bg-secondary position-absolute top-0 start-0 m-2">{post.category}</div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
