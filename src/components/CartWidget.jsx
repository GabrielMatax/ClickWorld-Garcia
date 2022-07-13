import { useState } from "react";

const CartWidget = () => {
    const [amount, setAmount] = useState(0);
    return ( 
        <>
        <li className="d-flex flex-direction-row">
            <a href="index.html" className="nav-link text-warning px-5"><i className="fa-solid fa-cart-shopping"></i></a>
            <span className="ps-2">{amount}</span>
        </li>
        </>
    );
}
 
export default CartWidget;