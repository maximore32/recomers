import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useCartContext } from '../../context/CartContext';
import ButtonChange from '../ButtonChange/ButtonChange';
import Contador from "../Contador/Contador";
import swal from 'sweetalert';




const ItemDetail =({product})=>{
  const[isButton,setIsButton ]=useState(true)
  const{addToCart} = useCartContext()
  

  const onAdd = (cantidad)=>{swal("Listo!", "Cantidad seleccionada : "+cantidad, "success");    
    addToCart({...product,cantidad})
    setIsButton(false)

  }
  
    return(
        
    <div  style={{marginTop:"40px",height:"650px"}}>
          <Card  style={{ width:'40%',margin:"auto", textAlign:"center",height:"650px" }} key={product.id}>
              <Card.Img variant="top" src={product.imagen} alt='imagen' style={{height:"350px"}} />
            <Card.Body style={{ backgroundColor:"lavender" }}>
            <Card.Title><h2>{`${product.producto} - ${product.categoria}`}</h2></Card.Title>
            <Card.Text >
                <h3 style={{FontZise:"20px"}}><strong>{"$"+product.precio}</strong></h3>
                <p>{product.descripcion}</p>
            </Card.Text>
            {isButton ? <Contador onAdd={onAdd} />
            :
            <ButtonChange />          
            }             
           </Card.Body>
         </Card>    
    </div>

    )
}

export default ItemDetail

