import React, { useState } from "react";
import ChatBox from "../components/chat/ChatBox";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const user = { name: "Moi" };

  const sendMessage = (text) => {
    setMessages([...messages, { sender: user.name, text }]);
  };

  return (
    <ChatBox messages={messages} user={user} onSend={sendMessage} />
  );
                               }
