import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);
    return ( 
        <>
        <li className="d-flex flex-direction-row">
            <Link to={`/cart`} className="nav-link text-warning px-5"><i className="fa-solid fa-cart-shopping"></i></Link>
            <span style={{color:"white"}} className="ps-2">{cartItems.length}</span>
        </li>
        </>
    );
}
 
export default CartWidget;