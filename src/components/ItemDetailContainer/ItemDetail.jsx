import ItemCount from '../ItemCount/ItemCount';
import { useContext , useState} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../contexts/CartContext";
import swal from "sweetalert";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const ItemDetail= ({item}) => {
  const {title, pictureUrl, description, price, stock , color , discount}=item;  
  const {addItem, vaciarItem}= useContext(CartContext);
  const [contador, setContador] = useState(0);
  const onAdd=(cant)=>{
    addItem (item, cant);
    setContador(cant);
    if (item.stock > 0 && cant <= item.stock) { item.stock = item.stock - cant; }
    else if (item.stock < 0) { vaciarItem() }
    else {
      swal(
        {
          text: `${stock} unidades disponibles, vuelve a intentarlo`,
          icon: "error"
        }
      );
      item.stock = "???";
      vaciarItem();
    }
  }; 

  return ( (item.stock>0)  ?
  <>
    <div className="container d-flex aling-items-center justify-content-center" style={{ marginTop: "100px" }}>

      <div className="card d-flex aling-items-center justify-content-center" style={{ height: "750px", width: "400px" }}>
        <h1 className="card-title text-center"> {title}</h1>
        <img className="card-img-top" src={pictureUrl} style={{ objectFit: "contain", maxHeight: "50%" }} />
        <div className="card-body d-flex flex-column justify-content-center">
          <p className="card-text textos">Precio: {price}$</p>
          <p className="card-text textos">Stock: {stock}</p>
          <p className="card-text textos">Color: {color}</p>
          <p className="card-text textos">DPI: {description}</p>
          {contador == 0 ? <ItemCount stock={stock} inicial={1} onAdd={onAdd} /> : <div><h3>{contador} Agregados!</h3> <Link to="/" className='botonesTexto'><button className='botones' style={{width: "100%", marginTop: "1rem"}}>Seguir comprando</button></Link> </div>}
          <Link to="/cart/" className='botonesTexto'><button className='botones' style={{width: "100%", marginTop: "1rem"}}>Carrito</button></Link>
        </div>
      </div>

    </div>
  </>
  :
  <div className="container d-flex aling-items-center justify-content-center" style={{ marginTop: "100px" }}>

      <div className="card d-flex aling-items-center justify-content-center" style={{ height: "750px", width: "400px" }}>
        <h1 className="card-title text-center"> {title}</h1>
        <img className="card-img-top" src={pictureUrl} style={{ objectFit: "contain", maxHeight: "50%" }} />
        <div className="card-body d-flex flex-column justify-content-center">
          <p className="card-text textos">Precio: {price}$</p>
          <p className="card-text textos">Stock: {stock}</p>
          <p className="card-text textos">Color: {color}</p>
          <p className="card-text textos">DPI: {description}</p>
          <div><h3>AGOTADO!</h3></div>
          <Link to="/" className='botonesTexto'><button className='botones' style={{width: "100%", marginTop: "1rem"}}>Volver al listado</button></Link>
          <Link to="/cart/" className='botonesTexto'><button className='botones' style={{width: "100%", marginTop: "1rem"}}>Carrito</button></Link>
        </div>
      </div>

    </div>
);
}
 
export default ItemDetail;


