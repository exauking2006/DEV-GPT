import React from "react";

export default function AvatarUpload({ onUpload }) {
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => onUpload(e.target.files[0])}
      />
    </div>
  );
}
