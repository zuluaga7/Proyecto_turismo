import React from 'react'
import './Guatape.css'
import { Link } from 'react-router-dom'
import sanrafael_parque_viaje from '../../assets/img/parqueprincipal_sanrafel_viaje.jpg'

const Guatape = () => {
  return (
    <div>
      <>
      <h3>Pueblo a descubrir</h3>
  <h1>San Rafael, embrujo de aguas cristalinas</h1>
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
    <strong>San Rafael Ant; queda a solo 116 km/h de medellin</strong> por
    carretera pavimentada. ofrece una temperatura promedio de 28 grados y es
    conocida como la capital hidro-energética de colombia y pueblo luz, por ser
    el único que alberga en su territorio tres centrales hidroeléctricas:
    Guatapé, jaguas y playas.
  </p>
  <p>
    El municipio que se encuentra situado en el oriente antioqueño, a 1000msnm,
    tiene una superficie de 362 kilometros cuadrados de abundante naturaleza. Su
    principal atractivo es hídrico, ya que de las represas cuenta con 90 charcos
    de aguas natural, 8 cascadas con su caminata correspondiente ,
    convirtiéndolo en un lugar ideal para los amantes de las actividades
    náuticas y extremas.
  </p>
  <p>
    Algunas de sus fiestas y eventos más importantes son las Fiestas del río,
    que se realizan en el primer puente festivo de junio, el concurso deportivo
    de pesca, en el mes de julio; las Fiestas del comercio, en agosto y las
    Fiestas patronales en honor a San Rafafel Arcangel, en octubre.
  </p>
  <p>
    Cuenta con una buena infraestructura hotelera, tanto en el casco urbano como
    en la parte rural. La gastronomía del lugar es reconocida, pues sus
    restaurantes ofrecen gran variedad de platos típicos de la región, entre
    ellos <strong>"la casa del pollo".</strong>
  </p>
  <p>
    En cuanto a transporte público, para llegar a San Rafael se pueden utilizar
    Sotrapeñol y Sotrasanvicente, dos empresas de transporte que despachan buses
    desde y hacia Medellín cada media hora, iniciando desde las 4 de la mañana y
    finalizando a las 5:45 de la tarde.
  </p>
  <p>
    Para los afiliados a la plataforma tenemos disponible el transporte en vans
    de la empresa junto con los guías locales
  </p>
  <div>
    <h1>Qué hacer en San Rafael - Antioquia</h1>
    <ul>
      <li>
        <p>Tubing </p>
      </li>
      <li>
        <p>Apicultor por un día</p>
      </li>
      <li>
        <p>Caminatas y Ríos</p>
      </li>
      <li>
        <p>Visitas a fincas cafeteras para disfrutar de su proceso artesanal</p>
      </li>
      <li>
        <p>Canyoning</p>
      </li>
    </ul>
    <h1>Lugares para visitar</h1>
    <ul>
      <li>
        <p>Cerro pan de azúcar</p>
      </li>
      <li>
        <p>Cascada del indio</p>
      </li>
      <li>
        <p>Finca la </p>
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

export default Guatape
