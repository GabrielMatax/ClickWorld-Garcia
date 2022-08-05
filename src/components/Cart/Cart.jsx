import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./cart.css";

const Cart = () => {
    const {cartItems,vaciarCarrito, vaciarItem, precioTotal} =useContext(CartContext);
    const precioFinal=precioTotal();
    
        return ( cartItems.length >0 ?
        <> 
        <div className="cartDiv">
        {cartItems.map(detalle =>
                      <div className="cartInfo">
                          <h3 > {detalle.item.title}</h3>
                          <p>PRECIO: ${detalle.item.price}</p>
                          <p> Cantidad: {detalle.quantity}</p>
                          <button onClick={()=>vaciarItem(detalle.item.id)}>Eliminar</button>
                       </div>
        )}
          <h1> Total: $ {precioFinal}</h1>
          <Link to="/"><button>Seguir comprando</button></Link>
          <Link to="/checkout"><button>Terminar compra</button></Link>
          <button onClick={vaciarCarrito}>Vaciar carrito</button>
          </div>
        </> 
        : 
        <>
        <div className="my-5 d-flex flex-column align-items-center justify-content-center"> CARRITO VACÍO 
        <Link to="/"><button>Volver al listado</button></Link></div>
        </> 
    );
} 
export default Cart;