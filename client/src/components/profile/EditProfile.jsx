import React, { useState } from "react";

export default function EditProfile({ user }) {
  const [name, setName] = useState(user?.name || "");

  const save = () => {
    console.log("Nouveau nom:", name);
  };

  return (
    <div className="admin-card">
      <h4>Modifier Profil</h4>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom"
      />

      <button onClick={save}>Sauvegarder</button>
    </div>
  );
      }
