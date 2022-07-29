import { useState , useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from "../contexts/CartContext";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const ItemDetail= ({detalle}) => {
  const {title, pictureUrl, description, price, stock , color , discount}=detalle;  
  const [contador, setContador] = useState(0);
  const {setCartItems}= useContext(CartContext);
  
  const onAdd = (contador) => {
    setContador(contador);
    setCartItems((prev) => [...prev, detalle]);
  };

  return (
  <>
    <div className="container d-flex aling-items-center justify-content-center" style={{ marginTop: "100px" }}>

      <div className="card d-flex aling-items-center justify-content-center" style={{ height: "750px", width: "400px" }}>
        <h1 className="card-title text-center"> {title}</h1>
        <img className="card-img-top" src={pictureUrl} style={{ objectFit: "contain", maxHeight: "50%" }} />
        <div className="card-body d-flex flex-column justify-content-center">
          <p className="card-text">{description}</p>
          <p className="card-text">Precio: {price}$</p>
          <p className="card-text">Stock: {stock - contador}</p>
          <p className="card-text">Color: {color}</p>
          <p className="card-text">Descuento: {discount}%</p>
          {contador == 0 ? <ItemCount stock={stock} inicial={1} onAdd={onAdd} /> : <h3>{contador} Agregados!</h3>}
          <Link to="/cart/"><button style={{width: "100%", marginTop: "1rem"}}>Carrito</button></Link>
        </div>
      </div>

    </div>

  </>
);
}
 
export default ItemDetail;


