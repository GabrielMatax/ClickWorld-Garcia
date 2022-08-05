import Item from "./Item";

const ItemList = ({ productos }) => {
  return (
    <div className="container">
      <div className="row">
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