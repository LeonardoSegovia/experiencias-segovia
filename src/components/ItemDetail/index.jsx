import { Card } from "react-bootstrap";
import "./ItemDetail.css";

const ItemDetail = (itemProps) => {
  return (
      <Card className="item-detail-card">
        <Card.Header>{itemProps.item.title}</Card.Header>
        <Card.Img src={itemProps.item.imageUrl} />
        <Card.Body>{itemProps.item.description}</Card.Body>
        <Card.Footer>Precio: ${itemProps.item.price}</Card.Footer>
      </Card>
  );
};

export default ItemDetail;
