import Button from "../../helpers/Button";
import CajaInputs from "../../utils/organ/CajaInputs";
import Title from "../../helpers/Title";
import { Link } from "react-router-dom";
import "./Register.css";
import StateCompo from "../../context/StateCompo";

function Register() {
  // const register = {
  //   Class: "buttons",
  //   Text: "Registrarse",
  //   handleOnclick: "agregarUser",
  // };

  return (
    <div className="container">
      <StateCompo>
        <section id="login" className="form-login visible">
          <Title title={"Registro"} />
          <CajaInputs />

          <Button handleOnclick={"agregarUser"} Class={"buttons"} Text={"Registrarse"} />
          {/* <CajaButtons/> */}
          {/* <Button {...register} /> */}
        </section>
        <Link to="/">
          <Button Class={"buttons-two"} Text={"Volver"} />
        </Link>
      </StateCompo>
    </div>
  );
}

export default Register;
