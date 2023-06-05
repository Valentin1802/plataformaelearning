import React from "react";
import Navbar from "./Navbar";
import Inicio from "../Assets/inicio.jpg"
import BotonHomeCursos from "./BotonHomeCusos";

const Home = () => {

  return (
    <div> 
      <Navbar />
        <div className="container-home-imagen">
          <img src={Inicio} className="home-imagen" alt=""/>
          <h1 className="home-titulo">Aprendé desde tu casa</h1>
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Los mejores cursos al mejor precio
          </h1>
          <p className="primary-text">
            Hechale un vistazo a los cursos disponibles
          </p>
          <BotonHomeCursos/>
        </div>
    </div>
  );
};

export default Home;
