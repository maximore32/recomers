import { useCartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import Formu from "../Formulario/Form"
import NoProducts from "../NoProducts/NoProducts"

const CartContainer = () => {
  const { cartList,totalPrice,totalCant} = useCartContext()
  console.log(cartList)
  
 
  return (
    
    <div style={{width:"100%", height:"550px"}}>
      {totalCant()>0 ? cartList.map(product => <CartList product={product} key={product.id}/>)
       :<NoProducts />}
      {totalPrice()>0 ?<label style={{marginTop:"20px",width:"100%",textAlign:"center"}}><strong style={{padding:"10px",borderRadius:"50%",color:"lightyellow",backgroundColor:"black"}}>TOTAL : {"$"+totalPrice()}</strong></label>:null}
      {!totalCant()>0 ? null :<Formu />}
           
    </div>
  )
}

export default CartContainer;

/*<li key={product.id}>
<img src={product.imagen} alt="" className="w-25"/>
{product.producto} - Cantidad: {product.cantidad} - Precio: {product.precio}
<button className="btn" onClick={()=>itemDelet(product.id)}> X </button>
</li>*/

 // actualizar 
    // const queryUpdate = doc(db, 'productos', '25Z55SGnHif7Ab1WHxBk') // 
    // updateDoc(queryUpdate, {
    //   stock: 100
    // })
    // .then( () => console.log('terminó la actulaización'))