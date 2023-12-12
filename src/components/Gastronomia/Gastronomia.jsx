import React from 'react'
import './Gastronomia.css'
import { Link } from 'react-router-dom'

function Gastronomia() {
  return (
    <div className='ay'>
      <h1 id='b-c'>Gastronomía Paisa</h1>
      <p>El departamento de Antioquia, la tierra de la cultura paisa, innovación e
        impresionantes escenarios naturales. El departamento de Antioquia hace parte de los Andes Occidentales Colombianos.
        La región de escenarios majestuosos como montañas que destilan olor a café, pueblos coloridos y nieves perpetuas.
        El territorio donde se vive un clima primaveral y su amable gente te hará sentir como en casa.</p>
      <h3 id='b-c'>Origen de la gastronomía Antioqueña</h3>
      <p>La gastronomía antioqueña es una mezcla de la gastronomía de varias culturas. Los primeros habitantes de la región,
        en épocas precolombinas, ya conocían algunos de los alimentos que forman parte de los platos antioqueños actuales. El maíz, el fríjol, la yuca, algunos tubérculos,
        algunas hortalizas, ciertas hierbas aromáticas, especias, frutas silvestres y carnes de animales de caza y pesca ya hacían parte de la dieta de los pueblos que habitaban la región,
        antes de la llegada de los españoles. Con la colonización, llegaron alimentos que eran típicos de otras culturas, aguacate de América Central, embutidos de cerdo de Europa,
        plátano del sudeste asiático, arroz del extremo oriental de Asia, etc. Además de los alimentos, el europeo trajo consigo costumbres diferentes, lo que hizo que la cocina de la región
        se enriqueciera con formas diferentes de cortar la carne, medir las cantidades y servir las porciones.​</p>
      <h3 id='b-c'>Importancia de la gastronomía Antioqueña</h3>
      <p>Los especialistas en el tema ven en la gastronomía antioqueña una célula independiente con respecto al resto de la gastronomía colombiana. Según ellos,
        “la célula gastronómica es la región, y no la nación”. En otras palabras, la población local, de forma general, “hace de las recetas con las que creció,
        uno de los símbolos más apreciados de su identidad regional”.Este hecho se da principalmente porque “Colombia es un país de regiones y ello hace que cada
        región posea características específicas y costumbres culinarias propias”.</p>
      <section id='a-d'>

        <Link id='p-y' to="/">Volver</Link>
      </section>
    </div>
  )
}

export default Gastronomia
