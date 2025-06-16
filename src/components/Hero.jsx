import React, { useEffect, useState } from 'react';
import './Hero.css';
import { getAccueil } from '../services/api';

function Hero() {
    const [accueil, setAccueil] = useState(null);

    useEffect(() => {
        getAccueil().then((data) => {
            setAccueil(data);
        });
    }, []);

    if (!accueil) return <div>Chargement...</div>;

    const { titreHero, descriptionHero, imageHero, texteBoutonHero, lienBoutonHero } = accueil;

    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>{titreHero}</h1>
                    <p>{descriptionHero}</p>
                    <a href={lienBoutonHero} className="hero-btn">{texteBoutonHero}</a>
                </div>
                <div className="hero-image">
                    <img src={`http://localhost:1337${imageHero?.url}`} alt={titreHero} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
