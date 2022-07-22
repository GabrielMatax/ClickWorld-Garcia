import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

const ItemDetail= ({detalle}) => {
    
return (
  <>
    <div className="container d-flex aling-items-center justify-content-center" style={{ marginTop: "100px" }}>

      <div className="card d-flex aling-items-center justify-content-center" style={{ height: "750px", width: "400px" }}>
        <h1 className="card-title text-center"> {detalle.title}</h1>
        <img className="card-img-top" src={detalle.pictureUrl} style={{ objectFit: "contain", maxHeight: "50%" }} />
        <div className="card-body d-flex flex-column justify-content-center">
          <p className="card-text">{detalle.description}</p>
          <p className="card-text">Precio: {detalle.price}$</p>
          <p className="card-text">Stock: {detalle.stock}</p>
          <p className="card-text">Color: {detalle.color}</p>
          <p className="card-text">Descuento: {detalle.discount}%</p>
          <ItemCount stock={detalle.stock} inicial={1} />
        </div>
      </div>

    </div>

  </>
);
}
 
export default ItemDetail;