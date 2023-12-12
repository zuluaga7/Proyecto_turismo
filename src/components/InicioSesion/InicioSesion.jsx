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
        var mensaje = '';
        var estadoFormulario = false;
        if (!usuario.nombreUsuario || !usuario.contrasena) {
            mensaje = "Faltan datos";
        } else {
            estadoFormulario = true;
        }

        if (estadoFormulario) {
            const respuesta = await axios.get("http://localhost:3001/usuarios?nombreusuario=" + usuario.nombreUsuario);
            const contrasenaN = respuesta.data[0].contrasena;
            if (contrasenaN == usuario.contrasena) {
                console.log("inicio de sesión correcto")
                redireccion("/");
            } else {
                console.log("Datos incorrectos")

            }
        }
    }
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