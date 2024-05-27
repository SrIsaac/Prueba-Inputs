import Button from "../../helpers/Button"
import { useContext } from "react";
import CounterContext from "../../context/CounterContext";



function CajaButtons(){
    const {agregarUser}=useContext(CounterContext)
    // const register = {
    //     Class: "buttons",
    //     Text: "Registrarse",
    //     handleOnclick :agregarUser
    // }
    return(
        <Button handleOnclick={agregarUser} Class={"buttons"} Text={"Registrarse"} />
        // <Button {...register} />
    )
} 
export default CajaButtons