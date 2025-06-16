import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/services?populate=icon");
        setServices(res.data.data);
      } catch (error) {
        console.error("Erreur de récupération des services :", error);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="services">
      <h2 className="services-title">Nos services</h2>
      <div className="services-container">
        {services.map((service) => {
          const { id, title, description, icon } = service;
          const imageUrl = icon?.url || icon?.data?.attributes?.url;

          return (
            <div className="service-card" key={id}>
              {imageUrl && (
                <img
                  src={`http://localhost:1337${imageUrl}`}
                  alt={title}
                  className="service-icon"
                />
              )}
              <h3 className="service-title">{title}</h3>
              <p className="service-description">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
