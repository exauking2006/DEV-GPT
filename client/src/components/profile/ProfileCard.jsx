import React from "react";

export default function ProfileCard({ user }) {
  return (
    <div className="admin-card">
      <img
        src={user?.photo || "/images/default-avatar.png"}
        alt=""
        width="80"
        height="80"
        style={{ borderRadius: "50%" }}
      />
      <h3>{user?.name}</h3>
      <p>{user?.email}</p>
    </div>
  );
        }
