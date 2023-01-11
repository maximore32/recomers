import { useCartContext } from "../../context/CartContext"
import CartList from "../CartList/CartList"
import Formu from "../Formulario/Form"
import NoProducts from "../NoProducts/NoProducts"

const CartContainer = () => {
  const { cartList,totalPrice,totalCant} = useCartContext()
  
  
 
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

