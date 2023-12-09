import React from 'react'
import './Jerico.css'
import jerico_viaje from '../../assets/img/jerico_viaje.jfif'
import { Link } from 'react-router-dom'

const Jerico = () => {
  return (
    <div className='cuerpoo'>
      <>
  <h3 className='tituloo'>Pueblo a descubrir</h3>
  <h1 className='titulooo'>Jericó, el reino del Carriel</h1>
  <a>
    {" "}
    <img id='imagenn'
      src={jerico_viaje}
      alt="parque"
      width={240}
      height={330}
    />{" "}
  </a>
  <aside className='tectoo'>
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
  </aside>
  <div>
    <h1 className='titulooo'>Qué hacer en Jericó - Antioquia</h1>
    <ul id='p-a'>
      <li>
        <p id='p-b'> Recorrido por las iglesias de Jericó </p>
      </li>
      <li>
        <p id='p-b'>Morro el cristo</p>
      </li>
      <li>
        <p id='p-b'>Casa Natal Santa Laura Montoya Upegui</p>
      </li>
      <li>
        <p id='p-b'>Chorros de Quebradona</p>
      </li>
    </ul>
    <h1 className='titulooo'>Lugares para visitar</h1>
    <ul id='p-a'>
      <li>
        <p id='p-b'>Centro de historia</p>
      </li>
      <li>
        <p id='p-b'>Musea Casa de la Música</p>
      </li>
      <li>
        <p id='p-b'>Centro cultural Bomarzo </p>
      </li>
      <section className='piee'>
      <h1 id='p-c'>
        {" "}
        <small> Disfruta la experiencia!!!</small>
         </h1>
         <Link id='p-d' to="/">Volver</Link>
         <Link id='p-d' to="/login" type='button'>Click para ingresar y activar membreseía</Link>
         </section>
      </ul>
  </div>
</>

    </div>
  )
}

export default Jerico
