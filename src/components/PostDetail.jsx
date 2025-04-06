import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaRegClock, FaRegHeart, FaRegComment, FaShare, FaComment, FaReply } from 'react-icons/fa';
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

  // Données de démonstration pour les commentaires
  const [comments] = useState([
    {
      id: 1,
      author: "Marie Laurent",
      avatar: "https://picsum.photos/id/1011/40/40",
      content: "Excellent article ! Les points abordés sont très pertinents.",
      date: "2024-01-15",
      likes: 12,
      responses: [
        {
          id: 11,
          author: "Jean Dupont",
          avatar: "https://picsum.photos/id/1012/40/40",
          content: "Je suis tout à fait d'accord avec votre analyse.",
          date: "2024-01-15",
          likes: 3
        }
      ]
    },
    {
      id: 2,
      author: "Thomas Martin",
      avatar: "https://picsum.photos/id/1013/40/40",
      content: "Merci pour ces informations détaillées.",
      date: "2024-01-14",
      likes: 8,
      responses: []
    }
  ]);

  // État pour le formulaire de commentaire
  const [newComment, setNewComment] = useState('');

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Simulation d'ajout de commentaire
    setNewComment('');
  };

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

      {/* Section Commentaires */}
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex align-items-center mb-4">
                  <FaComment className="text-primary me-2 fs-4" />
                  <h3 className="card-title h4 mb-0">Commentaires ({comments.length})</h3>
                </div>

                {/* Formulaire de commentaire */}
                <div className="comment-form mb-4">
                  <form onSubmit={handleSubmitComment}>
                    <div className="d-flex gap-3">
                      <div className="flex-shrink-0">
                        <img 
                          src="https://picsum.photos/id/1015/40/40" 
                          className="rounded-circle border border-2 border-primary p-1"
                          alt="User" 
                          width="48"
                          height="48"
                        />
                      </div>
                      <div className="flex-grow-1">
                        <div className="form-floating mb-2">
                          <textarea
                            className="form-control bg-light"
                            placeholder="Votre commentaire"
                            id="commentText"
                            rows="3"
                            style={{ height: '100px', resize: 'none' }}
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                          ></textarea>
                          <label htmlFor="commentText" className="text-muted">
                            Partagez votre opinion...
                          </label>
                        </div>
                        <button type="submit" className="btn btn-primary rounded-pill px-4">
                          <FaComment className="me-2" />
                          Publier
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Liste des commentaires */}
                {comments.length > 0 ? (
                  <div className="comments-list">
                    {comments.map((comment, index) => (
                      <div key={comment.id} 
                        className="comment-thread mb-4"
                        style={{ '--animation-order': index }}
                      >
                        {/* Commentaire principal */}
                        <div className="comment-item d-flex gap-3 fade-in-up">
                          <div className="flex-shrink-0">
                            <img 
                              src={comment.avatar} 
                              className="rounded-circle border border-2 border-light shadow-sm"
                              alt={comment.author} 
                              width="48"
                              height="48"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <div className="p-3 bg-light rounded-3">
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className="mb-0 fw-bold">{comment.author}</h6>
                                <small className="text-muted">{comment.date}</small>
                              </div>
                              <p className="mb-2">{comment.content}</p>
                              <div className="d-flex gap-3">
                                <button className="btn btn-sm btn-link text-decoration-none p-0">
                                  <FaRegHeart className="me-1" />
                                  {comment.likes}
                                </button>
                                <button className="btn btn-sm btn-link text-decoration-none p-0">
                                  <FaReply className="me-1" />
                                  Répondre
                                </button>
                              </div>
                            </div>

                            {/* Réponses aux commentaires */}
                            {comment.responses?.map((response) => (
                              <div key={response.id} className="ms-4 mt-3 fade-in-left">
                                <div className="d-flex gap-3">
                                  <div className="flex-shrink-0">
                                    <img 
                                      src={response.avatar} 
                                      className="rounded-circle border border-2 border-light shadow-sm"
                                      alt={response.author} 
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="flex-grow-1">
                                    <div className="p-3 bg-light rounded-3">
                                      <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h6 className="mb-0 fw-bold">{response.author}</h6>
                                        <small className="text-muted">{response.date}</small>
                                      </div>
                                      <p className="mb-2">{response.content}</p>
                                      <button className="btn btn-sm btn-link text-decoration-none p-0">
                                        <FaRegHeart className="me-1" />
                                        {response.likes}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-muted py-5">
                    <FaComment className="fs-1 mb-3 opacity-50" />
                    <p>Soyez le premier à commenter cet article !</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
