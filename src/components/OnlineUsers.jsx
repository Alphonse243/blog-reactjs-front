import React, { useState } from 'react';
import { FaUsers, FaTimes } from 'react-icons/fa';
import '../styles/OnlineUsers.css';

const OnlineUsers = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mockOnlineUsers = [
    { id: 1, name: 'John Doe', avatar: 'https://picsum.photos/id/1001/40/40', status: 'online' },
    { id: 2, name: 'Marie Smith', avatar: 'https://picsum.photos/id/1002/40/40', status: 'online' },
    { id: 3, name: 'Alex Johnson', avatar: 'https://picsum.photos/id/1003/40/40', status: 'away' },
    { id: 4, name: 'Sarah Wilson', avatar: 'https://picsum.photos/id/1004/40/40', status: 'online' },
  ];

  return (
    <>
      <button 
        className={`online-users-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaUsers />}
      </button>

      <div className={`online-users-panel ${isOpen ? 'open' : ''}`}>
        <div className="online-users-header">
          <h5 className="m-0">Utilisateurs en ligne</h5>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="online-users-body">
          {mockOnlineUsers.map(user => (
            <div key={user.id} className="online-user-item">
              <div className="user-avatar">
                <img src={user.avatar} alt={user.name} />
                <span className={`status-dot ${user.status}`} />
              </div>
              <div className="user-info">
                <h6 className="mb-0">{user.name}</h6>
                <small className="text-muted">
                  {user.status === 'online' ? 'En ligne' : 'Absent'}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OnlineUsers;
