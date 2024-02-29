
import React, { useState } from "react";
import "./mod";

const Modal = ({ isOpen, onRequestClose, onSend, friend }) => {
  const [messageContent, setMessageContent] = useState('');

  const handleSendClick = () => {
    onSend(messageContent);
    setMessageContent('');
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onRequestClose}>
          X
        </button>
        <h2>Send Message to {friend.tagname}</h2>
        <textarea
          rows="4"
          cols="3"
          placeholder="Type your message..."
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        ></textarea>
        <div className="modal-buttons">
          <button onClick={handleSendClick}>Send</button>
          <button onClick={onRequestClose}>Cancel</button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;
