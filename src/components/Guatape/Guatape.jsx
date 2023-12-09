import React from 'react'
import './Guatape.css'
import { Link } from 'react-router-dom'
import guatape_viaje from '../../assets/img/guatape_viaje.jpg'

const Guatape = () => {
  return (
    <div className='cuerpoo'>
      <>
        <h3 className='tituloo'>Pueblo a descubrir</h3>
        <h1 className='titulooo'>Guatapé y la piedra del peñol</h1>
        <a>
          {" "}
          <img id='imagenn'
            src={guatape_viaje}
            alt="parque"
            width={240}
            height={330}
          />{" "}
        </a>
        <aside className='textoo'>
          <p>
            Como en los cuentos de García Márquez, Guatapé es realismo mágico, un “pueblo en
            la montaña con un pedazo de mar en el corazón”; está ubicado a 81 kilómetros de distancia
            de Medellín y su nombre está relacionado con el recordado cacique Guatapé, que comandaba
            muchas de sus tierras.
          </p>
          <p>
            Es uno de los destinos preferidos por los turistas que visitan Antioquia, ya que cuenta con dos
            grandes atractivos: el embalse que lleva su nombre y también los muy conocidos zócalos. El embalse
            del Río Nare se construyó en 1970 y se convirtió en el espejo de agua más grande de Colombia,
            inundando 6.240 hectáreas que llevaron incluso al traslado de la cabecera urbana a una nueva ubicación;
            todo esto llevó a que las montañas se convirtieran en islas y el paisaje de la región fuera transformado
            para siempre.
          </p>
          <p>
            La estética tradicional y los colores vivos le dan una personalidad coqueta y alegre al municipio.
            Las casas están vestidas con obras de arte llamadas zócalos, en los que se dibujan, esculpen,
            tallan y pintan figuras geométricas, siluetas, momentos y formas que hablan de la idiosincrasia antioqueña.
          </p>
          <p>
            Guatapé está a 1 hora y 49 minutos de Medellín. Visítalo y quedarás sorprendido con su belleza.
          </p>

          <p>
            Para los afiliados a la plataforma tenemos disponible el transporte en vans
            de la empresa junto con los guías locales
          </p>
        </aside>
        <div>
          <h1 className='titulooo'>Qué hacer en Guatape - Antioquia</h1>
          <ul id='p-a'>
            <li>
              <p id='p-b'>Malecón </p>
            </li>
            <li>
              <p id='p-b'>El Peñón de Guatapé</p>
            </li>
            <li>
              <p id='p-b'>Inmersión en Guatapé</p>
            </li>
            <li>
              <p id='p-b'>Calles y parque principal</p>
            </li>
            <li>
              <p id='p-b'>El embalse de Guatapé</p>
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

export default Guatape
