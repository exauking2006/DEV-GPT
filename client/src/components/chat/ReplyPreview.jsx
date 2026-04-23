import React from "react";

export default function ReplyPreview({ reply }) {
  if (!reply) return null;

  return (
    <div style={{ background: "#334155", padding: "5px" }}>
      Réponse à: {reply.text}
    </div>
  );
}
