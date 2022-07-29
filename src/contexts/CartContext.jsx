import React, {createContext, useState} from "react";
import Cart from "../components/Cart";

export const CartContext = createContext();

const CartProvider = ({children}) => {


    const [cartItems, setCartItems]= useState ([]);
    

    return (
        <CartContext.Provider value={{cartItems, setCartItems}}>
           {children}
        </CartContext.Provider>
      );
}
 
export default CartProvider;
