import ItemCount from "./ItemCount";

const ItemListContainer = (prop) => {
    const onAddItem = (count) => {
        alert(`Se agregaron ${count} Items`);
    };

    return <ItemCount stock={10} inicial={1} onAdd={onAddItem}></ItemCount>;
}
 
export default ItemListContainer;