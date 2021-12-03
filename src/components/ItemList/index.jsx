import Item from "../Item";

const ItemList = ({ items, onAddList }) => {
  const itemElementList = items.map((item) => (
    <Item
      itemId={item.itemId}
      itemName={item.itemName}
      description={item.description}
      stock={item.stock}
      imageUrl={item.imageUrl}
      category={item.category}
      onAddItem={onAddList}
    />
  ));

  return <div className="list-item-section-container">{itemElementList}</div>;
};

export default ItemList;
