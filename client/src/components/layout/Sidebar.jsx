import React from "react";

export default function Sidebar({ users }) {
  return (
    <div style={sidebar}>
      <h4>Membres</h4>

      {users.map((u, i) => (
        <div key={i} style={userItem}>
          <img
            src={u.photo || "/images/default-avatar.png"}
            alt=""
            width="30"
            height="30"
            style={{ borderRadius: "50%" }}
          />
          <span>{u.name}</span>
        </div>
      ))}
    </div>
  );
}

const sidebar = {
  width: "250px",
  background: "#1e293b",
  padding: "10px",
};

const userItem = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  margin: "10px 0",
  cursor: "pointer",
};
