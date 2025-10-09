import React, { useState, type FormEvent } from "react";

const Form: React.FC = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!whatsapp.trim() || !email.trim()) {
      alert("Please fill in all the fields.");
      return;
    }

    alert("Congratulations! Your spot has been confirmed. Prepare for combat.");
    setWhatsapp("");
    setEmail("");
  };

  return (
    <section className="form-section" id="form">
      <div className="container">
        <h2 className="form-title">
          <b className="highlight">Secure</b> your spot!
        </h2>
        <p className="form-subtitle">
          Unlock your potential in Valorant! Provide your WhatsApp and email to
          receive our exclusive tips, tricks, and guides that will help you
          improve your game.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="whatsapp"
            placeholder="Your WhatsApp"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Your e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">CONFIRM MY SPOT!</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
