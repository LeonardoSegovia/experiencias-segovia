import "./ItemListContainer.css";
import ItemList from "../ItemList";

const ItemListContainer = ({ items, name, onAddListContainer }) => {
  return (
    <div className="list-item-container">
      <h1>{name}</h1>
      <ItemList items={items} onAddList={onAddListContainer} />
    </div>
  );
};

export default ItemListContainer;
