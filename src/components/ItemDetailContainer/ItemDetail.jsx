import ItemCount from '../ItemCount/ItemCount';
import { useContext , useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../contexts/CartContext";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const ItemDetail= ({item}) => {
  const {title, pictureUrl, description, price, stock , color , discount}=item;  
  const {addItem}= useContext(CartContext);
  const [contador, setContador] = useState(0);
  const onAdd=(cant)=>{
    addItem (item, cant);
    setContador(cant);
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
          {contador == 0 ? <ItemCount stock={stock} inicial={1} onAdd={onAdd} /> : <div><h3>{contador} Agregados!</h3> <Link to="/"><button style={{width: "100%", marginTop: "1rem"}}>Seguir comprando</button></Link> </div>}
          <Link to="/cart/"><button style={{width: "100%", marginTop: "1rem"}}>Carrito</button></Link>
        </div>
      </div>

    </div>

  </>
);
}
 
export default ItemDetail;


