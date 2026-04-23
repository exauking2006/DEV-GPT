import React, { createContext, useState } from "react";

export const ChatContext = createContext();

export default function ChatProvider({ children }) {
  const [messages, setMessages] = useState([]);

  const sendMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
}
