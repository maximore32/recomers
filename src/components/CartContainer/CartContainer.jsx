import { useCartContext } from "../../context/CartContext"

const CartContainer = () => { 

  const { cartList, vaciarCarrito,totalPrice,itemDelet } = useCartContext()
  console.log(cartList)
  return (
    <div>
      { cartList.map(product => <li key={product.id}>
            <img src={product.imagen} alt="" className="w-25"/>
            {product.producto} - Cantidad: {product.cantidad} - Precio: {product.precio}
            <button className="btn" onClick={()=>itemDelet(product.id)}> X </button>
          </li>) 
      }
      {totalPrice()>0 ?<label>El total es : {totalPrice()}</label>:null}
      <br></br>
      <button 
        className="btn btn-outline-danger"
        onClick={vaciarCarrito}
      >
        Vaciar Carrito
      </button>
    </div>
  )
}

export default CartContainer;
