import React from "react";

export default function TypingIndicator({ user }) {
  if (!user) return null;

  return (
    <div style={{ padding: "5px", color: "#94a3b8" }}>
      {user} est en train d’écrire...
    </div>
  );
}
