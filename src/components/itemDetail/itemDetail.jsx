//import { Link } from "react-router-dom"
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Contador from "../Contador/Contador";



const ItemDetail =({product})=>{
  console.log(product);
    return(
        
    <div  style={{marginTop:"40px",height:"650px"}}>
          <Card  style={{ width:'30%',margin:"auto", textAlign:"center",height:"600px" }} key={product.id}>
              <Card.Img variant="top" src={product.imagen} alt='imagen' style={{height:"300px"}} />
            <Card.Body>
            <Card.Title>{`${product.producto} - ${product.categoria}`}</Card.Title>
            <Card.Text >
                <h3 style={{FontZise:"20px"}}>{product.precio}</h3>
                <p>{product.descripcion}</p>
            </Card.Text>        
             < Contador />
           </Card.Body>
         </Card>    
    </div>

    )
}

export default ItemDetail

