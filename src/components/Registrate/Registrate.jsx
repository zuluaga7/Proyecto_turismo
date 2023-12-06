
import './Registrate.css'
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Registrate() {
  const [cuentas, setCuentas] = useState([]);
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
  };

  return (
    <div>
      <form className="Formulario">
        <div className="relleno">
          <h1>¡Ahorra tiempo y dinero!</h1>
          <h4>
            <small className="sub">
              Regístrate para ser el primero en recibir las últimas noticias sobre viajes, tours y mucho más!
            </small>
          </h4>
          <section className="irr">
            <form action="#" id="form-registro">
              {/* Campos de entrada y sus respectivos estados y funciones onChange */}
              <input
                type="text"
                placeholder="Numero De Cuenta"
                id="cuenta-nueva"
                name="numeroCntaRgstr"
                value={nuevaCuenta.numeroCntaRgstr}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Nombres de usuario"
                id="input-usuario-nuevo"
                name="nombresRegistro"
                value={nuevaCuenta.nombresRegistro}
                onChange={handleChange}
              />
              <input
                type="password"
                id="password-nuevo"
                placeholder="Contraseña"
                name="contraseña"
                value={nuevaCuenta.contraseña}
                onChange={handleChange}
              />
              <input
                type="password"
                name="confirmacionContraseña"
                id="confirmacion-password-nuevo"
                placeholder="Confirmar Contraseña"
                value={nuevaCuenta.confirmacionContraseña}
                onChange={handleChange}
              />
              <span id="confirmacion-clave" />
              <input
                type="text"
                placeholder="Saldo Inicial"
                id="saldo-inicial-nuevo"
                name="saldoInicial"
                value={nuevaCuenta.saldoInicial}
                onChange={handleChange}

              />
              <button type="button" className="boton-entrar" onClick={registrarCuenta}>
                Registrar cuenta
              </button>
              <Link to="/">Volver</Link>
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




