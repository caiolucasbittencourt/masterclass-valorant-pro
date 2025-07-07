import React, { useState, type FormEvent } from "react";

const Form: React.FC = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!whatsapp.trim() || !email.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Parabéns! Sua vaga foi confirmada. Prepare-se para o combate.");
    setWhatsapp("");
    setEmail("");
  };

  return (
    <section className="form-section" id="form">
      <div className="container">
        <h2 className="form-title">
          <b className="highlight">Garanta</b> sua vaga!
        </h2>
        <p className="form-subtitle">
          DIGITE SEU WHATSAPP E E-MAIL PARA RECEBER DICAS EXCLUSIVAS DE VALORANT
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="whatsapp"
            placeholder="Seu WhatsApp"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">CONFIRMAR MINHA VAGA!</button>
        </form>
      </div>
    </section>
  );
};

export default Form;




