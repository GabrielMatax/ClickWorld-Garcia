import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const Checkout = () => {
    const {precioTotal, sendOrder} =useContext(CartContext);
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
                        <label htmlFor="">Nombre y Apellido</label>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <label htmlFor="">E-mail</label>
                        <input type="email" name="" id="" />
                    </div>
              
                    <div className="d-flex flex-column align-items-center">
                        <label htmlFor="">Teléfono</label>
                        <input type="number" name="" id="" />
                    </div>
              
                    <button style={{width:"100%"}} onClick={()=>sendOrder(finalPrice)} type="submit">Enviar</button>
                  </form>
                  <div className="d-flex flex-column align-items-center mt-4" >
                    <Link to="/cart"><button style={{width:"190px"}}>Volver al carrito</button></Link>
                    <Link to="/"><button style={{width:"190px"}}>Home</button></Link>
                  </div>
              </div>

        </> 
    );
} 
export default Checkout;