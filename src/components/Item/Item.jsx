import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Item =({product})=>{
  
    return(
 <main className="cuerpo">
    <div className='boxcontent'style={{ height:"300px" }}>
    <Card style={{ width: '100%',margin:"10px" ,height:"300px" }} key={product.id}>
      <Card.Img style={{ width: '100%',height:"200px" }} variant="top" src={product.imagen} alt='' />
      <Card.Body style={{ backgroundColor:"lavender" }}>
        <Card.Title>{`${product.producto} - ${product.categoria}`}</Card.Title>
        <Card.Text>
          <strong style={{color:"darkred"}}>{"$"+product.precio}</strong>
        </Card.Text>
        <Link to={`/detail/${product.id}`}><Button variant="primary">Detalle</Button></Link>
      </Card.Body>
    </Card>
    </div>
    
 </main>

    )
}
export default Item


  

