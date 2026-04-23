import React, { useState } from "react";

export default function MaintenanceToggle() {
  const [active, setActive] = useState(false);

  return (
    <div className="admin-card">
      <h4>Maintenance</h4>

      <p>
        {active
          ? "🟢 Site actif"
          : "🔴 Maintenance en cours la communauté administrateur travail pour des nouvelles améliorations (revenez dans 1h)"}
      </p>

      <button onClick={() => setActive(!active)}>
        {active ? "Désactiver" : "Activer"}
      </button>
    </div>
  );
        }
