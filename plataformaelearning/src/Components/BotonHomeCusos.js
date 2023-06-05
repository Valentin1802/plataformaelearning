import React from 'react';
import { Link } from 'react-router-dom';


function BotonHomeCursos(props) {
  return (
    <Link to="/cursos" className="secondary-button">
      Reservar ya
    </Link>
  );
}

export default BotonHomeCursos;