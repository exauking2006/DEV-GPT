import React from "react";

export default function EmojiPicker({ onSelect }) {
  const emojis = ["😀", "😂", "😍", "🔥", "👍"];

  return (
    <div>
      {emojis.map((e, i) => (
        <span key={i} onClick={() => onSelect(e)} style={{ margin: "5px", cursor: "pointer" }}>
          {e}
        </span>
      ))}
    </div>
  );
}
