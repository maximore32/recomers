import { useContext, useState, createContext } from "react";


const CartContext= createContext([]);

export const useCartContext = ()=> useContext(CartContext)


export const CartContextProvedor = ({children}) =>{
    const[cartList,setCartLits]= useState([])

    const addToCart = (prod) =>{
        const indice = cartList.findIndex( produc => produc.id === prod.id)
        if(indice === -1){
            setCartLits([
            ...cartList,
            prod
        ])
        }
        else{
            cartList[indice].cantidad += prod.cantidad
            setCartLits([...cartList])
        }


        
    }

    const vaciarCarrito = ()=>setCartLits([])
    const totalCant=()=> cartList.reduce((count,product)=>count+=product.cantidad , 0)
    const totalPrice=()=> cartList.reduce((count,product)=>count+=(product.cantidad * product.precio) , 0)
    const itemDelet = (id) => setCartLits(cartList.filter(product => product.id !== id))



    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            totalCant,
            totalPrice,
            itemDelet
        }}>
            {children}

        </CartContext.Provider>
    )
}