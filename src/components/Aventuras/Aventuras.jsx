import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Aventuras = () => {
  const redireccion = useNavigate();

  const [viajes, setViajes] = useState({
    nombreDestino: '',
    confirmarDestino: ''
  });

  const [estadoFormulario, setEstadoFormulario] = useState(/* valor inicial */);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setViajes({
      ...viajes,
      [name]: value
    });
  };

  const registrarViaje = async (event) => {
    event.preventDefault();

    if (!viajes.nombreDestino || !viajes.confirmarDestino) {
      notificacion('Faltan datos');
    } else {
      const nuevoViaje = {
        id: uuidv4(),
        nombreDestino: viajes.nombreDestino,
        confirmarDestino: viajes.confirmarDestino
      };

      try {
        await axios.post("http://localhost:3001/viajes", nuevoViaje);
        notificacion('Viaje registrado con éxito', 'success');
        redireccion('/');
        agregarAlCarrito(nuevoViaje);
      } catch (error) {
        console.error('Error al realizar la solicitud POST:', error);
        notificacion('Error al realizar la reserva del viaje', 'error');
      }
    }
  };

  const notificacion = (mensaje, tipo = 'error') => {
    Swal.fire({
      icon: tipo,
      title: mensaje,
      showConfirmButton: false,
      timer: 2500
    });
  };
  const agregarAlCarrito = async (nuevoViaje) => {
    try {
      const respuesta = await axios.post("http://localhost:3001/viajes", nuevoViaje);
      const nuevoCarrito = [...carrito, { nombre: nombreViaje }];
      setCarrito(nuevoCarrito);
      Swal.fire({
        title: "jum x",
        text: "¿Estás seguro de agregar el viaje?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, estoy seguro!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Confirmado!",
            text: "Viaje agregado con éxito.",
            icon: "success"
          });
        } 
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Manejar errores específicos de Axios
        if (error.response) {
          // El servidor respondió con un código de estado que no está en el rango 2xx
          console.error('Error de respuesta del servidor:', error.response.data);
        } else if (error.request) {
          // La solicitud fue realizada pero no se recibió respuesta
          console.error('No se recibió respuesta del servidor:', error.request);
        } else {
          // Error durante la configuración de la solicitud
          console.error('Error de configuración de la solicitud:', error.message);
        }
      } else {
        // Otros tipos de errores
       console.error('Error al gar al carrito:', error);
      }
    
     notificacion('Error al agregar el viaje al carrito', 'error');
     // notificacion('Viaje agregado con éxito', 'success');
    }
    
  };
  


  // Estado para almacenar los viajes en el carrito
  const [carrito, setCarrito] = useState([]);

  return (
    <div className='ay'>
      <h1 id='b-c'>¿Qué hacer en Antioquia? 5 Planes Turísticos Imperdibles</h1>
      <p>Ir a Antioquia, es una de las mejores decisiones que puedes tomar si
        quieres visitar lo mejor de Colombia. Esto debido a que este departamento
        cuenta con una extensa variedad de destinos turísticos que pueden adaptarse a
        la perfección a todo tipo de viajes. No te pierdas nuestras recomendaciones sobre
        qué hacer en Antioquia. </p>

      <h3 id='b-h'>1. Reserva un Tour al Peñol y Guatapé</h3>
      <p>Guatapé es, sin duda, uno de los lugares turísticos más interesantes de Antioquia y
        con este tour, podrás disfrutar de lo mejor que ofrece este destino. Este es un plan de viaje que te permitirá recorrer y conocer la réplica de un antiguo pueblo colombiano y conocer
        una de las represas artificiales más grandes e importantes del país.</p>
      <p>El viaje incluye recorrido en barco y guía por profesionales, así como la visita a los
        lugares más emblemáticos de esta región, por lo que es uno de los planes en Antioquia que no
        te puedes perder.</p>
      <button id='buton' onClick={() => agregarAlCarrito('Tour al Peñol y Guatapé')}>Agregar al Carrito</button>
      <h3 id='b-h'>2. Visita el pueblo de Santa Fe de Antioquia</h3>
      <p>Antioquia es un destino que posee muchos pueblos y regiones coloniales, los cuales aún mantienen en esencia y espíritu,
        todas esas costumbres y tradiciones. Por esta razón,  es bastante común que quienes quieren conocer de
        cerca la historia colombiana, viajen a los pueblos coloniales de Antioquia los cuales se sitúan a unas cuantas horas de Medellín,
        capital del departamento</p>
      <p>El Tour, incluye entre otras cosas, el transporte ida y regreso, el desayuno y almuerzo,
        el acceso al museo y parque acuático, el acompañamiento de un guía experto y
        la visita al Puente de Occidente.</p>
      <button id='buton' onClick={() => agregarAlCarrito('Visita al pueblo de Santa Fe de Antioquia')}>Agregar al Carrito</button>
      <h3 id='b-h'>3. Realiza un Tour en Jardín, Antioquia</h3>
      <p>Otro de los planes para hacer en Antioquia consiste en un viaje un poco más simple, el cual te recomendamos tomar si estás visitando Jardín,
        Antioquia y no sabes a dónde ir. Se trata de un tour que te llevará por los lugares más icónicos y populares del municipio, en el cual podrás
        conocer todo lo relacionado con su arquitectura, tradiciones, comercios locales e historia.</p>
      <p>Este tour tiene una duración de 2 horas y media e incluye el acompañamiento de un guía turístico, que te contará todos los secretos de los lugares
        que visitarás.</p>
      <button id='buton' onClick={() => agregarAlCarrito('Tour en Jardín, Antioquia')}>Agregar al Carrito</button>
      <h3 id='b-h'>4. Haz un tour a la Reserva Cañón del Río Claro desde Medellín</h3>
      <p> Este viaje es uno de los mejores planes turísticos de Antioquia pues te llevará a la Reserva Natural Cañón Del Río Claro,
        uno de los espacios naturales más importantes y protegidos de Antioquia. Se trata de un viaje perfecto para aquellos que quieren
        una aventura corta, pues tiene una duración de 6 horas. El lugar de salida es Medellín a las 4:30 am y aunque parece bastante temprano,
        te aseguramos que el recorrido vale la pena.</p>
      <p>Pero esto no es todo. El Tour también incluye desayuno y almuerzo, acceso a la reserva, transporte de ida y regreso, acompañamiento y
        asesoría de guías profesionales, seguro de viajes, entre otros.</p>
      <button id='buton' onClick={() => agregarAlCarrito('Tour a la Reserva Cañón del Río Claro desde Medellín')}>Agregar al Carrito</button>
      <h3 id='b-h'>5. Visita el Parque Temático Hacienda Nápoles</h3>
      <p> Viajar en familia es fantástico si estás en Antioquia, puesto que hay muchos lugares con actividades interesantes y entretenidas, tanto para niños,
        como también para adultos. Ahora bien, una de esas actividades familiares que vale la pena realizar al lado de tus seres queridos es el el Tour a la
        hacienda Nápoles saliendo desde Medellín; el cual tiene una duración de 6 horas-</p>
      <p>Este Tour cubre los gastos del transporte, pasaporte SAFARI (uno de los más completos), el desayuno, guía y asesoramiento por profesionales, seguro de viajes, entre otros.</p>
      <button id='buton' onClick={() => agregarAlCarrito('Tour a la hacienda Nápoles')}>Agregar al Carrito</button><form onSubmit={registrarViaje}>
        <label htmlFor="nombreDestino">Nombre del Destino:</label>
        <input
          type="text"
          id="nombreDestino"
          name="nombreDestino"
          value={viajes.nombreDestino}
          onChange={handleChange}
        />

        <label htmlFor="confirmarDestino">Confirmar Destino:</label>
        <input
          type="text"
          id="confirmarDestino"
          name="confirmarDestino"
          value={viajes.confirmarDestino}
          onChange={handleChange}
        />

        <button type="submit">Registrar Viaje</button>
      </form>
    </div>
  );
};

export default Aventuras;

// import { Link } from 'react-router-dom';
// import './Aventuras.css';
// // export default Aventuras
// import React, { useState } from 'react';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';



// const Aventuras = () => {
//  // Estado para almacenar los viajes en el carrito
//  const [carrito, setCarrito] = useState([]);

//  // Función para agregar un viaje al carrito
//  const agregarAlCarrito = (nombreViaje) => {
//    // Copia el estado actual del carrito y agrega el nuevo viaje
//    const nuevoCarrito = [...carrito, { nombre: nombreViaje }];
//    setCarrito(nuevoCarrito);
//    Swal.fire({
//     title: nombreViaje,
//     text: "¿Estás seguro de agregar el viaje?",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Sí, estoy seguro!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Confirmado!",
//         text: "Viaje agregado con éxito.",
//         icon: "success"
//       });
//     }
//   });
  
//  };
//   return (
//     <div className='ay'>
//          <h1 id='b-c'>¿Qué hacer en Antioquia? 5 Planes Turísticos Imperdibles</h1>
//       <p>Ir a Antioquia, es una de las mejores decisiones que puedes tomar si
//          quieres visitar lo mejor de Colombia. Esto debido a que este departamento 
//          cuenta con una extensa variedad de destinos turísticos que pueden adaptarse a
//           la perfección a todo tipo de viajes. No te pierdas nuestras recomendaciones sobre 
//           qué hacer en Antioquia. </p>
         
//        <h3 id='b-h'>1. Reserva un Tour al Peñol y Guatapé</h3>
//        <p>Guatapé es, sin duda, uno de los lugares turísticos más interesantes de Antioquia y 
//          con este tour, podrás disfrutar de lo mejor que ofrece este destino. Este es un plan de viaje que te permitirá recorrer y conocer la réplica de un antiguo pueblo colombiano y conocer
//           una de las represas artificiales más grandes e importantes del país.</p>
//        <p>El viaje incluye recorrido en barco y guía por profesionales, así como la visita a los 
//          lugares más emblemáticos de esta región, por lo que es uno de los planes en Antioquia que no 
//          te puedes perder.</p>
//           <button id='buton' onClick={() => agregarAlCarrito('Tour al Peñol y Guatapé')}>Agregar al Carrito</button>
//         <h3 id='b-h'>2. Visita el pueblo de Santa Fe de Antioquia</h3>
//        <p>Antioquia es un destino que posee muchos pueblos y regiones coloniales, los cuales aún mantienen en esencia y espíritu,
//            todas esas costumbres y tradiciones. Por esta razón,  es bastante común que quienes quieren conocer de
//             cerca la historia colombiana, viajen a los pueblos coloniales de Antioquia los cuales se sitúan a unas cuantas horas de Medellín, 
//              capital del departamento</p>
//              <p>El Tour, incluye entre otras cosas, el transporte ida y regreso, el desayuno y almuerzo,
//                el acceso al museo y parque acuático, el acompañamiento de un guía experto y 
//                 la visita al Puente de Occidente.</p>
//                 <button id='buton' onClick={() => agregarAlCarrito('Visita al pueblo de Santa Fe de Antioquia')}>Agregar al Carrito</button>
//         <h3 id='b-h'>3. Realiza un Tour en Jardín, Antioquia</h3>
//          <p>Otro de los planes para hacer en Antioquia consiste en un viaje un poco más simple, el cual te recomendamos tomar si estás visitando Jardín, 
//            Antioquia y no sabes a dónde ir. Se trata de un tour que te llevará por los lugares más icónicos y populares del municipio, en el cual podrás 
//            conocer todo lo relacionado con su arquitectura, tradiciones, comercios locales e historia.</p>
//           <p>Este tour tiene una duración de 2 horas y media e incluye el acompañamiento de un guía turístico, que te contará todos los secretos de los lugares 
//           que visitarás.</p>
//           <button id='buton' onClick={() => agregarAlCarrito('Tour en Jardín, Antioquia')}>Agregar al Carrito</button>
//             <h3 id='b-h'>4. Haz un tour a la Reserva Cañón del Río Claro desde Medellín</h3>
//            <p> Este viaje es uno de los mejores planes turísticos de Antioquia pues te llevará a la Reserva Natural Cañón Del Río Claro,
//              uno de los espacios naturales más importantes y protegidos de Antioquia. Se trata de un viaje perfecto para aquellos que quieren
//               una aventura corta, pues tiene una duración de 6 horas. El lugar de salida es Medellín a las 4:30 am y aunque parece bastante temprano, 
//                te aseguramos que el recorrido vale la pena.</p>
//                <p>Pero esto no es todo. El Tour también incluye desayuno y almuerzo, acceso a la reserva, transporte de ida y regreso, acompañamiento y 
//                  asesoría de guías profesionales, seguro de viajes, entre otros.</p>
//                  <button id='buton' onClick={() => agregarAlCarrito('Tour a la Reserva Cañón del Río Claro desde Medellín')}>Agregar al Carrito</button>
//                  <h3 id='b-h'>5. Visita el Parque Temático Hacienda Nápoles</h3>
//             <p> Viajar en familia es fantástico si estás en Antioquia, puesto que hay muchos lugares con actividades interesantes y entretenidas, tanto para niños, 
//             como también para adultos. Ahora bien, una de esas actividades familiares que vale la pena realizar al lado de tus seres queridos es el el Tour a la
//             hacienda Nápoles saliendo desde Medellín; el cual tiene una duración de 6 horas-</p>
//               <p>Este Tour cubre los gastos del transporte, pasaporte SAFARI (uno de los más completos), el desayuno, guía y asesoramiento por profesionales,
//                  seguro de viajes, entre otros.</p>
//                  <button id='buton' onClick={() => agregarAlCarrito('Visita al Parque Temático Hacienda Nápoles')}>Agregar al Carrito</button>

//       <section id='a-d'>
//         <Link id='p-z' to="/">Volver</Link>
//       </section>
//     </div>
//   );
// }

// export default Aventuras;