import { useState } from "react";
import swal from "sweetalert";

const ItemCount = ({ stock, inicial, onAdd }) => {
  const [contador, setContador] = useState(inicial);

  const mas = () => {
    if (contador < stock) {
      setContador(prev => prev + 1);
    } else {
      swal (
        {
        title: "ERROR",
        text:"No puedes agregar más unidades de este producto" ,
        icon: "error",}
    )
    }
  };

  const menos = () => {
    if (contador > 1 && stock > 0) {
      setContador(prev => prev - 1);
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button className="botonesCount" onClick={menos}> - </button>
        <div className="botonesTexto">{contador}</div>
        <button className="botonesCount" onClick={mas}> + </button>
      </div>
      <button className="botones" onClick={() => onAdd(contador)}> Agregar al carrito</button>
    </>
  );
};

export default ItemCount;