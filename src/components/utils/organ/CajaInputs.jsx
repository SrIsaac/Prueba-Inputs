import Inputs from "../../helpers/Inputs";
import { useContext, useState } from "react";
import CounterContext from "../../context/CounterContext";
function CajaInputs (){

    const {setNombre,
        setApellido,
        setUsuario,
        setCorreo,
        setPassword
}=useContext(CounterContext)



    const Nombre = {
        placeholder: "Nombre",
        type: "text",
        handleOnChange: (e) => {
            setNombre(e.target.value);
        },
      };
      const Apellidos = {
        placeholder: "Apellido",
        type: "text",
        handleOnChange: (e) => {
          setApellido(e.target.value);
        },
      };
    
      const Usuario = {
        placeholder: "Usuario",
        type: "text",
        handleOnChange: (e) => {
          setUsuario(e.target.value);
        },
      };
      const email = {
        placeholder: "Correo Electronico",
        type: "email",
        handleOnChange: (e) => {
          setCorreo(e.target.value);
        },
      };
      const contrasena = {
        placeholder: "Contraseña",
        type: "password",
        handleOnChange: (e) => {
          setPassword(e.target.value);
        },
      };
    return(
        <div>
            <Inputs {...Nombre} />
            <Inputs {...Apellidos} />
            <Inputs {...Usuario} />
            <Inputs {...email} />
            <Inputs {...contrasena} />
        </div>
    )
}
export default CajaInputs;