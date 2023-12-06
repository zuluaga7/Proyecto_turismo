import React,{ useState, createContext } from "react";

const ContextoUsuarios = createContext();

export const Usuarios=({ children }) =>{
const [cuentas, setCuentas] = useState([]);
const registrarCuenta=(nuevaCuenta)=>{
setCuentas([cuentas, nuevaCuenta]);
};
return(
    <ContextoUsuarios.Provider value={{cuentas,registrarCuenta}}>
        {children}
        </ContextoUsuarios.Provider>
)
};
 export default ContextoUsuarios;