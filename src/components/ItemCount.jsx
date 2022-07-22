import {useState } from "react";


const ItemCount = ({stock, inicial}) => {
     
    const [contador, setContador] = useState (inicial)
    const mas = () => {
        if (contador<stock) {setContador (prev=>prev+1)} else {alert ("Lo lamentamos, no puedes agregar más unidades de este producto")}
    }
    const menos = () => {
        if (contador>1 && stock>0) {setContador (prev=>prev-1)}
    } 
     
    const onAdd= ()=>  {console.log ({contador}) ;
      alert(`${contador} Agregados`);       
    }

    return (  <>
        
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button onClick={menos} > - </button>
            <>{contador}</>
            <button onClick={mas}> + </button>
        </div>
        <button onClick={onAdd}> Agregar al carrito</button>
        
        </>
    );
}
 
export default ItemCount;