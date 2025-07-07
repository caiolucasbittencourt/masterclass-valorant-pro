import React from "react";
import valorantLogo from '../assets/valorant-logo.png';

const Footer: React.FC = () => {
  return (
    <section className="footer">
      <div className="container">
        <p className="footer-text">
          Sua inscrição garante dicas exclusivas, estratégias e as principais
          notícias do cenário competitivo.
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







