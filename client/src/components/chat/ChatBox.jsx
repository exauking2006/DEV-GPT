import React from "react";
import Message from "./Message";
import MessageInput from "./MessageInput";

export default function ChatBox({ messages, user, onSend }) {
  return (
    <div className="chat-box">
      <div className="messages">
        {messages.map((msg, i) => (
          <Message key={i} msg={msg} user={user} />
        ))}
      </div>

      <MessageInput onSend={onSend} />
    </div>
  );
                       }
