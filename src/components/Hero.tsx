import React from "react";
import video from "../assets/valorant-video.mp4";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <video
        className="hero-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="container">
        <h2 className="title"></h2>
        <h1 className="subtitle">
          Learn how to master <br />
          <b className="highlight">the most played FPS</b>
          <br /> in less than 30 days
        </h1>
        <p className="cta-text">Click the button below to secure your spot</p>
        <a href="#form" className="cta-button">
          I WANT TO BE A PRO!
        </a>
      </div>
    </section>
  );
};

export default Hero;
