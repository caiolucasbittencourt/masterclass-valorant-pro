import React from "react";
import valorantLogo from "../assets/valorant-logo.png";

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="container">
        <p className="footer-text">
          By registering, you'll receive exclusive tips, game-changing
          strategies, and the most important news from the competitive scene to
          elevate your gameplay and stand out from the crowd.
        </p>

        <img
          src={valorantLogo}
          alt="Logo do Valorant"
          className="footer-logo"
        />

        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitch.tv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitch"
          >
            <i className="fab fa-twitch"></i>
          </a>
          <a
            href="https://discord.gg/programador"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
