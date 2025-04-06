import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaUser, FaRegClock, FaRegHeart, FaRegComment } from 'react-icons/fa';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
  const { category } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simuler un appel API pour obtenir les posts par catégorie
    const categoryPosts = Array(6).fill(null).map((_, index) => ({
      id: index + 1,
      title: `Article ${index + 1} sur ${category}`,
      excerpt: `Découvrez les dernières actualités concernant ${category}...`,
      image: `https://picsum.photos/id/${index + 30}/600/400`,
      author: "Auteur Test",
      date: "2023-12-20",
      category: category,
      likes: Math.floor(Math.random() * 200) + 50,
      comments: Math.floor(Math.random() * 50) + 10
    }));
    setPosts(categoryPosts);
  }, [category]);

  return (
    <div className="bg-light">
      <div className="bg-primary bg-gradient py-5 mb-4">
        <div className="container text-center text-white">
          <h1 className="display-4 mb-2">{category}</h1>
          <p className="lead mb-0">Explorez nos articles sur {category}</p>
        </div>
      </div>

      <div className="container py-4">
        <div className="row g-4">
          {posts.map((post) => (
            <div key={post.id} className="col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <Link to={`/post/${post.id}`} className="card-link">
                  <div className="row g-0">
                    <div className="col-md-5">
                      <div className="category-image-wrapper">
                        <img src={post.image} alt={post.title} />
                      </div>
                    </div>
                    <div className="col-md-7">
                      <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.excerpt}</p>
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
                        <div className="post-stats">
                          <span><FaRegHeart /> {post.likes}</span>
                          <span><FaRegComment /> {post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
