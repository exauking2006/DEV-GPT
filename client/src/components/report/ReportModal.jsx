import React, { useState } from "react";

export default function ReportModal({ isOpen, onClose, onSend }) {
  const [text, setText] = useState("");

  if (!isOpen) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <h3>Signaler un problème</h3>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Décris le problème..."
          style={{ width: "100%", height: "100px" }}
        />

        <button onClick={() => onSend(text)}>Envoyer</button>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.6)",
};

const modal = {
  background: "#1e293b",
  padding: "20px",
  margin: "100px auto",
  width: "300px",
  borderRadius: "10px",
  color: "#fff",
};
