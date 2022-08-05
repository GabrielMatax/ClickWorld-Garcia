import { Link } from "react-router-dom";

const Item = ({ item }) => {
    const { title, price, pictureUrl, id, stock } = item;
      
    return (
      <div className="card d-flex justify-content-evenly" style={{ width: "20rem", Height:"800px"}}>
        <img className="card-img-top" src={pictureUrl} alt="Card image cap" style={{ Height:"70%"}} />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`$${price} ARS`}</p>
          <Link to={`/item/${id}`}><button >Ver detalle del producto</button></Link>
        </div>
      </div>
    );
};
  
  export default Item;
  