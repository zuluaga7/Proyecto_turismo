import React from "react";
import './Jardin.css'
import sanrafael_parque_viaje from '../../assets/img/parqueprincipal_sanrafel_viaje.jpg'
import { Link } from "react-router-dom";



 const Jardin = () => {
  return (
    <>
        <h3>Pueblo a descubrir</h3>
  <h1>Jardín, Ciudad de los muchos cerros</h1>
  <a href="https://turismoantioquia.travel/san-rafael/" target="_blank">
    {" "}
    <img
      src={sanrafael_parque_viaje}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <p>
  Jardín, que recibe el apelativo de “el más bello de Antioquia”, es un municipio 
  ubicado en el suroeste del departamento, a 131 kilómetros de Medellín.
  </p>
  <p>
  Entre sus características más destacadas está su arquitectura colonial, sus conocidos balcones
   coloridos y decorados con flores, sus colores y su amplio parque principal, que invita a 
   la tertulia y permite un ambiente agradable para propios y extraños.
  </p>
  <p>
  Además de la belleza de su zona urbana, Jardín cuenta con diferentes espacios llenos de verde en
   los que se pueden encontrar cascadas, lagos y rutas camineras que atraen a quienes disfrutan de 
   la aventura, el senderismo y el contacto con la naturaleza; en sus alrededores se pueden encontrar 
   finca-hoteles y hoteles rodeados de paisajes encantadores.
  </p>
  <p>
  Jardín invita a la aventura, pero cuando estés en este municipio recuerda visitar sus fincas cafeteras,
   disfrutar de sus trucheras y hacer un recorrido por sus referentes culturales e 
   históricos de la zona urbana.
  </p>
  
  <div>
    <h1>Qué hacer en Jardín - Antioquia</h1>
    <ul>
      <li>
        <p>Teatro municipal</p>
      </li>
      <li>
        <p>Basílica Menor de la Inmaculada Concepción</p>
      </li>
      <li>
        <p>Casa Museo Clara Rojas</p>
      </li>
      <li>
        <p>Visitas a fincas cafeteras para disfrutar de su proceso artesanal</p>
      </li>
      <li>
        <p>Teleférico</p>
      </li>
    </ul>
    <h1>Lugares para visitar</h1>
    <ul>
      <li>
        <p>Cerro Cristo Rey</p>
      </li>
      <li>
        <p>Cascada la Escalera</p>
      </li>
      <h1>
        {" "}
        <small> Disfruta la experiencia!!!</small>
        <Link to="/">Volver</Link>
      </h1>
      <Link to="/login" type='button'>Click para ingresar y activar membreseía</Link>
    </ul>
  </div>

    </>
  )
}
export default Jardin
