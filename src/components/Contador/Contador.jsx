import React, {useState} from "react";
import { Link } from "react-router-dom";

const Contador = ({onAdd}) =>{
    const [ contador , setCount] = useState(1);

    const moreCount = ()=>{
        if(contador <10){
           setCount(contador + 1)
        }
       
    }
    const lessCount = ()=>{
        return(contador >"1" ? setCount(contador - 1) : null)
     }

     const Onadd = ()=>onAdd(contador)

    return(
        <center>
        <h3>{contador}</h3>      
        <button className="btn btn-outline-dark" onClick={moreCount}>+</button>
        <Link to="/"><button className="btn btn-outline-dark" onClick={Onadd}>Agregar al carrito</button></Link>        
        <button className="btn btn-outline-dark" onClick={lessCount}>-</button>
        </center>
    )
}

export default Contador