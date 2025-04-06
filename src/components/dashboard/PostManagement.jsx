import React, { useState } from 'react';
import { FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';

const PostManagement = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Guide SEO 2024",
      category: "Marketing",
      status: "Publié",
      date: "2024-01-20",
      views: 1234
    },
    // ... autres articles
  ]);

  const [showEditor, setShowEditor] = useState(false);
  const [editPost, setEditPost] = useState(null);

  return (
    <div className="post-management">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 mb-0">Gestion des Articles</h2>
        <button className="btn btn-primary" onClick={() => setShowEditor(true)}>
          <FaPlus className="me-2" />
          Nouvel Article
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Titre</th>
                  <th>Catégorie</th>
                  <th>Statut</th>
                  <th>Date</th>
                  <th>Vues</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map(post => (
                  <tr key={post.id}>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>
                      <span className={`badge bg-${post.status === 'Publié' ? 'success' : 'warning'}`}>
                        {post.status}
                      </span>
                    </td>
                    <td>{post.date}</td>
                    <td>{post.views}</td>
                    <td>
                      <div className="btn-group">
                        <button className="btn btn-sm btn-outline-primary">
                          <FaEye />
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          <FaEdit />
                        </button>
                        <button className="btn btn-sm btn-outline-danger">
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Éditeur d'articles */}
      {showEditor && (
        <div className="post-editor">
          {/* ... code de l'éditeur ... */}
        </div>
      )}
    </div>
  );
};

export default PostManagement;
