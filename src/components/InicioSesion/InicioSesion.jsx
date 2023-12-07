import React, { useState } from 'react';
import { Link, Router, Routes } from 'react-router-dom'
import './InicioSesion.css'
export default function InicioSesion() {
    return (
        <>
               <div className='rellleno'>
            <h1 id='titolo'>Inicio de sesión</h1>
            <form className="Formularioo">
                <section className='irrr'>
                <input type="text" 
                placeholder='usuario'
                />
                <input type="password"
                placeholder='contraseña'
                />
                <button id='goo'>go</button>
                </section>
                
            </form>
            <section className='aaa'>
            <Link id='a-b' to="/registro" type='button'>Si no tienes una cuenta registrate</Link>
            <Link id='b-a' to="/">Volver</Link>

            </section>
            </div>
        </>
        
    );
}
// export default function IniciarSesion({ cuentasRegistradas, onLogin }) {
//   const [usuario, setUsuario] = useState('');
//   const [contraseña, setContraseña] = useState('');

//   const handleInicioSesion = () => {
//     // Verifica si el usuario y la contraseña coinciden con alguna cuenta registrada
//     const usuarioValido = cuentasRegistradas.find(
//       (cuenta) => cuenta.nombresRegistro === usuario && cuenta.contraseña === contraseña
//     );

//     if (usuarioValido) {
//       // Usuario válido, puedes realizar acciones adicionales si es necesario
//       console.log('Inicio de sesión exitoso');

//       // Llama a la función onLogin para notificar al componente padre sobre el inicio de sesión
//       onLogin(usuarioValido);

//       // Limpia los campos del formulario
//       setUsuario('');
//       setContraseña('');
//     } else {
//       // Usuario no válido, puedes manejar esto de acuerdo a tus necesidades
//       console.error('Credenciales incorrectas');
//     }
//   };

//   return (
//     <form action="#" id="formulario-inicio-sesion">
//       <input
//         type="text"
//         placeholder="Usuario"
//         id="input-usuario"
//         value={usuario}
//         onChange={(e) => setUsuario(e.target.value)}
//       />
//       <input
//         type="password"
//         name="password"
//         id="password"
//         placeholder="Contraseña"
//         value={contraseña}
//         onChange={(e) => setContraseña(e.target.value)}
//       />
//       <button
//         type="button"
//         className="boton-entrar"
//         id="boton-inicio"
//         onClick={handleInicioSesion}
//       >
//         Iniciar Sesión
//       </button>
//     </form>

//   );
// }
