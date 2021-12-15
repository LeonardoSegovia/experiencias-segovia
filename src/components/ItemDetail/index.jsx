import { Card } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import { useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = (itemProps) => {
  const [itemAdded, setItemAdded] = useState(false);
  const [items, addItem] = useContext(CartContext);

  const onAdd = (itemId, itemsCount) => {
    console.log("add: ", itemProps)
    setItemAdded(true);
    addItem(itemId, itemProps.item.description, itemProps.item.price, itemsCount);
  };

  return (
    <Card className="item-detail-card">
      <Card.Header>{itemProps.item.title}</Card.Header>
      <Card.Img src={itemProps.item.imageUrl} />
      <Card.Body>
        <p>{itemProps.item.description}</p>
        <p>{itemProps.item.category}</p>
        <div>Precio: $ {itemProps.item.price}</div>
        <div className="item-detail-actions-container">
          {itemAdded ? (
            <Link to={`/Cart`}>
              <Button variant="outline-dark">Terminar Compra</Button>
            </Link>
          ) : (
            <ItemCount
              itemId={itemProps.item.id}
              onAdd={onAdd}
              stock={itemProps.item.stock}
              initial={1}
            />
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ItemDetail;
