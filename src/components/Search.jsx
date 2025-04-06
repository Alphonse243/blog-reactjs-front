import React, { useState } from 'react';
import { FaSearch, FaFilter, FaTags } from 'react-icons/fa';
import '../styles/Search.css';

const Search = () => {
  const [filters, setFilters] = useState({
    category: '',
    date: '',
    sortBy: 'recent'
  });

  return (
    <div className="search-page">
      <div className="search-hero">
        <div className="container">
          <h1 className="text-center mb-4">Recherche avancée</h1>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="search-box">
                <div className="input-group">
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    placeholder="Rechercher des articles..."
                  />
                  <button className="btn btn-primary">
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-3">
            <div className="filters-section">
              <h4 className="mb-3">
                <FaFilter className="me-2" />
                Filtres
              </h4>
              {/* Filtres de recherche */}
              <div className="mb-4">
                <label className="form-label">Catégorie</label>
                <select 
                  className="form-select"
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                >
                  <option value="">Toutes les catégories</option>
                  {/* Options des catégories */}
                </select>
              </div>

              <div className="mb-4">
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
                  <option value="year">Cette année</option>
                </select>
              </div>

              <div className="mb-4">
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

          <div className="col-md-9">
            <div className="search-results">
              {/* Résultats de recherche seront affichés ici */}
              <div className="alert alert-info">
                Utilisez les filtres pour affiner votre recherche
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
