import React, { useState, useRef, useEffect } from 'react';
import { FaPaperPlane, FaSmile, FaPaperclip, FaTimes, FaComments, FaImage, FaVideo, FaFile, FaMicrophone } from 'react-icons/fa';
import EmojiPicker from 'emoji-picker-react';
import '../styles/Chat.css';

const Chat = () => {
  // États du chat
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  
  // Référence pour le scroll automatique
  const messagesEndRef = useRef(null);

  // Messages de démonstration
  const [messages] = useState([
    { id: 1, sender: 'John Doe', text: 'Bonjour ! Comment puis-je vous aider ?', time: '10:00', isAdmin: true },
    { id: 2, sender: 'Vous', text: 'J\'ai une question concernant un article', time: '10:02', isAdmin: false },
    { id: 3, sender: 'John Doe', text: 'Bien sûr, je vous écoute', time: '10:03', isAdmin: true },
    { id: 4, sender: 'Vous', text: 'Comment puis-je partager un article sur les réseaux sociaux ?', time: '10:04', isAdmin: false },
    { id: 5, sender: 'John Doe', text: 'Vous trouverez les boutons de partage en bas de chaque article. Il suffit de cliquer sur l\'icône du réseau social de votre choix.', time: '10:05', isAdmin: true },
  ]);

  // Effet pour le scroll automatique
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fonction de scroll automatique
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Gestionnaire d'envoi de message
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      // Ici, vous ajouterez la logique d'envoi au backend
      setNewMessage('');
      setShowEmojiPicker(false);
    }
  };

  // Gestionnaire d'ajout d'emoji
  const onEmojiClick = (emojiObject) => {
    setNewMessage(prev => prev + emojiObject.emoji);
  };

  // Menu des pièces jointes
  const attachmentOptions = [
    { icon: <FaImage />, label: 'Image', action: () => console.log('Upload image') },
    { icon: <FaVideo />, label: 'Vidéo', action: () => console.log('Upload video') },
    { icon: <FaFile />, label: 'Document', action: () => console.log('Upload document') }
  ];

  // Gestionnaire d'enregistrement audio
  const handleVoiceRecord = () => {
    setIsRecording(!isRecording);
    // Implémentez ici la logique d'enregistrement
  };

  // Ajout d'une classe conditionnelle pour l'animation mobile
  const emojiPickerClass = `emoji-picker-wrapper ${showEmojiPicker ? 'show' : ''}`;

  return (
    <>
      {/* Bouton de chat flottant */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat"
      >
        {isOpen ? <FaTimes /> : <FaComments />}
      </button>

      {/* Fenêtre principale du chat */}
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

        {/* Corps du chat avec messages */}
        <div className="chat-body">
          <div className="chat-date-divider">
            <span>Aujourd'hui</span>
          </div>
          
          {messages.map(message => (
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
          <div ref={messagesEndRef} />
        </div>

        {/* Zone de saisie et contrôles */}
        <div className="chat-footer">
          <form onSubmit={handleSubmit} className="chat-form">
            <div className="chat-input-wrapper">
              {/* Menu des pièces jointes */}
              <div className="attachment-menu">
                <button 
                  type="button" 
                  className="chat-attach-btn"
                  onClick={() => setShowAttachMenu(!showAttachMenu)}
                >
                  <FaPaperclip />
                </button>
                {showAttachMenu && (
                  <div className="attachment-options">
                    {attachmentOptions.map((option, index) => (
                      <button 
                        key={index}
                        type="button"
                        className="attachment-option"
                        onClick={option.action}
                      >
                        {option.icon}
                        <span>{option.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Champ de saisie */}
              <input
                type="text"
                placeholder="Écrivez votre message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />

              {/* Bouton emoji */}
              <div className="emoji-wrapper">
                <button 
                  type="button" 
                  className="chat-emoji-btn"
                  onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                >
                  <FaSmile />
                </button>
                {showEmojiPicker && (
                  <div className={emojiPickerClass}>
                    <EmojiPicker 
                      onEmojiClick={onEmojiClick}
                      width="100%"
                      height="250px"
                    />
                  </div>
                )}
              </div>

              {/* Bouton d'enregistrement vocal */}
              <button 
                type="button" 
                className={`chat-voice-btn ${isRecording ? 'recording' : ''}`}
                onClick={handleVoiceRecord}
              >
                <FaMicrophone />
              </button>
            </div>

            {/* Bouton d'envoi */}
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
