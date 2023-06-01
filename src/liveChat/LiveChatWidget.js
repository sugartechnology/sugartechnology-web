import React, { useEffect, useState } from 'react';
import { firestore } from './Firebase';

const LiveChatWidget = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const messagesRef = firestore.collection('messages');
      const snapshot = await messagesRef.get();
      const messagesData = snapshot.docs.map((doc) => doc.data());
      setMessages(messagesData);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = async () => {
    const messagesRef = firestore.collection('messages');
    await messagesRef.add({ text: inputText });
    setInputText('');
  };

  return (
    <div>
      <h1>Live Chat</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default LiveChatWidget;