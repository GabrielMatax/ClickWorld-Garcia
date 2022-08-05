import React, {createContext, useState} from "react";

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartItems, setCartItems]= useState ([]);

    const vaciarCarrito = ()=>{setCartItems([])};

    const vaciarItem=(itemId)=>{
        return setCartItems(cartItems.filter (elemento=>elemento.item.id !==itemId))
    }

    const addItem=(item, quantity)=>{
        const nuevoItem = isInCart(item);
        if (nuevoItem){
            quantity= quantity + nuevoItem.quantity;
            setCartItems(cartItems.splice (cartItems.findIndex ((elemento) =>elemento.item.id===item.id)
                ,1))
        }
        setCartItems ([...cartItems, {item, quantity}])
    }

    const isInCart =(item)=>{
        return cartItems.find ((elemento)=>elemento.item === item)
    }

    const precioTotal =() =>{
        return cartItems.reduce ((prev,actual)=>prev + actual.item.price * actual.quantity, 0)
    }
    const productosTotal =()=>{
        return cartItems.reduce ((prev,actual)=>prev+actual.quantity, 0)
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems, vaciarCarrito,vaciarItem, addItem, precioTotal,productosTotal}}>
           {children}
           </CartContext.Provider>
      );
}
export default CartProvider;

