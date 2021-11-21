import "./ItemListContainer.css";
import ItemCount from "../ItemCount";

const ItemListContainer = ({ items, name , onAdd}) => {

  const itemElementList = items.map((elem) => (
    <div className="item-container">
      <div style={({ color: "green" }, { margin: "25px" })}> {elem.name}</div>
      <ItemCount initial={1} stock={elem.stock} onAdd={onAdd}/>
      <br/>
      <hr/>
    </div>
  ));
  return (
    <div className="list-item-container">
      <h1>{name}</h1>
      <div style={{ textAlign: "center" }}>{itemElementList}</div>
    </div>
  );
};

export default ItemListContainer;
