import React from "react";
import valorantLogo from '../assets/valorant-logo.png';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="container">
        <p className="footer-text">
          By registering, you'll receive exclusive tips, game-changing strategies, and the most important news from the competitive scene to elevate your gameplay and stand out from the crowd.
        </p>
        <img
          src={valorantLogo}
          alt="Logo do Valorant"
          className="footer-logo"
        />
      </div>
    </section>
  );
};

export default Footer;