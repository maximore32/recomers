import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useCartContext } from '../../context/CartContext'
const CartWidget = () =>{
    const{totalCant}= useCartContext()
    return(
        <div className='cartw' style={{color:'white'}}>
            {totalCant() > 0 ? totalCant() : null}
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
        
    )

}

export default CartWidget
