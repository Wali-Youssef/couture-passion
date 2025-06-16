import React from 'react';
import './Location.css';

function Location() {
    return (
        <section className="location-section">
            <h2>Où nous trouver</h2>

            <div className="map-wrapper">
                <iframe
                    title="Localisation Couture Passion"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2667.398330617232!2d6.844518776679115!3d47.48165097117433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47923d729d5c06cd%3A0x1f493a2d7bfb6e57!2sCouture%20Passion!5e0!3m2!1sfr!2sfr!4v1716105200000"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <p className="address">12 Rue de la Révolution, 25400 Audincourt</p>

            <a
                href="https://www.google.com/maps/dir/?api=1&destination=12+Rue+de+la+Révolution,+25400+Audincourt"
                target="_blank"
                rel="noreferrer"
                className="map-link"
            >
                ➤ Y accéder avec Google Maps
            </a>
        </section>
    );
}

export default Location;
