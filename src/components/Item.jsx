const Item = ({ item }) => {
    const { title, price, stock, pictureUrl } = item;
    return (
      <div className="card" style={{ width: "20rem" }}>
        <img className="card-img-top" src={pictureUrl} alt="Card image cap" />
        <div className="card-body d-flex flex-column justify-content-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{`${stock} Unidades`}</p>
          <a href="google.com" className="btn btn-primary ">
            Detalles del producto
          </a>
        </div>
      </div>
    );
  };
  
  export default Item;
  