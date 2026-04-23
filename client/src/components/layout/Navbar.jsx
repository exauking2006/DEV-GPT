import React from "react";

export default function Navbar({ user }) {
  return (
    <div className="navbar">
      <h3>DEV-GPT</h3>

      <div className="profile">
        <img
          src={user?.photo || "/images/default-avatar.png"}
          alt="avatar"
          width="35"
          height="35"
          style={{ borderRadius: "50%" }}
        />
        <span>{user?.name || "User"}</span>

        <button>⚙️</button>
      </div>
    </div>
  );
                   }
