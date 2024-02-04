import React from "react";
import { Link } from "react-router-dom";
export default function Card({ log, image, title }) {
  return (
    <Link to={`/logement/${log}`}>
      <div className="card">
        <p className="card-title">{title}</p>
        <img className="loader" src={image} alt="" />
      </div>
    </Link>
  );
}
