import "./ItemListContainer.css";

const ItemListContainer = ({ items, name }) => {
  const itemElementList = items.map((elem) => (
    <div style={({ color: "green" }, { margin: "25px" })}> {elem}</div>
  ));
  return (
    <div className="list-item-container">
      <h1>{name}</h1>
      <div style={{ textAlign: "center" }}>{itemElementList}</div>
    </div>
  );
};

export default ItemListContainer;
