import Button from "../../helpers/Button";
import Inputs from "../../helpers/Inputs";
import Title from "../../helpers/Title";
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="container">
      <section id="login" className="form-login1 visible">
        <Title title={"Inicio de Sesión"} />

        <Inputs Type={"text"} Placeholder={"Usuario"} />
        <Inputs Type={"password"} Placeholder={"Contraseña"} />
        
        <Button Class={"buttons"} Text={"Iniciar sesión"}  />
    
      </section>
      <Link to="/register">
        <Button Class={"buttons-two"} Text={"Registrarse"} />
      </Link>
  
    </div>
  );
}

export default Login;
