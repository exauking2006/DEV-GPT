import React, { useState } from "react";
import EmojiPicker from "./EmojiPicker";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const send = () => {
    if (!text) return;
    onSend(text);
    setText("");
  };

  return (
    <div style={box}>
      <button>😊</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Message..."
        style={input}
      />
      <button onClick={send}>📤</button>
    </div>
  );
}

const box = {
  display: "flex",
  padding: "10px",
  background: "#1e293b",
};

const input = {
  flex: 1,
  padding: "10px",
  margin: "0 10px",
};
