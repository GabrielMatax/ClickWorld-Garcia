import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../../Main.css";

const Cart = () => {
    const {cartItems,vaciarCarrito, vaciarItem, precioTotal} =useContext(CartContext);
    const precioFinal=precioTotal();
    
        return ( cartItems.length >0 ?
        <> 
        <div className="cartDiv">
        {cartItems.map(detalle =>
                      <div className="cartInfo">
                          <h3 className="textos" style={{fontSize:"40px"}}> {detalle.item.title}</h3>
                          <img className="card-img-top" src={detalle.item.pictureUrl} style={{ objectFit: "contain", maxHeight: "150px" }} />
                          <p className="textos">Precio: ${detalle.item.price}</p>
                          <p className="textos"> Cantidad: {detalle.quantity}</p>
                          <button className="botonRojo" onClick={()=>vaciarItem(detalle.item.id)}>Eliminar</button>
                       </div>
        )}
          <h1> Total: $ {precioFinal}</h1>
          <Link to="/" className="botonesTexto"><button className="botonesCart">Seguir comprando</button></Link>
          <Link to="/checkout" className="botonesTexto"><button className="botonesCart">Terminar compra</button></Link>
          <button className="botonRojo" onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
        </> 
        : 
        <>
        <div className="my-5 d-flex flex-column align-items-center justify-content-center textos"> CARRITO VACÍO 
        <Link to="/" className="botonesTexto"><button className="botones">Volver al listado</button></Link></div>
        </> 
    );
} 
export default Cart;