import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Item =({product})=>{
  
    return(
 <main className="cuerpo">
    <div className='boxcontent'>
    <Card style={{ width: '100%',margin:"10px" }} key={product.id}>
      <Card.Img variant="top" src={product.imagen} alt='' />
      <Card.Body>
        <Card.Title>{`${product.producto} - ${product.categoria}`}</Card.Title>
        <Card.Text>
          <strong style={{color:"darkred"}}>{product.precio}</strong>
        </Card.Text>
        <Link to={`/detail/${product.id}`}><Button variant="primary">Detalle</Button></Link>
      </Card.Body>
    </Card>
    </div>
    
 </main>

    )
}
export default Item


  

