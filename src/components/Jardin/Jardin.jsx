import React from "react";
import './Jardin.css'
import jardin_viaje from '../../assets/img/jardin_viaje.jpg'
import { Link } from "react-router-dom";



 const Jardin = () => {
  return (
    <div className="cuerpoo">
        <h3 className="tituloo">Pueblo a descubrir</h3>
  <h1 className="titulooo">Jardín, Ciudad de los muchos cerros</h1>
  <a>
    {" "}
    <img id="imagenn"
      src={jardin_viaje}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <aside className="textoo">
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
  
  </aside>
  
  <div>
    <h1 className="titulooo">Qué hacer en Jardín - Antioquia</h1>
    <ul id="p-a">
      <li>
        <p id="p-b">Teatro municipal</p>
      </li>
      <li>
        <p id="p-b">Basílica Menor de la Inmaculada Concepción</p>
      </li>
      <li>
        <p id="p-b">Casa Museo Clara Rojas</p>
      </li>
      <li>
        <p id="p-b">Visitas a fincas cafeteras para disfrutar de su proceso artesanal</p>
      </li>
      <li>
        <p id="p-b">Teleférico</p>
      </li>
    </ul>
    <h1 className="titulooo">Lugares para visitar</h1>
    <ul id="p-a">
      <li>
        <p id="p-b">Cerro Cristo Rey</p>
      </li>
      <li>
        <p id="p-b">Cascada la Escalera</p>
      </li>
      <section className="piee">
      <h1 id="p-c">
        {" "}
        <small> Disfruta la experiencia!!!</small>
        </h1>
        <Link id="p-d" to="/">Volver</Link>
      <Link id="p-d" to="/login" type='button'>Click para ingresar y activar membreseía</Link>
      </section>
  </ul>
  </div>

    </div>
  )
}
export default Jardin
