import React from "react";

export default function MentionList({ users, onSelect }) {
  return (
    <div style={{ background: "#1e293b", padding: "5px" }}>
      {users.map((u, i) => (
        <div key={i} onClick={() => onSelect(u)} style={{ cursor: "pointer" }}>
          @{u.name}
        </div>
      ))}
    </div>
  );
}
