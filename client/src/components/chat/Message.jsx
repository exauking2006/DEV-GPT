import React from "react";
import ReactionBar from "./ReactionBar";

export default function Message({ msg, user }) {
  const isMe = msg.sender === user.name;

  return (
    <div className={`message ${isMe ? "me" : "other"}`}>
      <strong>{msg.sender}</strong>
      <p>{msg.text}</p>

      <ReactionBar />
    </div>
  );
    }
