import React from "react";
import './index.css';
import Order from "./Order";

function Footer(props) {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
  
    const isOpen = hour >= openHour && hour <= closeHour;
  
    return (
      <footer className="footer">
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            We're happy to welcome you beetween {openHour}:00 and {closeHour}:00
          </p>
        )}
      </footer>
    );
  }
  export default Footer;