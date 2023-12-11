
import './Registrate.css'
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function Registrate() {
  let redireccion = useNavigate()
  /*const [cuentas, setCuentas] = useState([]);
  const [nuevaCuenta, setNuevaCuenta] = useState({
    numeroCntaRgstr: '',
    nombresRegistro: '',
    contraseña: '',
    confirmacionContraseña: '',
    saldoInicial: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevaCuenta((prevCuenta) => ({
      ...prevCuenta,
      [name]: value
    }));
  };

  const registrarCuenta = () => {
    // Verifica que las contraseñas coincidan
    if (nuevaCuenta.contraseña !== nuevaCuenta.confirmacionContraseña) {
      //console.error('Las contraseñas no coinciden');
      alert('las contraseñas no coinciden');
      return;
      }



    // Crea una copia del array de cuentas y agrega la nueva cuenta
    const nuevasCuentas = [cuentas, nuevaCuenta];
    setCuentas(nuevasCuentas);

    // Puedes realizar otras acciones aquí, como enviar los datos al servidor

    // Limpia el formulario después del registro
    setNuevaCuenta({
      numeroCntaRgstr: setNuevaCuenta,
      nombresRegistro: setNuevaCuenta,
      contraseña: setNuevaCuenta,
      confirmacionContraseña: setNuevaCuenta,
      saldoInicial: setNuevaCuenta
    });

    console.log('Cuentas registradas:', nuevasCuentas);
    console.log(cuentas);
    alert('la cuenta se registro con éxito')
  };*/
  const [usuarios, setUsuario] = useState({
    nombreRegistro: '',
    contrasena: '',
    confirmacionContrasena: ''
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setUsuario({
      ...usuarios,
      [name]: value
    });
  };

  const registrarUsuario = (event) => {
    event.preventDefault();
    var mensaje = '';
    var estadoFormulario = false;
    if (!usuarios.nombreRegistro || !usuarios.contrasena) {
      mensaje = 'Faltan datos';
    } else {
      if (usuarios.contrasena != usuarios.confirmacionContrasena) {
        mensaje = 'Las contraseñas no coinciden';
      } else {
        estadoFormulario = true;
      }
    }
    //En vez del alert llaman la función de mostrar notificación
    if (estadoFormulario) {
      guardarUsuario();
    } else {
      notificacion(mensaje);
      
    }
    
  }

  const notificacion = (mensaje) => {
    Swal.fire(mensaje)
}
  
  //Esta función hace el llamado de tipo post a la base de datos para guardar el usuario (No se requiere validar datos)
  const guardarUsuario = () => {
    alert("Hola, enviar datos");
    redireccion('/')
  }
  

  return (
    <div>
      <form className="Formulario">
        <div className="relleno">
          <h1 className='titulo'>¡Ahorra tiempo y dinero!</h1>
          <h4>
            <small className="sub">
              Regístrate para ser el primero en recibir las últimas noticias sobre viajes, tours y mucho más!
            </small>
          </h4>
          <section className="irr">
            <form action="#" id="form-registro">
              {/* Campos de entrada y sus respectivos estados y funciones onChange */}
              {/* <input
                type="text"
                placeholder="Numero De Cuenta"
                id="cuenta-nueva"
                name="numeroCntaRgstr"
                value={nuevaCuenta.numeroCntaRgstr}
                onChange={handleChange}
              /> */}
              <input
                type="text"
                placeholder="Nombre de usuario"
                id="input-usuario-nuevo"
                name="nombreRegistro"
                value={usuarios.nombreRegistro}
                onChange={handleChange}
              />
              <input
                type="password"
                id="password-nuevo"
                placeholder="Contraseña"
                name="contrasena"
                value={usuarios.contrasena}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmacionContrasena"
                id="confirmacion-password-nuevo"
                placeholder="Confirmar Contraseña"
                value={usuarios.confirmacionContrasena}
                onChange={handleChange}
              />
            
              {/* <input
                type="text"
                placeholder="Saldo Inicial"
                id="saldo-inicial-nuevo"
                name="saldoInicial"
                value={nuevaCuenta.saldoInicial}
                onChange={handleChange}

              /> */}
              <section>
              <button id='p-e' type="submit" className="boton-entrar" onClick={registrarUsuario}>
                Registrar cuenta
              </button>
              <Link id='p-f' to="/login">volver</Link>
              </section>
              
            </form>
          </section>
        </div>
      </form>
    </div>
  );
}



// <h2>Hola! <span id="nombre-usuario-pantalla">jose armando benavidez</span></h2>
//                 <button class="cerrar-sesion" id="cerrar-sesion" onclick="alerta()">Cerrar Sesion</button>
//var nombreEnPantalla = document.getElementById("nombre-usuario-pantalla")

// inputUsuario.addEventListener("input", () => {
//   nombreUsuario.textContent = inputUsuario.value
//   nombreEnPantalla.textContent = inputUsuario.value
// })




