import React from "react";

export default function Input({ placeholder, value, onChange, type = "text" }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        width: "100%",
        margin: "5px 0",
        borderRadius: "8px",
        background: "#334155",
        color: "#fff",
      }}
    />
  );
          }
