import React from "react";
import "./RetoucheCard.css";

function RetoucheCard({ titre, description, imageUrl }) {
  return (
    <div className="retouche-card">
      <div className="retouche-image-wrapper">
        <img src={imageUrl} alt={titre} className="retouche-image" />
      </div>
      <div className="retouche-content">
        <h3>{titre}</h3>
        <p>{description}</p>
        <a href="http://localhost:5173/calendrier" className="rdv-button">
          Prendre RDV
        </a>
      </div>
    </div>
  );
}

export default RetoucheCard;
