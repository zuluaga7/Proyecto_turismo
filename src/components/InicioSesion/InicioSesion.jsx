import Swal from "sweetalert2";
import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './InicioSesion.css'
import { useNavigate } from "react-router-dom";


const InicioSesion = () => {
    let redireccion = useNavigate();
    const [usuario, setUsuario] = useState({
        nombreUsuario: '',
        contrasena: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUsuario({
            ...usuario,
            [name]: value
        })
    }

    const autenticar = async (event) => {
        event.preventDefault();
        var estadoFormulario = false;
        if (!usuario.nombreUsuario || !usuario.contrasena) {
            Swal.fire({
                position: "top-center",
                icon: "warning",
                title: "faltan datos",
                showConfirmButton: false,
                timer: 1500
              });
        } else {
            estadoFormulario = true;
        }
        if (estadoFormulario) {
            const respuesta = await axios.get("http://localhost:3001/usuarios?nombreusuario=" + usuario.nombreUsuario);
            if (respuesta.data.length > 0) {
                const contrasenaN = respuesta.data[0].contrasena;
                if (contrasenaN === usuario.contrasena) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Inicio de sesión exitoso",
                        text: "Gracias por activar la Membresía",
                        showConfirmButton: false,
                        timer: 4500
                    });
                    redireccion('/');
                } else {
                    Swal.fire({
                        position: "top-center",
                        icon: "warning",
                        title: "Contraseña incorrecta",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            } else {
                // Usuario no encontrado
                Swal.fire({
                    position: "top-center",
                    icon: "warning",
                    title: "Este usuario no existe",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
    };

    return (
            <>
                <div className='rellleno'>
                    <h1 id='titolo'>Inicio de Sesión</h1>
                    <form className="Formularioo">
                        <section className='irrr'>
                            <input type="text"
                                placeholder='usuario'
                                name='nombreUsuario'
                                value={usuario.nombreUsuario}
                                onChange={handleChange}
                                required
                            />
                            <input type="password"
                                placeholder='contraseña'
                                name='contrasena'
                                value={usuario.contrasena}
                                onChange={handleChange}
                                required
                            />
                            <button id='goo' onClick={autenticar}>go</button>
                        </section>

                    </form>
                    <section className='aaa'>
                        <Link id='a-b' to="/registro" type='button'>Si no tienes una cuenta registrate</Link>
                        <Link id='b-a' to="/">Salir</Link>

                    </section>
                </div>
            </>
          


    );
}
export default InicioSesion