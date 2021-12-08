import { Card } from "react-bootstrap";
import "./ItemDetail.css";
import ItemCount from "../ItemCount";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemDetail = (itemProps) => {
  const [itemAdded, setItemAdded] = useState(false);

  function onAdd(itemId, itemsCount) {
    console.log("Se genero el evento onAdd", itemsCount, " itemId ", itemId);
    setItemAdded(true);
  }

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
