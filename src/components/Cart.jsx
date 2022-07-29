import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

const Cart = () => {

  const [totalPrice, setTotalPrice] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    setTotalPrice(total);
  }, [cartItems]);
  return ( totalPrice>0 ?
    <>
        <div style={{display: "inlineBlock", textAlign: "center", margin:"3rem", border: "solid", borderWidth: "1px", padding: "3rem" ,borderColor: "rgb(126, 70, 116)", borderRadius: "4px"}}>
            {cartItems.map(detalle =>
                <div style={{borderBottom: "solid 1px", margin:"1rem"}}>
                    <h3 > {detalle.title}</h3>
                    <p>PRECIO: ${detalle.price}</p>
                </div>
            )}
            <h1 style={{marginTop: "3rem"}}> {`TOTAL:$ ${totalPrice}`}</h1>
            <Link to="/"><button>Seguir comprando</button></Link>
            <Link to="/checkout"><button>Terminar compra</button></Link>
        </div>
    </>
    : 
    <>
        <div className="my-5 d-flex flex-column align-items-center justify-content-center"> CARRITO VACÍO 
        <Link to="/"><button>Volver al listado</button></Link></div>
    </>
  );
};

export default Cart;