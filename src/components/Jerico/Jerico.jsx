import React from 'react'
import './Jerico.css'
import sanrafael_parque_viaje from '../../assets/img/parqueprincipal_sanrafel_viaje.jpg'
import { Link } from 'react-router-dom'

const Jerico = () => {
  return (
    <div>
      <>
  <h3>Pueblo a descubrir</h3>
  <h1>Jericó, el reino del Carriel</h1>
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
  Donde el cielo es más azul y el viento pasa como queriéndose quedar, está Jericó, 
  una joya turística del Suroeste. Este municipio está ubicado en el suroeste del 
  departamento, a 112 kilómetros de distancia de Medellín.
  </p>
  <p>
  Entre sus características principales encontramos su arquitectura, que conserva muchas de
   las características correspondientes a la época de colonización antioqueña; nos devuelve 
   en el tiempo y narra diferentes historias de las más bellas tradiciones antioqueñas.
  </p>
  <p>
  Este municipio mágico es la cuna del carriel, las mejores guarnielerías compiten por la
   calidad en la producción de artículos en cuero, con características únicas como los 
   bordados perfectos, terminados milimétricos y la presencia de colores brillantes que
    nos hacen sentir orgullosos de la estética única del tradicional carriel antioqueño.
  </p>
  <p>
  Jericó es conocido como “La Atenas del Suroeste” ya que desde su fundación,
   tuvo un gran desarrollo económico y cultural, que le valieron para ganar un 
   espacio destacado dentro de los demás municipios de la subregión; está rodeado 
   de un exuberante relieve y atractiva topografía, espacios en los que se puede destacar 
   el Parque Natural Las Nubes y su Jardín Botánico que engalanan sus paisajes, además 
   también es destino de turismo religioso por su Museo de Arte Religioso y sus diferentes 
   iglesias. Jericó, hace parte de la Red Turística de Pueblos Patrimonio de Colombia.
  </p>
 
  
  <div>
    <h1>Qué hacer en Jericó - Antioquia</h1>
    <ul>
      <li>
        <p> Recorrido por las iglesias de Jericó </p>
      </li>
      <li>
        <p>Morro el cristo</p>
      </li>
      <li>
        <p>Casa Natal Santa Laura Montoya Upegui</p>
      </li>
      <li>
        <p>Chorros de Quebradona</p>
      </li>
    </ul>
    <h1>Lugares para visitar</h1>
    <ul>
      <li>
        <p>Centro de historia</p>
      </li>
      <li>
        <p>Musea Casa de la Música</p>
      </li>
      <li>
        <p>Centro cultural Bomarzo </p>
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

    </div>
  )
}

export default Jerico
