import React from "react";

export default function ReportsBox() {
  const reports = [
    { text: "Bug chat" },
    { text: "Erreur login" },
  ];

  return (
    <div className="admin-card">
      <h4>Problèmes signalés</h4>

      {reports.map((r, i) => (
        <div key={i}>
          <p>{r.text}</p>
          <button>Résoudre</button>
        </div>
      ))}
    </div>
  );
}
