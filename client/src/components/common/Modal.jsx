import React from "react";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div style={overlay}>
      <div style={modal}>
        <button onClick={onClose} style={closeBtn}>❌</button>
        {children}
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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modal = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  width: "300px",
  color: "#fff",
};

const closeBtn = {
  background: "transparent",
  color: "#fff",
  border: "none",
  float: "right",
  cursor: "pointer",
};
