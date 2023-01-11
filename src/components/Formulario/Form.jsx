import { addDoc, collection, getFirestore,} from "firebase/firestore"
import { useState } from "react"
import swal from 'sweetalert';
import { useCartContext } from "../../context/CartContext"


const Formu = ()=>{
    const { cartList, vaciarCarrito} = useCartContext()
    const [orderID, setOrderID] = useState()
    const [dataForm, setDataForm] = useState({
        name: "",
        email: "",
        phone: ""
      })

      const generarOrden = (evt) => {
        evt.preventDefault()
    
        const order = {}
        // validaciones
        order.buyer = dataForm
    
        order.item = cartList.map( ({ producto, id, precio,cantidad }) => ({producto, id, precio,cantidad}) )
        
     
        const db = getFirestore()
        const queryOrder = collection(db, 'orders')  
    
        addDoc(queryOrder, order)        
        .then( resp => {
          console.log("resp",resp)
          swal("Listo!", "Numero unico de orden : "+resp.id, "success");
          
          setOrderID(resp.id)
          })
        .catch(err => console.log(err))
        .finally(()=> {
          vaciarCarrito()
          setDataForm({
            name: "",
            email: "",
            phone: ""
          })
          
          
        })   
      }
      const handleOnChange = (e) => {
      setDataForm({
        ...dataForm,
        [e.target.name]: e.target.value      
      })
    }

    return(      
        <form onSubmit={generarOrden} style={{marginTop:"40px", padding:"10px",backgroundColor:"lightgray", textAlign:"center"}}>
        
          <label htmlFor="name" className="formulabel">Nombre Completo</label>
          <input 
            type="text" 
            className="form-control" 
            name="name" 
            value={dataForm.name}
            placeholder="Ingrese el nombre" required
            onChange={handleOnChange}
            

          />
          <label htmlFor="email" className="formulabel">emial</label>
          <input 
            type="email" 
            className="form-control" 
            name="email" 
            value={dataForm.email}
            placeholder="Ingrelse el email" required
            onChange={handleOnChange}
          />
          <label htmlFor="tel" className="formulabel">Telefono</label>
          <input 
            type="number" 
            className="form-control" 
            name="phone" 
            value={dataForm.phone}
            placeholder="Ingrelse el tel" required
            onChange={handleOnChange}
          />          
        
        <div style={{ display:"flex", marginTop:"10px" }}>
          <button 
          className="btn btn-outline-success"
        >
          Generar Orden 
        </button>
        <button className="btn btn-outline-danger" onClick={vaciarCarrito}
      >Vaciar Carrito</button>
        </div>       
      </form>
    )
}
export default Formu