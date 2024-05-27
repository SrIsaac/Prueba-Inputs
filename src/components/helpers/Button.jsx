import { useContext } from "react"
import CounterContext from "../context/CounterContext"

function Button ({handle,Class,Text}){
    return(
        <button onClick={handle}  className={Class} type="button">{Text}</button>
    )
}
export default Button