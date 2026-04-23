import React, { useState } from "react";

export default function AddAdmin() {
  const [email, setEmail] = useState("");

  const addAdmin = () => {
    console.log("Ajouter admin:", email);
  };

  return (
    <div className="admin-card">
      <h4>Ajouter Admin</h4>

      <input
        type="email"
        placeholder="email@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={addAdmin}>Ajouter</button>
    </div>
  );
}
