import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaTags, FaRegHeart, FaRegComment, FaUser, FaRegClock } from 'react-icons/fa';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    sortBy: 'recent'
  });

  // Simulated search results
  const [results] = useState([
    {
      id: 1,
      title: "Les dernières tendances en développement web",
      excerpt: "Découvrez les technologies qui façonnent le web moderne...",
      image: "https://picsum.photos/id/1/600/400",
      category: "Technologie",
      author: "John Doe",
      date: "2024-01-15",
      likes: 45,
      comments: 12
    },
    // ...more results
  ]);

  return (
    <div className="bg-light min-vh-100 py-4">
      {/* Hero Search Section */}
      <div className="bg-primary bg-gradient text-white py-5 mb-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 mb-4">Recherche avancée</h1>
              <div className="search-box bg-white p-2 rounded-pill shadow-sm">
                <form className="d-flex align-items-center">
                  <div className="input-group border-0">
                    <span className="input-group-text bg-transparent border-0">
                      <FaSearch className="text-primary" />
                    </span>
                    <input 
                      type="text"
                      className="form-control border-0 shadow-none"
                      placeholder="Rechercher des articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-primary rounded-pill px-4">
                      Rechercher
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          {/* Filters Sidebar */}
          <div className="col-lg-3">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h5 className="card-title mb-3">
                  <FaFilter className="me-2" />
                  Filtres
                </h5>

                <div className="mb-3">
                  <label className="form-label">Catégorie</label>
                  <select 
                    className="form-select"
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                  >
                    <option value="">Toutes les catégories</option>
                    <option value="tech">Technologie</option>
                    <option value="science">Science</option>
                    <option value="culture">Culture</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Date</label>
                  <select 
                    className="form-select"
                    value={filters.date}
                    onChange={(e) => setFilters({...filters, date: e.target.value})}
                  >
                    <option value="">Toutes les dates</option>
                    <option value="today">Aujourd'hui</option>
                    <option value="week">Cette semaine</option>
                    <option value="month">Ce mois</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Trier par</label>
                  <select 
                    className="form-select"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  >
                    <option value="recent">Plus récents</option>
                    <option value="popular">Plus populaires</option>
                    <option value="relevant">Plus pertinents</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div className="col-lg-9">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h2 className="h4 mb-0">Résultats de recherche</h2>
              <span className="text-muted">{results.length} articles trouvés</span>
            </div>

            {results.map(post => (
              <Link 
                key={post.id} 
                to={`/post/${post.id}`} 
                className="card mb-4 border-0 shadow-sm text-decoration-none search-result-card"
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="img-fluid rounded-start h-100 object-fit-cover"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-primary">{post.category}</span>
                        <small className="text-muted">
                          <FaRegClock className="me-1" />
                          {post.date}
                        </small>
                      </div>
                      <h3 className="card-title h5">{post.title}</h3>
                      <p className="card-text text-secondary">{post.excerpt}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center text-muted">
                          <FaUser className="me-1" />
                          <small>{post.author}</small>
                        </div>
                        <div className="d-flex gap-3 text-muted">
                          <span><FaRegHeart className="me-1" />{post.likes}</span>
                          <span><FaRegComment className="me-1" />{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
