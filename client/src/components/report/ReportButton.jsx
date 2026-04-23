import React from "react";

export default function ReportButton({ onClick }) {
  return (
    <button onClick={onClick} style={btn}>
      🚨 Signaler un problème
    </button>
  );
}

const btn = {
  background: "#ef4444",
  color: "#fff",
  padding: "8px",
  borderRadius: "8px",
};
