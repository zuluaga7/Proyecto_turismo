import React from 'react'
import './SanRafael.css'
import sanrafael_parque_viaje from '../../assets/img/parqueprincipal_sanrafel_viaje.jpg'
import { Link } from 'react-router-dom'

const SanRafael = () => {
  return (
    <div className='cuerpoo'>

      <h3 className='tituloo'>Pueblo a descubrir</h3>
      <h1 className='titulooo'>San Rafael, embrujo de aguas cristalinas</h1>
      <a >
        {" "}
        <img id='imagenn'
          src={sanrafael_parque_viaje}
          alt="parque"
        />{" "}
      </a>
      <aside className='textoo'>
        <p>
          <strong>San Rafael Ant;</strong> queda a solo 116 km/h de medellin por
          carretera pavimentada. ofrece una temperatura promedio de 28 grados y es
          conocida como la capital hidro-energética de colombia y pueblo luz, por ser
          el único que alberga en su territorio tres centrales hidroeléctricas:
          Guatapé, jaguas y playas.
        </p>
        <p >
          El municipio que se encuentra situado en el oriente antioqueño, a 1000msnm,
          tiene una superficie de 362 kilometros cuadrados de abundante naturaleza. Su
          principal atractivo es hídrico, ya que de las represas cuenta con 90 charcos
          de aguas natural, 8 cascadas con su caminata correspondiente ,
          convirtiéndolo en un lugar ideal para los amantes de las actividades
          náuticas y extremas.
        </p>
        <p >
          Algunas de sus fiestas y eventos más importantes son las Fiestas del río,
          que se realizan en el primer puente festivo de junio, el concurso deportivo
          de pesca, en el mes de julio; las Fiestas del comercio, en agosto y las
          Fiestas patronales en honor a San Rafafel Arcangel, en octubre.
        </p>
        <p >
          Cuenta con una buena infraestructura hotelera, tanto en el casco urbano como
          en la parte rural. La gastronomía del lugar es reconocida, pues sus
          restaurantes ofrecen gran variedad de platos típicos de la región, entre
          ellos <strong>"la casa del pollo".</strong>
        </p>
        <p >
          En cuanto a transporte público, para llegar a San Rafael se pueden utilizar
          Sotrapeñol y Sotrasanvicente, dos empresas de transporte que despachan buses
          desde y hacia Medellín cada media hora, iniciando desde las 4 de la mañana y
          finalizando a las 5:45 de la tarde.
        </p>
        <p>
          Para los afiliados a la plataforma tenemos disponible el transporte en vans
          de la empresa junto con los guías locales
        </p>
      </aside>

      <div>
        <h1 className='titulooo'>Qué hacer en San Rafael - Antioquia</h1>
        <ul id='p-a'>
          <li>
            <p id='p-b'>Tubing </p>
          </li>
          <li >
            <p id='p-b' >Apicultor por un día</p>
          </li>
          <li>
            <p id='p-b'>Caminatas y Ríos</p>
          </li>
          <li>
            <p id='p-b'>Visitas a fincas cafeteras para disfrutar de su proceso artesanal</p>
          </li>
          <li>
            <p id='p-b'>Canyoning</p>
          </li>
        </ul>
        <h1 className='titulooo'>Lugares para visitar</h1>
        <ul id='p-a'>
          <li> 
            <p id='p-b'>Cerro pan de azúcar</p>
          </li>
          <li>
            <p id='p-b'>Cascada del indio</p>
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
    </div>
  )
}

export default SanRafael
