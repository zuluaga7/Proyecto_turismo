
import './Registrate.css'
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import axios from 'axios';

export default function Registrate() {
  let redireccion = useNavigate()
  
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
      const nuevoUsuario1 = {
        id:v4(),
        nombreusuario:usuarios.nombreRegistro,
        contrasena:usuarios.contrasena
      }
      guardarUsuario(nuevoUsuario1);
    } else {
      notificacion(mensaje);
      
    }
    
  }

  const notificacion = (mensaje) => {
    Swal.fire(mensaje)
}
  
  //Esta función hace el llamado de tipo post a la base de datos para guardar el usuario (No se requiere validar datos)
  const guardarUsuario = async (nuevoUsuario1) => {
    const respuesta = await axios.post("http://localhost:3001/usuarios", nuevoUsuario1);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Cuenta registrada con éxito",
      showConfirmButton: false,
      timer: 2500
     });
    redireccion('/login')
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




