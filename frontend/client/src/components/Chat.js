// client/src/components/Chat.js

import React, { useEffect, useState } from 'react';
import socket from '../socket';
import { fetchMessages, sendMessage } from '../api';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [currentRoom, setCurrentRoom] = useState('defaultRoom'); // Default room name

  useEffect(() => {
    // Fetch messages from the server when component mounts
    fetchMessages(currentRoom)
      .then(messages => setMessages(messages))
      .catch(error => console.error('Error fetching messages:', error));

    // Listen for new messages from the server
    socket.on('message', (newMessage) => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    // Cleanup socket listener when component unmounts
    return () => {
      socket.off('message');
    };
  }, [currentRoom]); // Re-fetch messages when room changes

  const handleSendMessage = () => {
    sendMessage(currentRoom, messageInput);
    setMessageInput('');
  };

  return (
    <div className="container">
      {/* Room selection */}
      <select className="form-select mb-3" value={currentRoom} onChange={(e) => setCurrentRoom(e.target.value)}>
        <option value="room1">Room 1</option>
        <option value="room2">Room 2</option>
        {/* Add more room options as needed */}
      </select>

      {/* Display messages */}
      <div className="mb-3">
        {messages.map((message, index) => (
          <div key={index} className="alert alert-primary" role="alert">
            {message.content}
          </div>
        ))}
      </div>

      {/* Message input field */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message here"
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        />
        <button className="btn btn-primary" type="button" onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
