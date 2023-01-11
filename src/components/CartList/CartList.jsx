import Button from "react-bootstrap/esm/Button"
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from "../../context/CartContext"

const CartList = ({product}) =>{
    const {itemDelet } = useCartContext()
    return(
        <main style={{ width:"100%", height:"auto"}}> 
            <div style={{ width: '30%',margin:"0 auto", float:"left",marginLeft:"30px" }}>
        <div>
        <Card style={{ width: '35%',margin:"8px" ,display:"-webkit-inline-box" }} key={product.id}>
          <Card.Img style={{ width: '100%',height:"200px" }} variant="top" src={product.imagen} alt='' />
          <Card.Body style={{ backgroundColor:"lavender" }}>
            <Card.Title>{`${product.producto} `}</Card.Title>
            <Card.Text>
                <strong>{`Cantidad: ${product.cantidad}`}</strong>
                <br></br>
                
              <strong style={{color:"darkred"}}>{"Precio : $"+product.precio}</strong>
            </Card.Text>
            
          </Card.Body>
          <Button variant="primary"style={{ width:"50px",height:"200px" }} onClick={()=>itemDelet(product.id)}><FontAwesomeIcon icon={faTrashCan} /></Button>
        </Card>
        </div>
        
     </div>
     </main>
         
    )
}

export default CartList