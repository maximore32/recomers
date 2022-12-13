import React, {useState} from "react";

const Contador = () =>{
    const [ contador , setCount] = useState(1);

    const moreCount = ()=>{
       setCount(contador + 1)
    }
    const lessCount = ()=>{
        return(contador >"1" ? setCount(contador - 1) : null)
     }

    return(
        <center>
        <h3>{contador}</h3>      
        <button className="btn btn-outline-dark" onClick={moreCount}>+</button>
        <button className="btn btn-outline-dark" onClick={lessCount}>Agregar al carrito</button>
        <button className="btn btn-outline-dark" onClick={lessCount}>-</button>
        </center>
    )
}

export default Contador