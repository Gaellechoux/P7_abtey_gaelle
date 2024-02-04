import React from "react";

export default function Card({ tag }) {
  return (
    <div className="tags">
      <span className="tags__button">{tag}</span>
    </div>
  );
}
