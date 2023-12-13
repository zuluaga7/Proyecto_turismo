import React from 'react';
import './Contacto.css';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Contacto() {
  let redireccion = useNavigate();
  const handleEnviar = () => {
    // Aquí puedes realizar la lógica para enviar los datos (AJAX, etc.)
    // ...

    // Simulando un tiempo de espera (puedes eliminar esto en tu aplicación real)
    setTimeout(() => {
      // Muestra la alerta de éxito después de un tiempo simulado
      Swal.fire({
        icon: 'success',
        title: '¡Datos enviados con éxito!',
        text: 'Agradecemos tu mensaje. Nos pondremos en contacto contigo pronto.',
      });
      redireccion('/');
    }, 1000);
     // Simula un segundo de espera (puedes ajustar según necesites)
  };

  return (
    <div id='b-n'>
 <form className="Foormulario">
      <div className="reelleno">
        <h1 className='tiitulo'>¡No dudes en escribirnos!</h1>
        <h4>
          <small className="suib">
            Estaremos atentos para resolver cualquier inquietud.
          </small>
        </h4>
        <section className="iirr">
          <form action="#" id="form-registro">
            <input type="text" placeholder='Nombre' />
            <input type="email" placeholder='Email' />
            <textarea name="" id="o-p" cols="23" rows="1" placeholder='Mensaje'></textarea>
            <section id='j-p'>
              <Link id='p-j' to="/">Volver</Link>
              <button id='p-j' type="button" onClick={handleEnviar}>Enviar</button>
            </section>
          </form>
        </section>
      </div>
    </form>
    </div>
   
  );
}

export default Contacto;
