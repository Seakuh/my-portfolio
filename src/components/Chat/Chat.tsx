import React, { useState } from 'react';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="chat-title">Chat</div>
        <div className="chat-close">X</div>
      </div>
      <div className="chat-messages">
        <div className="chat-message">User: Hello!</div>
        <div className="chat-message">Bot: Hi there!</div>
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </div>
    </div>
  );
};

export default Chat;
