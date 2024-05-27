import { useState } from "react";
import CounterContext from "./CounterContext";
import { usuarios } from "../database/DataBase";
import buscarUsuario from "../utils/funtions/buscarUsuario";

function StateCompo({ children }) {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  function agregarUser() {
    if (buscarUsuario(usuario)) {
      console.log(`EL usuario ${usuario} ya existe`);
    } else {
      console.log("el usuario ingresado no existe");
    }
  }

  agregarUser();

  // console.log(`Aqui esta capturando el Nombre ---> ${nombre}`);
  // console.log(`Aqui esta capturando el Apellido ---> ${apellido}`);
  // console.log(`Aqui esta capturando el Usuario ---> ${usuario}`);
  // console.log(`Aqui esta capturando el Correo ---> ${correo}`);
  // console.log(`Aqui esta capturando la Contraseña---> ${password}`);

  return (
    <CounterContext.Provider
      value={{
        setNombre,
        setApellido,
        setUsuario,
        setCorreo,
        setPassword,
        agregarUser,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default StateCompo;
