import React from "react";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      onClick={onClick}
      type={type}
      style={{
        padding: "10px",
        background: "#3b82f6",
        color: "#fff",
        borderRadius: "8px",
        border: "none",
        width: "100%",
      }}
    >
      {text}
    </button>
  );
    }
