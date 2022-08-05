import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const CartWidget = () => {
    const {cartItems, productosTotal}=useContext (CartContext);
    const numeroCarrito = productosTotal();
    return ( 
        <>
        <li className="d-flex flex-direction-row">
            <Link to="/cart" className="nav-link text-warning px-5">
                <i className="fa-solid fa-cart-shopping"></i>
                <span >{cartItems.length==0 ? "" : numeroCarrito}</span>
            </Link>
        </li>
        </>
    );
}
 
export default CartWidget;