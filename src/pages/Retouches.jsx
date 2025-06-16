import React, { useEffect, useState } from "react";
import axios from "axios";
import RetoucheCard from "../components/RetoucheCard";
import "./Retouches.css";

function Retouches() {
  const [retouches, setRetouches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/retouches?populate=image")
      .then((res) => {
        console.log("👉 Données reçues :", res.data);
        setRetouches(res.data.data);
      })
      .catch((err) => console.error("Erreur retouches :", err));
  }, []);

  return (
    <section className="retouches-section">
      <h2 className="retouches-title">Nos retouches</h2>
      <div className="retouches-grid">
        {retouches.map((item) => {
          const { id, titre, description, image } = item;
          const imageUrl = image?.url || image?.formats?.medium?.url || "";

          return (
            <RetoucheCard
              key={id}
              titre={titre || "Sans titre"}
              description={description || ""}
              imageUrl={imageUrl ? `http://localhost:1337${imageUrl}` : ""}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Retouches;
