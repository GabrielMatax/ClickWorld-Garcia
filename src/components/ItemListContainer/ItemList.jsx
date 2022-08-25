import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container" style={{marginTop:"50px",marginBottom:"50px"}}>
      <div className="row gap-8">
        {productos.map((producto) => (
          <div key={producto.id} className="col-sm gap-5">
            <Item item={producto} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;