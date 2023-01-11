import { Link } from "react-router-dom"

const ButtonChange = ()=>{
    return(
        <>
            <Link to="/cart"><button className="btn btn-outline-success">Ir al Carrito</button></Link>
            <Link to="/"><button className="btn btn-outline-primary">Seguir comprando</button></Link>            
            </>  
    )
}
export default ButtonChange;