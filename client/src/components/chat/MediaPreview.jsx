import React from "react";

export default function MediaPreview({ file }) {
  if (!file) return null;

  return (
    <div>
      <p>Fichier sélectionné:</p>
      <img src={URL.createObjectURL(file)} alt="" width="100" />
    </div>
  );
      }
