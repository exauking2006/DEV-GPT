import React from "react";

export default function Loader() {
  return (
    <div style={loaderStyle}>
      ⏳ Chargement...
    </div>
  );
}

const loaderStyle = {
  textAlign: "center",
  padding: "20px",
  color: "#3b82f6",
};
