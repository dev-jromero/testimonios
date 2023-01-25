import React from "react";
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {

    return ( 
        <div className = 'contenedor-testimonio' >

            <img className = 'imagen-testimonio' src = { require(`../imagenes/profile-${props.imagen}.png`) }  alt='foto de profile-1'/>

            <div className='contenedor-texto-testimonio'>
            <p className="nombre-testimonio"><span>{props.nombre}</span> en {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo} en <span>{props.empresa}</span></p>
            <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    ); 

}

export default Testimonio;