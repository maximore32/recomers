import { useContext, useState } from "react";
import { createContext } from "react";

const CartContext= createContext();

export const useCartContext = ()=> useContext(CartContext)


export const CartContextProvedor = ({children}) =>{
    const {cartList,setCartLits}= useState([])

    const addToCart = (prod) =>{
        setCartLits([
            ...cartList,
            prod
        ])
    }

    const vaciarCarrito = ()=>setCartLits([])


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito
        }}>
            {children}

        </CartContext.Provider>
    )
}