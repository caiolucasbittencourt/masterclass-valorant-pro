import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h2 className="title">
          Participe da <b className="highlight">Masterclass Valorant Pro</b><br /> e
          descubra...
        </h2>
        <h1 className="subtitle">
          Como dominar <b className="highlight">o FPS mais jogado do momento</b> em menos de 30
          dias.
        </h1>
        <p className="cta-text">Clique no botão abaixo e garanta sua vaga!</p>
        <a href="#form" className="cta-button">
          QUERO SER PRO!
        </a>
      </div>
    </section>
  );
};

export default Hero;





