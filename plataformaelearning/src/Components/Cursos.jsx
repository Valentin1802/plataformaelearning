import React from "react";
import Navbar from "./Navbar";

const contenido = [
    {
      titulo: "JavaScript",
      descripcion: "Aprende el lenguaje de programación JavaScript."
    },
    {
      titulo: "Python",
      descripcion: "Aprende el lenguaje de programación Python."
    },
    {
      titulo: "Java",
      descripcion: "Aprende el lenguaje de programación Java."
    },
    {
      titulo: "C++",
      descripcion: "Aprende el lenguaje de programación C++."
    }
  ];

const Cursos = () => {
    
    return (
        <div>
            <Navbar/>
            <div><h1 className="titulo-principal">Cursos Disponibles</h1></div>
            <div className="cursos-list">
                {contenido.map((curso, index) => (
                    <div key={index} className="curso-item">
                        <h2 className="titulo.curso">{curso.titulo}</h2>
                        <p className="descripcion.curso">{curso.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>   
    );
}


export default Cursos;