import { usuarios } from "../../database/DataBase"

function buscarUsuario(usuario) {
    return usuarios.some((usu) => usu.user === usuario);
  }

export default buscarUsuario