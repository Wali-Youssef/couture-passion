import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";
import './Calendrier.css';

const Calendrier = () => {
  const [date, setDate] = useState(new Date());
  const [heure, setHeure] = useState("");
  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const horaires = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "13:00", "13:30", "14:00", "14:30", "15:00", "15:30"
  ];

  const isDateDisabled = ({ date }) => {
    const today = new Date();
    const isPast = date.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0);
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    return isPast || isWeekend;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullDate = new Date(date);
    const [hours, minutes] = heure.split(":");
    fullDate.setHours(parseInt(hours));
    fullDate.setMinutes(parseInt(minutes));
    fullDate.setSeconds(0);

    try {
      await axios.post("http://localhost:1337/api/rendez-vous-list", {
        data: {
          date: fullDate.toISOString(),
          service,
          email,
          statut: "en attente",
        },
      });

      setMessage("✅ Rendez-vous envoyé !");
      setService("");
      setEmail("");
      setHeure("");
    } catch (err) {
      console.error(err);
      setMessage("❌ Erreur lors de l’envoi");
    }
  };

  return (
    <div className="calendrier-container">
      <h2 className="calendrier-title">📅 Prendre un rendez-vous</h2>

      <div className="calendrier-flex">
        <div className="calendrier-calendar">
          <Calendar
            onChange={setDate}
            value={date}
            tileDisabled={isDateDisabled}
          />
        </div>

        <form onSubmit={handleSubmit} className="calendrier-form">
          <label className="calendrier-label">Heure :</label>
          <select
            value={heure}
            onChange={(e) => setHeure(e.target.value)}
            required
            className="calendrier-input"
          >
            <option value="">-- Choisir une heure --</option>
            {horaires.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>

          <label className="calendrier-label">Service :</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            required
            className="calendrier-input"
          >
            <option value="">-- Sélectionner --</option>
            <option value="retouches">Retouches</option>
            <option value="essayages">Essayages</option>
            <option value="autres">Autres</option>
          </select>

          <label className="calendrier-label">Email :</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="calendrier-input"
          />

          <button type="submit" className="calendrier-button">Envoyer</button>

          {message && <p className="calendrier-message">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default Calendrier;
