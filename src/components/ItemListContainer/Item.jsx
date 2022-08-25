import { Link } from "react-router-dom";
import "../../Main.css"

const Item = ({ item }) => {
    const { title, price, pictureUrl, id, stock } = item;
      
    return (
      <div className="card d-flex justify-content-evenly items">
        <img className="card-img-top" src={pictureUrl} alt="Card image cap" style={{ height:"70%"}} />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title textos">{title}</h5>
          <p className="card-text textos">{`$${price} ARS`}</p>
          <Link to={`/item/${id}`} className="botonesTexto"><button className="botones">Ver Detalles</button></Link>
        </div>
      </div>
    );
};
  
  export default Item;
  