import React from 'react';
import { Link } from 'react-router-dom';

function Boton(props) {
  return (
    <Link to={props.enlace} className="primary-button">
        {props.texto}
    </Link>
  );
}

export default Boton;