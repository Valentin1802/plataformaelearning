import React, { useState } from "react";
import Navbar from "./Navbar";

const Contacto = () => {
  const [texto, setTexto] = useState("");

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setTexto("");
    }
  };

  const handleButtonReset = () => {
    setTexto("");
  };
  return (
    <div>
      <Navbar/>
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Comuniquenos su duda o sugerencia</h1>
        <div className="contact-form-container">
          <input 
            type="text" 
            placeholder="Deje su mensaje" 
            value={texto}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button className="secondary-button" onClick={handleButtonReset}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default Contacto;