import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "../../Main.css";

const Checkout = () => {
    const {precioTotal, sendOrder, vaciarCarrito} =useContext(CartContext);
    const finalPrice=precioTotal();
    const submitForm= (e) =>{
      e.preventDefault();
      const inputs=document.getElementsByTagName ("input");
      const data= Array.from (inputs).map ((input)=>input.value);
      sendOrder(finalPrice, {nombre:data[0],email:data[1],telefono:data[2]})
     }

     return ( 
        <> 
          
              <h1 className="d-flex flex-column align-items-center my-5"> Total: $ {finalPrice}</h1>
              <div className="card align-items-center justify-content-center">
                  <form className="d-flex flex-column align-items-center gap-2" onSubmit={submitForm}>
                    <div className="d-flex flex-column align-items-center">
                        <label className="textos" htmlFor="">Nombre</label> 
                        <input type="text" required="required" />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <label className="textos" htmlFor="">Apellido</label>
                        <input type="text" required="required" />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <label className="textos" htmlFor="">E-mail</label>
                        <input type="email" required="required" />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <label className="textos" htmlFor="">Teléfono</label>
                        <input type="number" name="" id="" />
                    </div>
              
                    <button className="botones" style={{width:"100%"}} onClick={()=>sendOrder(finalPrice)} type="submit">Enviar</button>
                  </form>
                  <div className="d-flex flex-column align-items-center mt-4" >
                    <Link className="botonesTexto" to="/cart"><button className="botones" style={{width:"190px"}}>Volver al carrito</button></Link>
                    <Link className="botonesTexto" to="/"><button className="botonRojo" onClick={vaciarCarrito} style={{width:"190px"}}>Menú</button></Link>
                  </div>
              </div>

        </> 
    );
} 
export default Checkout;