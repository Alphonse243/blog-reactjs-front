import React, { useState } from 'react';
import { FaPaperPlane, FaSmile, FaPaperclip, FaTimes, FaComments } from 'react-icons/fa';
import '../styles/Chat.css';

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  const mockMessages = [
    { id: 1, sender: 'John Doe', text: 'Bonjour ! Comment puis-je vous aider ?', time: '10:00', isAdmin: true },
    { id: 2, sender: 'Vous', text: 'J\'ai une question concernant un article', time: '10:02', isAdmin: false },
    { id: 3, sender: 'John Doe', text: 'Bien sûr, je vous écoute', time: '10:03', isAdmin: true },
    { id: 4, sender: 'Vous', text: 'Comment puis-je partager un article sur les réseaux sociaux ?', time: '10:04', isAdmin: false },
    { id: 5, sender: 'John Doe', text: 'Vous trouverez les boutons de partage en bas de chaque article. Il suffit de cliquer sur l\'icône du réseau social de votre choix.', time: '10:05', isAdmin: true },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      setNewMessage('');
    }
  };

  return (
    <>
      {/* Bouton de chat flottant */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Fenêtre de chat */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        {/* En-tête du chat */}
        <div className="chat-header">
          <div className="chat-header-user">
            <div className="chat-avatar">
              <img src="https://picsum.photos/id/1005/40/40" alt="Support" />
              <span className="status-badge"></span>
            </div>
            <div className="chat-user-info">
              <h5>Support en ligne</h5>
              <small className="text-muted">En ligne</small>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Corps du chat */}
        <div className="chat-body">
          <div className="chat-date-divider">
            <span>Aujourd'hui</span>
          </div>
          
          {mockMessages.map(message => (
            <div 
              key={message.id} 
              className={`chat-message ${message.isAdmin ? 'admin' : 'user'}`}
            >
              {message.isAdmin && (
                <div className="message-avatar">
                  <img src="https://picsum.photos/id/1005/32/32" alt={message.sender} />
                </div>
              )}
              <div className="message-content">
                <div className="message-bubble">
                  <p>{message.text}</p>
                </div>
                <div className="message-info">
                  <small>{message.time}</small>
                  <span className="sender-name">{message.sender}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pied de page du chat avec formulaire */}
        <div className="chat-footer">
          <form onSubmit={handleSubmit} className="chat-form">
            <div className="chat-input-wrapper">
              <button type="button" className="chat-attach-btn">
                <FaPaperclip />
              </button>
              <input
                type="text"
                placeholder="Écrivez votre message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button type="button" className="chat-emoji-btn">
                <FaSmile />
              </button>
            </div>
            <button type="submit" className="chat-send-btn">
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
