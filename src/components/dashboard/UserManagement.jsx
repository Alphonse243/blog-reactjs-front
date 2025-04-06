import React, { useState } from 'react';
import { FaUserEdit, FaTrash, FaUserPlus } from 'react-icons/fa';

const UserManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Actif' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Éditeur', status: 'Actif' },
    // ... autres utilisateurs
  ]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [editUser, setEditUser] = useState(null);

  return (
    <div className="user-management">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="h4 mb-0">Gestion des Utilisateurs</h2>
        <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
          <FaUserPlus className="me-2" />
          Nouvel Utilisateur
        </button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Nom</th>
                  <th>Email</th>
                  <th>Rôle</th>
                  <th>Statut</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <td>
                      <span className={`badge bg-${user.status === 'Actif' ? 'success' : 'danger'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-outline-primary me-2">
                        <FaUserEdit />
                      </button>
                      <button className="btn btn-sm btn-outline-danger">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal d'ajout/édition */}
      {/* ... code du modal ... */}
    </div>
  );
};

export default UserManagement;
