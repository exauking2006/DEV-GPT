import React from "react";

export default function Header({ currentChat }) {
  return (
    <div style={header}>
      <h4>{currentChat?.name || "Chat"}</h4>

      <div>
        <button>📞</button>
        <button>🎥</button>
        <button>⋮</button>
      </div>
    </div>
  );
}

const header = {
  height: "60px",
  background: "#334155",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 10px",
};
