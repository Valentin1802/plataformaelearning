import React, { useState } from "react";
import Navbar from "./Navbar";

function Register() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reiniciar los campos después del registro exitoso
    setNombre("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Navbar />
      <div className="registro-container">
        <h1 className="registro-titulo">Registro</h1>
        <form className="registro-form" onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input
              type="text"
              value={nombre}
              onChange={(event) => setNombre(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Contraseña:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <button type="submit" className="registro-button">
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;