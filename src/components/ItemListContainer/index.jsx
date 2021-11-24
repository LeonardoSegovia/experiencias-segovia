import "./ItemListContainer.css";
import Item from "../Item";

const ItemListContainer = ({ items, name, onAdd }) => {
  const itemElementList = items.map((item) => (
    <Item
      itemId={item.itemId}
      itemName={item.itemName}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  ));
  return (
    <div className="list-item-container">
      <h1>{name}</h1>
      <div className="list-item-section-container">{itemElementList}</div>
    </div>
  );
};

export default ItemListContainer;
