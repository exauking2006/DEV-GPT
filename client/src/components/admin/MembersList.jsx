import React from "react";

export default function MembersList() {
  const members = [
    { name: "User1" },
    { name: "User2" },
  ];

  return (
    <div className="admin-card">
      <h4>Membres</h4>

      {members.map((m, i) => (
        <div key={i}>{m.name}</div>
      ))}
    </div>
  );
}
